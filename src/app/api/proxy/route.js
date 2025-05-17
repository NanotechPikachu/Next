// app/api/proxy/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return new NextResponse("Missing 'url' query parameter", { status: 400 });
  }

  try {
    // Fetch the M3U8 file
    const response = await fetch(targetUrl);

    if (!response.ok) {
      return new NextResponse("Failed to fetch playlist", { status: response.status });
    }

    let playlistContent = await response.text();

    // Rewrite segment URLs to go through the proxy
    playlistContent = playlistContent
  // Replace EXT-X-KEY URI (handles both quoted and unquoted)
  .replace(/(#EXT-X-KEY:.*URI=)(\"?)(https?:\/\/[^",\s]+)(\"?)/g, (match, p1, p2, url, p4) => {
    return `${p1}${p2}/api/proxy?url=${encodeURIComponent(url)}${p4}`;
  })
  // Replace segment/fragment URLs (these are the lines not starting with #)
  .replace(/^((?!#)[\w\d:/\-.?&=%]+)/gm, (line) => {
    if (/^https?:\/\//.test(line)) {
      return `/api/proxy?url=${encodeURIComponent(line)}`;
    }
    return line; // leave relative URLs as-is, or proxy them if you want
  });

    return new NextResponse(playlistContent, {
      headers: {
        "Content-Type": "application/vnd.apple.mpegurl",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}