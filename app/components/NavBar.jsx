"use client";
import clsx from "clsx";
import ProfileBtn from "./ProfileButton";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [selected, setSelected] = useState();

  const Selection = {
    task: "task",
    search: "search",
    inbox: "inbox",
    today: "today",
    upcoming: "upcoming",
  };

  const changeSelection = (selection) => {
    setSelected(selection);
  };
  return (
    <div className="w-1/12">
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <h1>LOGO</h1>

          <ul className="mt-6 space-y-1">
            <li
              onClick={() => {
                changeSelection(Selection.task);
              }}
            >
              <Link
                href=""
                className={clsx(
                  "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                  {
                    "bg-gray-100 text-gray-700": selected === Selection.task,
                  }
                )}
              >
                Add Task
              </Link>
            </li>

            <li
              onClick={() => {
                changeSelection(Selection.search);
              }}
            >
              <Link
                href=""
                className={clsx(
                  "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                  {
                    "bg-gray-100 text-gray-700": selected === Selection.search,
                  }
                )}
              >
                Search
              </Link>
            </li>

            <li
              onClick={() => {
                changeSelection(Selection.inbox);
              }}
            >
              <Link
                href={`/app/${Selection.inbox}`}
                className={clsx(
                  "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                  {
                    "bg-gray-100 text-gray-700": selected === Selection.inbox,
                  }
                )}
              >
                Inbox
              </Link>
            </li>

            <li
              onClick={() => {
                changeSelection("today");
              }}
            >
              <Link
                href={`/app/${Selection.today}`}
                className={clsx(
                  "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                  {
                    "bg-gray-100 text-gray-700": selected === Selection.today,
                  }
                )}
              >
                Today
              </Link>
            </li>

            <li
              onClick={() => {
                changeSelection("upcoming");
              }}
            >
              <Link
                href={`/app/${Selection.upcoming}`}
                className={clsx(
                  "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                  {
                    "bg-gray-100 text-gray-700":
                      selected === Selection.upcoming,
                  }
                )}
              >
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <form action="/logout">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
