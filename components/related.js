import Link from "next/link"
import Image from "next/image"
import Author from "./author"

function related(related) {
    return (
        <section className='pt-20'>
            <h1 className="font-bold text-4xl py-12">Related</h1>
            <div className='flex flex-col gap-10'>
                {related?.related.map((post, index) => (
                    Post(post, index)
                ))}
            </div>
        </section>
    )
}

export default related

function Post(post, index) {
    return (
        <div key={index} className='flex gap-5'>
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${post?.id}`}>
                    <a>
                        <Image src={post?.img} className="rounded" alt="trending-img" width={300} height={200} />
                    </a>
                </Link>
            </div>
            <div className="info flex flex-col justify-center">
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