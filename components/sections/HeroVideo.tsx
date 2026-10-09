"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  src?: string;
  poster?: string;
  className?: string;
};

export default function HeroVideo({
  src = "/videos/hero.mp4",
  poster = "/images/poster.jpg",
  className = "h-full w-full object-cover object-[50%_38%]",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React doesn't reliably render the muted attribute in server HTML,
    // so set it directly, then start playback.
    video.muted = true;
    video.defaultMuted = true;
    video.play().catch(() => {
      // Autoplay blocked (e.g. iOS Low Power Mode): the poster image stays visible.
    });
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
