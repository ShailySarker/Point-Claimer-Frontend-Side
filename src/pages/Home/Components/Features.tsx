const Features = () => {
    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Features</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl lg:text-lg md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">Empower your team with point claiming, real-time leaderboards, and comprehensive user management.</p>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 xl:gap-4 lg:gap-4 md:gap-4 gap-3 xl:mt-14 lg:mt-12 md:mt-10 mt-8">
                <div className='shadow-md xl:h-40 lg:h-[136px] h-32 p-4 flex justify-center items-center border-2 hover:border-amber-700 bg-amber-700 hover:bg-white text-white hover:text-amber-700 rounded-xl'>
                    <h1 className='xl:text-xl lg:text-[16.5px] text-center font-semibold'>User Management</h1>
                </div>
                <div className='shadow-md xl:h-40 lg:h-[136px] h-32 p-4 flex justify-center items-center border-2 hover:border-amber-700 bg-amber-700 hover:bg-white text-white hover:text-amber-700 rounded-xl'>
                    <h1 className='xl:text-xl lg:text-[16.5px] text-center font-semibold'>Random Point Claiming</h1>
                </div>
                <div className='shadow-md xl:h-40 lg:h-[136px] h-32 p-4 flex justify-center items-center border-2 hover:border-amber-700 bg-amber-700 hover:bg-white text-white hover:text-amber-700 rounded-xl'>
                    <h1 className='xl:text-xl lg:text-[16.5px] text-center font-semibold'>Live Leaderboard</h1>
                </div>
                <div className='shadow-md xl:h-40 lg:h-[136px] h-32 p-4 flex justify-center items-center border-2 hover:border-amber-700 bg-amber-700 hover:bg-white text-white hover:text-amber-700 rounded-xl'>
                    <h1 className='xl:text-xl lg:text-[16.5px] text-center font-semibold'>Claim History Log</h1>
                </div>
                <div className='shadow-md xl:h-40 lg:h-[136px] h-32 p-4 flex justify-center items-center border-2 hover:border-amber-700 bg-amber-700 hover:bg-white text-white hover:text-amber-700 rounded-xl'>
                    <h1 className='xl:text-xl lg:text-[16.5px] text-center font-semibold'>Responsive Design</h1>
                </div>
                <div className='shadow-md xl:h-40 lg:h-[136px] h-32 p-4 flex justify-center items-center border-2 hover:border-amber-700 bg-amber-700 hover:bg-white text-white hover:text-amber-700 rounded-xl'>
                    <h1 className='xl:text-xl lg:text-[16.5px] text-center font-semibold'>Scalable Architecture</h1>
                </div>
            </div>
        </div>
    );
};

export default Features;