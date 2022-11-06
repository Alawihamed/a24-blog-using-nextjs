import Image from "next/image"
import Link from "next/link"

function PageNotFound() {
  return (
    <div className="container flex flex-col items-center mx-auto md:px-20 py-10">
        <Image src={"/images/404.png"} alt="img-error" width={450} height={350}/>
        <h1 className="text-xl font-bold text-gray-800">Page Not Found</h1>
        <Link href={"/"}>
            <a className="text-xl mt-6 font-bold text-orange-500 hover:text-orange-800">
                Home Page
            </a>
        </Link>
    </div>
  )
}

export default PageNotFound