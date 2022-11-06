import Image from "next/image"
import TitleSection from "./titleSection"

function error({error}) {
  return (
    <div className="container flex flex-col items-center mx-auto md:px-20 py-10">
        <TitleSection title={error} />
        <Image src={"/images/error.png"} alt="img-error" width={350} height={350}/>
    </div>
  )
}

export default error