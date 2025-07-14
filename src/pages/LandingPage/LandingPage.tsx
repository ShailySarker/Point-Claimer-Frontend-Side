import { useEffect } from "react";
import { useNavigate } from "react-router";
import companyLogo from "../../assets/images/Shared/company_logo.png";

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='h-screen flex justify-center items-center bg-amber-700 '>
            <div className="flex items-center justify-center xl:gap-4 lg:gap-[14px] gap-3 text-white animate-bounce">
                    <img src={companyLogo} className="xl:w-16 xl:h-16 lg:w-[56px] lg:h-[56px] md:w-11 md:h-11 w-9 h-9" alt="companyLogo" />
                <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold">Point Claimer</h1>
            </div>
        </div>
    );
};

export default LandingPage;