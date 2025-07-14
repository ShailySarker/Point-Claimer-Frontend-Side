import { Link } from 'react-router';
import sidePhoto from '../../../assets/images/Home/Banner_bannerPhoto.jpg';

const Banner = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse justify-between items-center xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10'>
            <div className="flex flex-col items-center ">
                <h1 className="text-black xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-center">Welcome to <span className='text-amber-700'>Point Claimer</span></h1>
                <p className="md:w-[80%] w-[70%] text-center text-black xl:text-xl lg:text-[17px] md:text-base text-sm xl:mt-3 lg:mt-2 mt-[6px] xl:mb-10 lg:mb-7 md:mb-6 mb-5">
                    Add and claim random points, updating their scores and generating a claim history
                </p>
                <Link to="/leaderboard">
                    <button className="xl:px-8 px-6 xl:py-[10px] md:py-2 py-[7px] bg-amber-700 text-white font-semibold rounded-xl hover:bg-amber-600 hover:rounded-4xl transition md:text-base text-sm">
                        Explore Leaderboard
                    </button>
                </Link>
            </div>
            <img className="xl:w-auto lg:w-[42%] md:w-[40%] w-[63%]" src={sidePhoto} alt="sidePhoto" />
        </div>
    );
};

export default Banner;