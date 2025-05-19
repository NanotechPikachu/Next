"use client";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

export default function Video({ url }) {
//const url = "https://eb.netmagcdn.com:2228/hls-playback/c4a118d46c938fbc1e48412a95ec757a602fafdc0650c443c91cfd2c1366edcb428ea1406ff4b1b9f6bb25e8a924bbdb33d3dbe20ff5298588039a727d4f42cb061ed0a47080afc691ed211d446767de5303eed6ebf4ff8ebbc47938d7780f3c314ec8e6282156c194bf8ca66c9b7d585b5539bdd83419c62f8c137a3fba4c282d153e4c45e38c57906b951344a98186/master.m3u8";
return (
           <MediaPlayer title="Anime" src={url}>
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
)
}