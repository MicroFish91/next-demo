import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
    // router.replace("/product")
  };

  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>{" "}
      <Link href="/product">
        <a>Product</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <br />
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
