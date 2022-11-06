import Head from 'next/head'
import Layout from "../../components/layout/layout"
import Author from "../../components/author"
import Image from "next/image"
import Related from "../../components/related"
import Error from '../../components/error'

function postId({ post, related }) {
    return (
        <>
            <Head>
                <title>A24 Blog | Details</title>
                <meta name="description" content="A24 Blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                {post === 'Post Not Found' ?
                    (
                        <Error error={post}/>
                    )
                    :
                    (
                        <section className="container mx-auto md:px-2 px-4 py-16 md:w-1/2">
                            <div className="post py-10">
                                <h1 className="font-bold text-4xl text-center pb-5">
                                    {post?.title}
                                </h1>
                                <p className="text-gray-500 text-xl text-center">
                                    {post?.subtitle}
                                </p>
                                <div className="py-5">
                                    <Image src={post?.img} alt="post-img" width={900} height={600} />
                                </div>
                                <div className="flex justify-start">
                                    <Author author={post?.author} />
                                </div>
                                <div className='flex flex-row items-center pb-4'>
                                    <p className="text-orange-600 hover:text-orange-800">{post?.category}</p>
                                    <p className="text-gray-800 hover:text-gray-600">-{post?.published}</p>
                                </div>
                                <div className="content text-gray-600 text-lg flex flex-col gap-4">
                                    <p>
                                        {post?.description}
                                    </p>
                                </div>
                            </div>
                            <Related related={related} />
                        </section>
                    )}
            </Layout>
        </>
    )
}

export default postId

export async function getServerSideProps(context) {
    const { params } = context;
    const { postId } = params;
    const post = await fetch(`http://localhost:3000/api/posts/${postId}`);
    const data = await post.json();
    if (data?.error) {
        return {
            props: {
                post: data?.error,
            }
        }
    } else {
        const related = await fetch('http://localhost:3000/api/posts');
        const relatedData = await related.json();
        const result = relatedData.filter((posts)=>posts.category === data?.category && posts.id !==data?.id )
        return {
            props: {
                post: data,
                related: result,
            }
        }
    }
}