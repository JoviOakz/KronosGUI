import Navbar from "./Navbar";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";

const PageEnveloper = ({ children, navProps }) => {
    return (
        <>
            <ScrollRestoration />
            <Navbar {...navProps} />
            {children}
            <Footer />
        </>
    )
}

export default PageEnveloper;