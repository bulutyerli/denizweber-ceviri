import ReviewCard from "@/components/ReviewCard";
import client from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

export async function getReviews() {
  try {
    const reviews = await client.fetch(
      `*[_type == "review"] | order(_createdAt asc)`,
      {
        next: {
          revalidate: 5,
        },
      }
    );
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
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-4xl font-semibold leading-6 text-gray-900">
            Yorumlar
          </span>
        </div>
      </div>
      {reviews.map((review, i) => {
        const image = urlFor(review.image).width(300).height(300).url();
        return <ReviewCard key={i} reviews={review} image={image} />;
      })}
    </div>
  );
}
