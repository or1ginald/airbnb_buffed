"use client";

import { FC } from "react";

import Image from "next/image";

interface AvatarProps {
  src?: string;
}

export const Avatar: FC<AvatarProps> = ({ src }) => (
  <Image
    className="rounded-full"
    height={30}
    width={30}
    alt="Avatar"
    src={src || "/images/placeholder.jpg"}
  />
);
