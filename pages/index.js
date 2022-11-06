import Head from 'next/head'
import Layout from '../components/layout/layout'
import Trending from '../components/trending'
import Latest from '../components/latest'
import MostPopular from '../components/mostPopular'
import PostByCategory from '../components/postByCategory'

export default function Home({ posts, trending, popular }) {
  return (
    <>
      <Head>
        <title>A24 Blog</title>
        <meta name="description" content="A24 Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Trending posts={trending} />
        <Latest posts={posts} />
        <MostPopular posts={popular} />
        <PostByCategory posts={posts} />
      </Layout>
    </>
  )
}
export async function getServerSideProps() {
  const [
    postres,
    trendingres,
    popularres
  ] = await Promise.all([
    fetch('http://localhost:3000/api/posts'),
    fetch('http://localhost:3000/api/trending'),
    fetch('http://localhost:3000/api/popular')
  ])

  return {
    props: {
      posts:await postres.json(),
      trending:await trendingres.json(),
      popular:await popularres.json()
    }
  }
}