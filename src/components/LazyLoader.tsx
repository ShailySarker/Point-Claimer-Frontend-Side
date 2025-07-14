import Lottie from "lottie-react";
import lazyLoaderAnimation from "../../loading.json";
const LazyLoader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='xl:w-[400px] lg:w-[300px] md:w-[290px] w-[230px]'>
                <Lottie loop={true} animationData={lazyLoaderAnimation} />
            </div>
        </div>
    );
};

export default LazyLoader;