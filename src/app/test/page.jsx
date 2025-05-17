"use client";

import { useState } from "react";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
/*
export default function VideoPlayer() {
  const [m3u8Url, setM3u8Url] = useState(""); // State to store the input URL
  const [proxyUrl, setProxyUrl] = useState(""); // State to store the proxy URL for playback

  const handlePlay = () => {
    if (!m3u8Url) {
      alert("Please enter a valid M3U8 URL!");
      return;
    }

    // Generate the proxy URL dynamically
    const generatedProxyUrl = `/api/proxy?url=${encodeURIComponent(m3u8Url)}`;
    setProxyUrl(generatedProxyUrl);
  };

  return (
    <div>
      <h1>Video Player</h1>

      {/* Input Field for User to Enter M3U8 URL */}
      <input
        type="text"
        placeholder="Enter .m3u8 URL"
        value={m3u8Url}
        onChange={(e) => setM3u8Url(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      {/* Button to Load Video */}
      <button
        onClick={handlePlay}
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Play Video
      </button>

      {/* Video Player */}
     
           <MediaPlayer title="Anime" src={proxyUrl}>
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
}
*/

export default function VideoPlay() {
const url = 'https://vault-12.kwik.cx/mp4/12/09/949d262c0a4c08f7420ec823a4fc2d8f174823aafed036ca9dd378774b56c7b2?file=AnimePahe_Solo_Leveling_-_01_360p_SubsPlease.mp4';
return (
<video src={url} width={100} height={70} />
)