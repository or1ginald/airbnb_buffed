"use client";

import { FC } from "react";

import { BiSearch } from "react-icons/all";

interface SearchProps {}

export const Search: FC<SearchProps> = (props) => (
  <div
    className="
       border-[1px]
       w-full
       md:w-auto
       py-2
       rounded-full
       shadow-sm
       hover:shadow-md
       transition
       cursor-pointer"
  >
    <div className="flex flex-row items-center justify-between">
      <div
        className="
         text-sm
         font-semibold
         px-6"
      >
        Anywhere
      </div>
      <div
        className="
        hidden
        sm:block
        text-sm
        font-semibold
        px-6 border-x-[1px]
        flex-1 text-center"
      >
        Any week
      </div>
      <div
        className="
        text-sm
        pl-6
        pr-2
      text-gray-600
        flex flex-row
        items-center
        gap-3"
      >
        <div
          className="
          hidden sm:block"
        >
          Add guests
        </div>
        <div className="p-2 bg-rose-500 rounded-full text-white">
          <BiSearch />
        </div>
      </div>
    </div>
  </div>
);