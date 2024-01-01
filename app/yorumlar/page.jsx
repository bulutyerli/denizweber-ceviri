import ReviewCard from "@/components/ReviewCard";
import client from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

export const metadata = {
  title: "Deniz Weber Çeviri: Yazar Yorumları",
  description:
    "Deniz Weber'in kitap çevirisi, edebi çeviri ve çeviri kontrol hizmetleri için yazarlar tarafından yazılan övgü dolu yorumlar. İnceleme ve geri bildirimler.",
};

export async function getReviews() {
  try {
    const reviews = await client.fetch(
      `*[_type == "review"] | order(_updatedAt desc)`
    );
    if (!reviews) {
      throw new Error(error);
    }
    return reviews;
  } catch (error) {
    console.log(error, "Yorumlar alınamadı.");
    throw new Error(error);
  }
}

export default async function YorumlarPage() {
  const reviews = await getReviews();
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div>
      <div className="relative max-w-4xl mx-auto mt-20">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <h1 className="bg-white px-3 text-4xl font-semibold leading-6 text-gray-900">
            Yorumlar
          </h1>
        </div>
      </div>
      {reviews.map((review, i) => {
        const image = urlFor(review.image).width(300).height(300).url();
        return <ReviewCard key={i} reviews={review} image={image} />;
      })}
    </div>
  );
}
