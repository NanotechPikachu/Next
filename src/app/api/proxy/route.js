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
    playlistContent = playlistContent.replace(/(https?:\/\/[^\s]+)/g, (match) => {
      return `/api/proxy?url=${encodeURIComponent(match)}`;
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