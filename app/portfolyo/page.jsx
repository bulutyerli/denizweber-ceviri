import { sanityFetch, urlFor } from "@/lib/sanity.client";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioQuery } from "@/lib/sanity.query";

export const metadata = {
  title: "Deniz Weber İngilizce - Türkçe Kitap, Edebi Çeviri Portfolyo",
  description:
    "Seda Ulu - Işıktaki Karanlık, Halil Cibran Kitapları ve F. Scott Fitzgerald - Muhteşem Gatsby gibi eserlerin çevirisinin de bulunduğu portfolyo",
};

export default async function PortfolyoPage() {
  const portfolio = await sanityFetch({
    query: portfolioQuery,
    tags: "portfolyo",
  });

  return (
    <div className="mt-20">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <h1 className="bg-white px-3 text-4xl font-semibold leading-6 text-gray-900">
            Portfolyo
          </h1>
        </div>
      </div>
      {portfolio.map((item) => {
        const image = urlFor(item.image).width(384).height(576).url();
        return <PortfolioCard key={item.book} portfolio={item} image={image} />;
      })}
    </div>
  );
}
