import ProfileBtn from "./profile-btn";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="w-1/6 bg-[#F5F5F5]">
            <div className="flex h-screen flex-col justify-between border-e bg-white">
                <div className="px-4 py-6">
                    <ProfileBtn />

                    <ul className="mt-6 space-y-1">
                        <li>
                            <Link
                                href=""
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Add Task
                            </Link>
                        </li>

                        <li>
                            <Link
                                href=""
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Search
                            </Link>
                        </li>

                        <li>
                            <Link
                                href=""
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Inbox
                            </Link>
                        </li>

                        <li>
                            <Link
                                href=""
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Today
                            </Link>
                        </li>

                        <li>
                            <Link
                                href=""
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
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
