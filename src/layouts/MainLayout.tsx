import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;