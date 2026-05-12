const FEATURES = [
  {
    title: "Улаанбаатар хотод үнэгүй хүргэлт",
    body: "Улаанбаатар хотын дотор бүх захиалгад үнэгүй хүргэлт хийдэг. Хүргэлт 1–3 ажлын өдрийн дотор хийгддэг.",
  },
  {
    title: "1 жилийн баталгаа",
    body: "Бид борлуулдаг бүх оёдлын машинд 12 сарын үйлчилгээний баталгаа өгдөг. Асуудал гарвал мэргэжилтнүүд шуурхай шийдвэрлэнэ.",
  },
  {
    title: "Мэргэжлийн зөвлөгөө",
    body: "Ямар машин хэрэгтэйгээ мэдэхгүй байна уу? Манай мэргэжилтнүүд танд хамгийн тохирох сонголтыг санал болгоно.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-14 bg-[#F7F7F7] border-t border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {FEATURES.map((f) => (
            <div key={f.title}>
              <h3 className="font-bold text-[#111111] text-sm mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
