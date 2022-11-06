import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import Image from "next/image"
import Link from "next/link"
import TitleSection from "./titleSection"

function trending({ posts }) {
    SwiperCore.use([Autoplay]);
    return (
        <section className="md:py-16 py-8">
            <div className="container mx-auto lg:px-20 md:px-5 px-4">
                <TitleSection title={"Trending"} />
                <Swiper
                    autoplay={{
                        delay: 5000,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        }
                    }}
                >
                    {posts.map((post, index) => (
                        <SwiperSlide key={index}>{Slide(post)}</SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default trending

function Slide(post) {
    return (
        <div className="trending relative md:h-96 h-60">
            <Link href={`/posts/${post?.id}`}>
                <a>
                    <Image className='brightness-50 hover:brightness-75 duration-200' src={post?.img} alt="trending-img" layout='fill' />
                </a>
            </Link>
            <div className="absolute bottom-3 left-2">
                <p className='text-sm text-white'>{post?.published}</p>
                <Link href={`/posts/${post?.id}`}>
                    <a className="text-md font-bold text-white">
                        {post?.title}
                    </a>
                </Link>
            </div>
            <div className="absolute top-2 right-3 bg-orange-400 p-1 rounded">
                <p className="text-white text-sm">{post?.category}</p>
            </div>
        </div>
    )
}