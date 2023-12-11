"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function ProfileButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = (evt) => {
    evt.preventDefault();
    setClicked(!clicked);
  };

  return (
    <div className="relative">
      <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
        <button
          className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          onClick={handleClick}
        >
          Profile
        </button>

        <button
          className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          onClick={handleClick}
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={clsx(
          "absolute z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg",
          { hidden: clicked === false }
        )}
        role="menu"
      >
        <div className="p-2">
          <strong className="block p-2 text-xs font-medium uppercase text-gray-400">
            {" "}
            General{" "}
          </strong>

          <Link
            href=""
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            Settings
          </Link>

          <Link
            href=""
            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            Print
          </Link>
        </div>
        <div className="p-2">
          <form method="POST" action="#">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
              role="menuitem"
            >
              Log Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
