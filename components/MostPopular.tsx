"use client";
import { useRef } from "react";
import Link from "next/link";

const PRODUCTS = [
  {
    id: 1,
    name: "Хүнд Машин 4423",
    price: "850,000₮",
    img: "https://placehold.co/600x480/ececec/888888?text=4423",
  },
  {
    id: 2,
    name: "Оёдлын Машин Багц",
    price: "1,200,000₮",
    img: "https://placehold.co/600x480/ececec/888888?text=Bagts",
  },
  {
    id: 3,
    name: "Ягаан Анхан Шатны Машин",
    price: "450,000₮",
    img: "https://placehold.co/600x480/ececec/888888?text=Anhan",
  },
  {
    id: 4,
    name: "Хөнжилний Машин 9960",
    price: "1,650,000₮",
    img: "https://placehold.co/600x480/ececec/888888?text=9960",
  },
];

export default function MostPopular() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-[#111111] mb-8">
          Эрэлттэй Бараа
        </h2>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-[45%] -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center border border-[#E5E5E5] rounded-full bg-white hover:bg-[#F7F7F7] shadow-sm"
            aria-label="Өмнөх"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Product row */}
          <div
            ref={scrollRef}
            className="grid gap-5 overflow-x-auto pb-1"
            style={{
              gridTemplateColumns: "repeat(4, minmax(220px, 1fr))",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {PRODUCTS.map((product) => (
              <Link key={product.id} href="#" className="block group min-w-0">
                <div className="bg-[#F7F7F7] overflow-hidden rounded-md mb-3 aspect-[5/4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-medium text-[#111111] leading-snug group-hover:underline">
                  {product.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">{product.price}</p>
              </Link>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-[45%] -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center border border-[#E5E5E5] rounded-full bg-white hover:bg-[#F7F7F7] shadow-sm"
            aria-label="Дараах"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
