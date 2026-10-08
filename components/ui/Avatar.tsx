"use client";

import Image from "next/image";
import { useState } from "react";

type AvatarProps = {
  src: string;
  name: string;
};

export default function Avatar({ src, name }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <span className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-navy font-head text-base font-semibold text-gold ring-2 ring-gold/60 ring-offset-2 ring-offset-white">
      {failed ? (
        <span aria-hidden="true">{initials}</span>
      ) : (
        <Image
          src={src}
          alt={`Portrait of ${name}`}
          fill
          sizes="56px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
