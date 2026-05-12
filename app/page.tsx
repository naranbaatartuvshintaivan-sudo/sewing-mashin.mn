import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import MostPopular from "@/components/MostPopular";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CategoryGrid />
        <MostPopular />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
