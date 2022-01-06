import Link from "next/link";

function BlogHome() {
  return (
    <div>
      <h1>Blog Index</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export default BlogHome;
