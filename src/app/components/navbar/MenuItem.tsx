"use client";

import { FC } from "react";

interface MenuItemProps {
  onMenuItemClick: () => void;
  label: string;
}

export const MenuItem: FC<MenuItemProps> = ({ onMenuItemClick, label }) => (
  <div
    className="
    px-4 
    py-3 
    hover:bg-neutral-100 
    transition 
    font-semibold"
    onClick={onMenuItemClick}
  >
    {label}
  </div>
);
