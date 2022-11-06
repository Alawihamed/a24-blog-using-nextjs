import Image from "next/image"
function author(author) {
    return (
        <div className="author flex py-5">
            <Image src={author?.author?.img} width={60} height={60} className="rounded-full" />
            <div className="flex flex-col justify-center px-4">
                <p className="text-md font-bold text-gray-800 hover:text-gray-600">{author?.author?.name}</p>
                <span className="text-sm text-gray-500">{author?.author?.designation}</span>
            </div>
        </div>
    )
}

export default author