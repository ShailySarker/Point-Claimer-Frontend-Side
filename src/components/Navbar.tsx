import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import companyLogo from "../assets/images/Shared/company_logo.png";
import { useNotify } from "../hooks/useNotify";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    console.log(isDropdownOpen);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        setIsDropdownOpen(true);
        setClick(!click);
    };
    const closeDropdown = () => {
        setIsDropdownOpen(false);
        setMobileMenuOpen(false);
        setClick(!click);
    };

    return (
        <div className="sticky top-0 z-50 bg-amber-700 flex items-center justify-between lg:px-10 md:px-7 px-5 xl:py-6 lg:py-4 md:py-[18px] py-3">
            <div className="lg:w-[20%]">
                <Link to="/" className="text-white flex items-center xl:gap-3 gap-2">
                    <img src={companyLogo} className="xl:w-11 xl:h-11 lg:w-9 lg:h-9 md:w-8 md:h-8 w-6 h-6" alt="companyLogo" />
                    <p className="xl:text-2xl lg:text-xl md:text-lg text-[17px] font-semibold">Point Claimer</p>
                </Link>
            </div>
            {/* large device menu */}
            <div className="lg:block hidden lg:flex items-center justify-center xl:gap-8 lg:gap-5 text-white w-[60%]">
                <ul className="text-white xl:text-lg lg:text-[15.5px] text-[16.5px] font-semibold">
                    <NavLink to='/home' className={({ isActive }) => isActive ? "border-b-2 px-1 pb-[2px] border-white" : "px-1 pb-[2px]"}>Home</NavLink>
                </ul>
                <ul className="text-white xl:text-lg lg:text-[15.5px] text-[16.5px] font-semibold">
                    <NavLink to='/leaderboard' className={({ isActive }) => isActive ? "border-b-2 px-1 pb-[2px] border-white" : "px-1 pb-[2px]"}>Leaderboard</NavLink>
                </ul>
                <ul className="text-white xl:text-lg lg:text-[15.5px] text-[16.5px] font-semibold">
                    <NavLink to='/claim-history' className={({ isActive }) => isActive ? "border-b-2 px-1 pb-[2px] border-white" : "px-1 pb-[2px]"}>Claim History</NavLink>
                </ul>
            </div>
            <div className="lg:block hidden lg:w-[20%] lg:flex items-center xl:gap-3 lg:gap-2">
                <button onClick={useNotify} className="bg-amber-600 shadow-md shadow-neutral-200 text-[#F3EFEF] xl:text-[17.5px] lg:text-[15.5px] text-[16.5px] font-medium xl:w-28 lg:w-24 xl:py-2 py-[7px] rounded-[34px]">LogIn</button>
                <button onClick={useNotify} className="bg-amber-600 shadow-md shadow-neutral-200 text-[#F3EFEF] xl:text-[17.5px] lg:text-[15.5px] text-[16.5px] font-medium xl:w-28 lg:w-24 xl:py-2 py-[7px] rounded-[34px]">SignUp</button>
            </div>
            {/* medium and small device menu */}
            <div className="lg:hidden visible">
                <button className="text-white focus:outline-none"
                    onClick={toggleMobileMenu}>
                    {click ? (<FaXmark className="text-white font-bold md:text-xl text-lg" />) : (<FaBars className="text-white font-bold md:text-xl text-lg" />)}
                </button>
            </div>
            {/* medium and small device menu */}
            {isMobileMenuOpen && (
                <div style={{ zIndex: 9999 }} className="z-50 lg:hidden absolute md:top-[82px] top-[65px] right-4 px-4 md:py-6 py-4 md:w-52 w-44 rounded-t-xl rounded-br-xl rounded-bl-[50px] shadow-lg border-4 border-amber-700 bg-amber-700 text-white">
                    <ul className="md:mb-4 mb-3 md:text-[15.5px] text-[15px] font-semibold">
                        <NavLink to='/home' className={({ isActive }) => isActive ? "border-b-2 border-white px-[2px]" : "px-[2px]"} onClick={closeDropdown}>Home</NavLink>
                    </ul>
                    <ul className="md:mb-4 mb-3 md:text-[15.5px] text-[15px] font-semibold">
                        <NavLink to='/leaderboard' className={({ isActive }) => isActive ? "border-b-2 border-white px-[2px]" : "px-[2px]"} onClick={closeDropdown}>Leaderboard</NavLink>
                    </ul>
                    <ul className="md:mb-4 mb-3 md:text-[15.5px] text-[15px] font-semibold">
                        <NavLink to='/claim-history' className={({ isActive }) => isActive ? "border-b-2 border-white px-[2px]" : "px-[2px]"} onClick={closeDropdown}>Claim History</NavLink>
                    </ul>
                    <button onClick={useNotify} className="md:mt-1 mt-[2px] md:mb-3 mb-[10px] md:text-[15.5px] text-[15px] bg-amber-600 shadow-md shadow-neutral-200 text-[#F3EFEF] font-medium w-full md:py-2 py-[6px] rounded-[34px]">LogIn</button>
                    <button onClick={useNotify} className="md:text-[15.5px] text-[15px] bg-amber-600 shadow-md shadow-neutral-200 text-[#F3EFEF] font-medium w-full md:py-2 py-[6px] rounded-[34px]">SignUp</button>
                </div>
            )}
        </div>
    );
};

export default Navbar;