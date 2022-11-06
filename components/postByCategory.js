import Link from "next/link"
import Image from "next/image"
import Author from "./author"

function postByCategory({ posts }) {
    const businessPosts = posts.filter((post) => post?.category === 'Business');
    const travelPosts = posts.filter((post) => post?.category === 'Travel');
    return (
        <section className="container mx-auto lg:px-20 md:px-5 px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-4">
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Business</h1>
                    <div className="flex flex-col gap-6">
                        {businessPosts.map((post, index) => (
                            Post(post, index)
                        ))}
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Travel</h1>
                    <div className="flex flex-col gap-6">
                        {travelPosts.map((post, index) => (
                            Post(post, index)
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default postByCategory

function Post(post, index) {
    return (
        <div key={index} className="flex gap-5 hover:shadow duration-300">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${post?.id}`}>
                    <a className="flex">
                        <Image src={post?.img} className="rounded" alt="trending-img" width={300} height={250} />
                    </a>
                </Link>
            </div>
            <div className="info flex flex-col justify-center">
                <div className="cat">
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">{post?.published}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${post?.id}`}>
                        <a className="text-md font-bold text-gray-800 hover:text-gray-600">
                            {post?.title}
                        </a>
                    </Link>
                    <Author author={post?.author} />
                </div>
            </div>
        </div>
    )
}