import Link from "next/link";

const CATEGORIES = [
  { id: 1, name: "Хүнд Машин" },
  { id: 2, name: "Оёдлын Машин" },
  { id: 3, name: "Багц Хямдрал" },
  { id: 4, name: "Оверлок" },
  { id: 5, name: "Үлдэгдэл Бараа" },
  { id: 6, name: "Машин Олох" },
];

export default function CategoryGrid() {
  return (
    <section className="bg-[#F7F7F7] py-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-sm text-center text-gray-500 mb-7">
          Танд тохирох машинаа сонгоорой
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} href="#" className="block text-center group">
              <div className="aspect-square bg-white overflow-hidden mb-2 rounded-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://placehold.co/300x300/e8e8e8/aaaaaa?text=${encodeURIComponent(cat.name)}`}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-sm text-[#111111] group-hover:underline leading-snug">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Link
            href="#"
            className="px-7 py-2 border border-[#111111] rounded-full text-sm text-[#111111] bg-white hover:bg-[#111111] hover:text-white transition-colors duration-150"
          >
            Бүх Машин Үзэх
          </Link>
        </div>
      </div>
    </section>
  );
}
