import { PageSize } from "./styled.module";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ScrollRestoration } from "react-router-dom";
import React from "react";

interface PageEnveloperProps {
    children: React.ReactNode;
    mapName: string;
    isHome: boolean;
}

const PageEnveloper: React.FC<PageEnveloperProps> = ({ children, mapName, isHome }) => {
    return (
        <>
            <ScrollRestoration />
            <Navbar mapName={mapName} isHome={isHome} />
            <PageSize>
                {children}
            </PageSize>
            <Footer />
        </>
    );
};

export default PageEnveloper;
