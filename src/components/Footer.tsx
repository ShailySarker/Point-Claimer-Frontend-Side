import moment from "moment";
import { FaDiscord, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router";
import { useNotify } from "../hooks/useNotify";
import companyLogo from "../assets/images/Shared/company_logo.png";

const Footer = () => {
    return (
        <div>
            <div className=" bg-amber-700 text-white xl:py-12 md:py-8 py-6 lg:flex lg:flex-row lg:justify-between grid md:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-x-24 md:gap-y-14 gap-6 xl:px-14 lg:px-12 md:px-7 px-5">
                <div className="flex flex-col md:items-start items-center xl:w-[22%] lg:w-[25%]">
                    <Link to="/" className="text-white flex items-center xl:gap-3 gap-2">
                        <img src={companyLogo} className="xl:w-11 xl:h-11 lg:w-9 lg:h-9 md:w-8 md:h-8 w-6 h-6" alt="companyLogo" />
                        <p className="xl:text-2xl lg:text-xl md:text-lg text-[17px] font-bold">Point Claimer</p>
                    </Link>
                    <div className="xl:mt-6 md:mt-5 mt-4">
                        <p className="xl:text-[15px] lg:text-[13px] text-sm/normal font-medium">A full-stack leaderboard app where users can be added and claim random points, updating their scores and generating a claim history.</p>
                    </div>
                </div>
                <div>
                    <h2 className="xl:text-2xl lg:text-xl md:text-lg text-[17px] font-bold">Quick Links</h2>
                    <div className="flex md:gap-20 gap-28 xl:mt-7 md:mt-5 mt-3">
                        <div className="flex flex-col xl:gap-3 md:gap-2 gap-[6px] xl:text-[17px] lg:text-[15px] md:text-base text-sm font-medium">
                            <ul onClick={useNotify}>About Us</ul>
                            <ul onClick={useNotify}>Contact Us</ul>
                            <ul onClick={useNotify}>Help</ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="xl:text-2xl lg:text-xl md:text-lg text-[17px] font-bold">Reach Us</h2>
                    <div className="flex flex-col xl:gap-3 md:gap-2 gap-[6px] xl:text-[17px] lg:text-[15px] md:text-base text-sm xl:mt-7 md:mt-5 mt-3 font-medium">
                        <p className="flex items-center gap-2"><FaEnvelope />contact@pointclaimer.com</p>
                        <p className="flex items-center gap-2"><FaPhone /> +91 0000000000</p>
                        <p></p>
                    </div>
                    <div className="xl:mt-6 md:mt-4 mt-3 flex xl:gap-7 md:gap-6 gap-5">
                        <FaFacebook onClick={useNotify} className="xl:text-2xl text-xl" />
                        <FaInstagram onClick={useNotify} className="xl:text-2xl text-xl" />
                        <FaDiscord onClick={useNotify} className="xl:text-2xl text-xl" />
                        <FaYoutube onClick={useNotify} className="xl:text-2xl text-xl" />
                    </div>
                </div>
                <div>
                    <h2 className="xl:text-2xl lg:text-xl md:text-lg text-[17px] font-bold">Legal</h2>
                    <div className="flex flex-col xl:gap-3 md:gap-2 gap-[6px] xl:text-[17px] lg:text-[15px] md:text-base text-sm xl:mt-7 md:mt-5 mt-3 font-medium">
                        <ul onClick={useNotify} className="">Terms & Conditions</ul>
                        <ul onClick={useNotify} className="">Privacy Policy</ul>
                        <ul onClick={useNotify} className="">Cancellation & Refund Policy</ul>
                    </div>
                </div>
            </div>
            <div className='bg-black xl:py-4 md:py-3 py-2'>
                <div className='font-medium text-[#FFFFFF] text-center xl:text-base md:text-sm text-[13px] flex items-center gap-1 justify-center'>© <span>{moment().format('YYYY')}</span><span className='font-bold flex items-center gap-[5px]'>
                    <img src={companyLogo} className="ml-1 xl:w-6 xl:h-6 lg:w-5 lg:h-5 md:w-[18px] md:h-[18px] w-4 h-4" alt="companyLogo" />
                    Point Claimer</span>. All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;