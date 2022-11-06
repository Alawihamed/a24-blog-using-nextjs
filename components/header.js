import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-gray-100">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="shrink w-80">
          <Link href={"/"}>
            <a className="font-bold uppercase text-3xl">A24 Blog</a>
          </Link>
        </div>
        <div className="md:flex-none w-96 flex justify-center py-4 sm:py-0">
          <input className="search-input" type='search' placeholder="Search..." />
        </div>
        <div className="w-96 flex justify-center">
          <div className="flex gap-6">
            <a><ImFacebook color="#888888" /></a>
            <a><ImInstagram color="#888888" /></a>
            <a><ImTwitter color="#888888" /></a>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header

