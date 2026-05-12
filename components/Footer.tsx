import Link from "next/link";

const SHOP_LINKS = [
  { label: "Хүнд Машин", href: "#" },
  { label: "Оёдлын Машин", href: "#" },
  { label: "Оверлок", href: "#" },
  { label: "Хэрэгсэл", href: "#" },
];

const HELP_LINKS = [
  { label: "Холбоо барих", href: "#" },
  { label: "Баталгаа", href: "#" },
  { label: "Хүргэлт", href: "#" },
  { label: "Буцаалт", href: "#" },
];

const COMPANY_LINKS = [
  { label: "Бидний тухай", href: "#" },
  { label: "Салбарууд", href: "#" },
  { label: "Ажлын байр", href: "#" },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-[#C8102E] font-bold text-base mb-3">
              Оёдлын Дэлгүүр
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Монголын оёдлын машины дэлгүүр, 2020 оноос
            </p>
          </div>

          <LinkColumn title="Дэлгүүр" links={SHOP_LINKS} />
          <LinkColumn title="Тусламж" links={HELP_LINKS} />
          <LinkColumn title="Компани" links={COMPANY_LINKS} />
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; 2025 Оёдлын Дэлгүүр. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <p className="text-xs text-gray-600">Улаанбаатар, Монгол улс</p>
        </div>
      </div>
    </footer>
  );
}
