"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  "Хүнд Машин",
  "Оёдлын Машин",
  "Даавуу",
  "Хэрэгсэл",
  "Хямдрал",
  "Тохирох Машин",
];

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 h-16 grid grid-cols-3 items-center gap-4">
        {/* Search */}
        <div className="relative max-w-xs">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Хайх"
            className="w-full border border-[#E5E5E5] rounded-full py-1.5 pl-9 pr-4 text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-gray-400 bg-white"
          />
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" className="inline-flex items-baseline">
            <span className="text-[#C8102E] font-bold text-xl tracking-tight leading-none">
              Оёдлын Дэлгүүр
            </span>
            <span className="text-[10px] text-gray-400 font-normal ml-0.5">
              .mn
            </span>
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end gap-5">
          <Link
            href="#"
            className="text-sm text-gray-700 hover:text-[#111111] whitespace-nowrap hidden sm:block"
          >
            Дэлгүүр Хайх
          </Link>
          <Link
            href="#"
            aria-label="Хэрэглэгч"
            className="text-gray-500 hover:text-[#111111]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
          <Link
            href="#"
            aria-label="Сагс"
            className="text-gray-500 hover:text-[#111111]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Nav */}
      <div className="border-t border-[#E5E5E5]">
        <nav className="max-w-[1280px] mx-auto px-6 overflow-x-auto">
          <ul className="flex items-center justify-center gap-7 h-10 whitespace-nowrap">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#111111]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="h-px bg-[#E5E5E5]" />
    </header>
  );
}
