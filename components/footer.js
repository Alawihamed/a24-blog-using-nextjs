import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import NewLatter from "./newLatter";

function footer() {
    return (
        <footer className="bg-gray-100">
            <NewLatter />
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <a><ImFacebook color="#888888" /></a>
                        <a><ImInstagram color="#888888" /></a>
                        <a><ImTwitter color="#888888" /></a>
                    </div>
                    <p className="py-5 text-gray-500">Copyright ©2022 All rights reserved | A24 Blog</p>
                </div>
            </div>
        </footer>
    )
}

export default footer