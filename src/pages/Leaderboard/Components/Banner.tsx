import { MdOutlineLeaderboard } from "react-icons/md";

const Banner = () => {
    return (
        <div className="xl:h-[600px] lg:h-[400px] md:h-[420px] h-[320px] bg-amber-100 flex flex-col justify-center items-center">
            <h1 className="flex justify-center items-center lg:gap-4 md:gap-3 gap-2 text-black xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-center lg:w-[60%] md:w-2/3">Welcome to <span className='text-amber-700'>Leaderboard</span><MdOutlineLeaderboard /></h1>
            <p className="lg:w-[50%] md:w-[80%] w-[70%] text-center text-black xl:text-xl lg:text-[17px] md:text-base text-sm xl:mt-5 lg:mt-3 md:mt-2 mt-[6px] xl:mb-10 lg:mb-7 md:mb-6 mb-5">
                Motivate users with a clear view of rising stars and real-time ranking changes.
            </p>
        </div>
    );
};

export default Banner;