import Image from "next/image";
import client from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import PortfolioCard from "@/components/PortfolioCard";

export async function getPortfolio() {
  try {
    const portfolio = await client.fetch(`*[_type == "portfolyo"]`, {
      next: {
        revalidate: 3,
      },
    });
    return portfolio;
  } catch (error) {
    console.log(error, "Portfolyo alınamadı.");
    throw new Error(error);
  }
}

export default async function PortfolyoPage() {
  const portfolio = await getPortfolio();

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="mt-20">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-4xl font-semibold leading-6 text-gray-900">
            Portfolyo
          </span>
        </div>
      </div>
      {portfolio.map((item) => {
        const image = urlFor(item.image).width(300).height(450).url();
        return <PortfolioCard key={item.book} portfolio={item} image={image} />;
      })}
    </div>
  );
}
