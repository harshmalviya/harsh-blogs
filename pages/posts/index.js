import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all the posts available on the blogspot."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}
export default AllPostsPage;

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts
    }
  };
}
