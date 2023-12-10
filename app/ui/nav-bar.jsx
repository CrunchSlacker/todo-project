"use client";
import clsx from "clsx";
import ProfileBtn from "./profile-btn";
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
        <div className="w-1/6 bg-[#F5F5F5]">
            <div className="flex h-screen flex-col justify-between border-e bg-white">
                <div className="px-4 py-6">
                    <ProfileBtn />

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
                                        "bg-gray-100 text-gray-700":
                                            selected === Selection.task,
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
                                        "bg-gray-100 text-gray-700":
                                            selected === Selection.search,
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
                                href=""
                                className={clsx(
                                    "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                                    {
                                        "bg-gray-100 text-gray-700":
                                            selected === Selection.inbox,
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
                                href=""
                                className={clsx(
                                    "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                                    {
                                        "bg-gray-100 text-gray-700":
                                            selected === Selection.today,
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
                                href=""
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
            </div>
        </div>
    );
}
