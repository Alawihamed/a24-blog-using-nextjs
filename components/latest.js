import Link from "next/link"
import Image from "next/image"
import Author from "./author"
import TitleSection from "./titleSection"

function latest({ posts }) {
    return (
        <section className="container mx-auto lg:px-20 md:px-5 px-4 py-10 bg-gray-50">
            <TitleSection title={"Latest Posts"} />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
                {posts.map((post, index) => (
                    Post(post, index)
                ))}
            </div>
        </section>
    )
}

export default latest

function Post(post, index) {
    return (
        <div key={index} className="item shadow rounded hover:shadow-lg duration-200">
            <div className="image">
                <Link href={`/posts/${post?.id}`}>
                    <a>
                        <Image src={post?.img} className="rounded" alt="trending-img" width={500} height={350} />
                    </a>
                </Link>
            </div>
            <div className="info flex flex-col justify-center py-4 px-2">
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{post?.category}</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">-{post?.published}</a></Link>
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