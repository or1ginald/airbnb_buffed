"use client";

import { FC } from "react";

import Image from "next/image";

interface AvatarProps {}

export const Avatar: FC<AvatarProps> = (props) => (
  <Image
    className="rounded-full"
    height={30}
    width={30}
    alt="Avatar"
    src="/images/placeholder.jpg"
  />
);
