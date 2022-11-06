import TitleSection from "./titleSection"

function newLatter() {
    return (
        <section className="bg-gray-100 mt-20">
            <div className="container mx-auto md:px-20 py16 text-center">
                <TitleSection title={"Subscribe Newslatter"} />
                <div className="py-4">
                    <input
                        type="text"
                        className="shadow rounded border w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                        placeholder="Enter Your Email"
                    />
                </div>
                <button className="bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl">Subscribe</button>
            </div>
        </section>
    )
}

export default newLatter