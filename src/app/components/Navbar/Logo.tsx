"use client";

import { FC } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

interface LogoProps {}

export const Logo: FC<LogoProps> = (props) => {
  const router = useRouter;
  return (
    <Image
      alt="Logo"
      src="/images/logo.png"
      className="hidden md:block cursor-pointer "
      height={100}
      width={100}
    />
  );
};
