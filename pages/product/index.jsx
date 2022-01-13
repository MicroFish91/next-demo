import Link from "next/link";

function ProductList() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/product/1">
        <a>Product 1</a>
      </Link>
      {/*
        Hitting back arrow behaves differently with 'replace'
        and doesn't add the new url to the stack
      */}
      <Link href="/product/2" replace>
        <a>Product 2</a>
      </Link>
    </>
  );
}

export default ProductList;
