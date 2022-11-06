import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link"
import Image from "next/image"
import Author from "./author"
import TitleSection from "./titleSection"
import Error from './error';

function mostPopular({ posts }) {
    return (
        <section className="container mx-auto lg:px-20 md:px-5 px-4 py-16">
            <TitleSection title={"Most Popular"} />
            {posts.length === 0 ? (
                <Error error={"No Posts"}/>
            )
            :
            (
                <Swiper
                    breakpoints={{ 
                        768:{
                            slidesPerView:2,
                            spaceBetween:30,
                        }
                     }}
                    
                >
                    {posts.map((post, index) => (
                        <SwiperSlide key={index}>{Post(post)}</SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    )
}

export default mostPopular

function Post(post) {
    return (
        <div className="grid">
            <div className="image">
                <Link href={"/"}>
                    <a>
                        <Image src={post?.img} alt="trending-img" width={600} height={400} />
                    </a>
                </Link>
            </div>
            <div className="info flex flex-col justify-center py-4">
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{post?.category}</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">-{post?.published}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${post?.id}`}>
                        <a className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 hover:text-gray-600">
                            {post?.title}
                        </a>
                    </Link>
                    <p className="text-gray-500 py-3">
                        {post?.subtitle}
                    </p>
                    <Author author={post?.author} />
                </div>
            </div>
        </div>
    )
}