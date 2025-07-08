import React from "react";
import { FaSearch } from "react-icons/fa";
import { Bell } from "lucide-react";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-white px-6 py-3 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-purple-600 font-bold text-xl">H</span>
        <span className="text-gray-700 font-semibold text-lg">-care</span>
      </div>

      <div className="relative w-full max-w-xl mx-8">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="w-5 h-5 text-gray-400 cursor-pointer" />

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40?img=13"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">Emma Kwan</span>
          <span className="text-xs text-gray-400">▼</span>
        </div>
      </div>
    </header>
  );
}
