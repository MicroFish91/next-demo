const Post = ({ post }) => {
  return (
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

/*
  paths: [
        { params: { postId: "1" } },
        { params: { postId: "2" } },
        { params: { postId: "3" } },
      ],
*/

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    /*
      paths: [
            { params: { postId: "1" } },
            { params: { postId: "2" } },
            { params: { postId: "3" } },
          ],
    */
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  // https://jsonplaceholder.typicode.com/posts/1
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  console.log(`Generating page for /posts/${params.postId}`);

  return {
    props: {
      post: data,
    },
  };
}
