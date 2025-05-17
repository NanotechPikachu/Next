"use client";

export default function VideoPlay() {
const url = 'https://vault-12.kwik.cx/mp4/12/09/949d262c0a4c08f7420ec823a4fc2d8f174823aafed036ca9dd378774b56c7b2?file=AnimePahe_Solo_Leveling_-_01_360p_SubsPlease.mp4';
return (
<video src={url} controls width={200} height={100} />
)
}