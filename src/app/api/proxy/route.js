import { NextResponse } from "next/server";

// Helper to resolve relative URLs in playlists
function resolveUrl(base, relative) {
  try {
    return new URL(relative, base).href;
  } catch {
    return relative; // fallback
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return new NextResponse("Missing 'url' query parameter", { status: 400 });
  }

  // Prevent infinite proxy loops
  if (targetUrl.includes('/api/proxy')) {
    return new NextResponse("Refusing to proxy our own endpoint.", { status: 400 });
  }

  try {
    const response = await fetch(targetUrl);

    if (!response.ok) {
      return new NextResponse("Failed to fetch resource", { status: response.status });
    }

    // Handle M3U8 playlist files
    if (targetUrl.endsWith(".m3u8")) {
      let playlistContent = await response.text();

      // Rewrite EXT-X-KEY absolute URIs
      playlistContent = playlistContent.replace(
        /(#EXT-X-KEY:.*URI=)(\"?)(https?:\/\/[^",\s]+)(\"?)/g,
        (match, p1, p2, url, p4) => {
          return `${p1}${p2}/api/proxy?url=${encodeURIComponent(url)}${p4}`;
        }
      );

      // Rewrite segment URLs (absolute or relative, non-comment lines)
      playlistContent = playlistContent.replace(
        /^((?!#)[^\r\n]+)/gm,
        (line) => {
          let trimmed = line.trim();
          if (!trimmed) return line;
          if (/^https?:\/\//.test(trimmed)) {
            // Absolute URL
            return `/api/proxy?url=${encodeURIComponent(trimmed)}`;
          }
          // Relative URL
          const absUrl = resolveUrl(targetUrl, trimmed);
          return `/api/proxy?url=${encodeURIComponent(absUrl)}`;
        }
      );

      return new NextResponse(playlistContent, {
        headers: {
          "Content-Type": "application/vnd.apple.mpegurl",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } else {
      // Proxy binary files (segments, keys, etc)
      const arrayBuffer = await response.arrayBuffer();
      return new NextResponse(arrayBuffer, {
        headers: {
          "Content-Type": response.headers.get("content-type") || "application/octet-stream",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  } catch (error) {
    console.error("Proxy error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}