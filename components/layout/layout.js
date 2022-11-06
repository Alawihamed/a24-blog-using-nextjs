import Header from '../header'
import Footer from '../footer'

function layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default layout