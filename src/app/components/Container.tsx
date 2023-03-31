"use client";

import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-4 px-2 ">
    {children}
  </div>
);
