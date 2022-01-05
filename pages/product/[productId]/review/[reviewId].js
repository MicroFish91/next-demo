import { useRouter } from "next/router";

// localhost:3000/product/1/review/1
function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <>
      <h1>
        Review {reviewId} for product {productId}.
      </h1>
    </>
  );
}

export default Review;
