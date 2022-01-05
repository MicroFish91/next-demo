import { useRouter } from "next/router";

// localhost:3000/product
function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <>
      <h1>Details about Product {productId}</h1>
    </>
  );
}

export default ProductDetail;
