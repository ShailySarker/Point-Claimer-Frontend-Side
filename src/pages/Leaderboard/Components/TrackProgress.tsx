import React from 'react';
import { useGetUserLeaderboardInfoQuery } from '../../../redux/api/baseApi';

const TrackProgress: React.FC = () => {

    const { data, isLoading, isError } = useGetUserLeaderboardInfoQuery({});

    return (
        <div>
            <div className='xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10'>
                <div>
                    <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Track Progress & Celebrate High Scores</h1>
                    <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">
                        A dynamic table showcasing top performers, updated instantly with each point claim.
                    </p>
                </div>
                <div className="xl:mt-14 lg:mt-12 md:mt-10 mt-8">
                    {
                        isError ? (
                            <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Something went wrong.</p>
                        ) : isLoading ? (
                            <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Loading leaderboard...</p>
                        ) : (
                            data?.data?.length === 0 ? (
                                <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">No user found!</p>
                            ) : (
                                <>
                                    <div className="w-full overflow-x-auto">
                                        <table className="table border-2 border-amber-700 min-w-full">
                                            <thead className="min-w-full uppercase">
                                                <tr className="xl:text-lg md:text-base text-[15px] xl:py-5 lg:py-4 md:py-[14px] py-3 bg-amber-700 text-white flex items-center justify-between min-w-full">
                                                    <th className='xl:px-10 lg:px-8 md:px-5 px-3 font-semibold w-[30%] text-left'>Rank</th>
                                                    <th className='xl:px-10 lg:px-8 md:px-5 px-3 font-semibold md:w-[40%] w-[48%] text-left'>Name</th>
                                                    <th className='xl:px-10 lg:px-8 md:px-5 px-3 font-semibold md:w-[30%] w-[37%] text-left'>Points</th>
                                                </tr>
                                            </thead >
                                            {
                                                data?.data?.map((user: any, index: number) =>
                                                    <tbody key={user?._id}>
                                                        <tr className={`xl:py-3 lg:py-[10px] py-2 border-t-2 border-amber-700 flex items-center justify-between min-w-full ${index % 2 === 0 ? 'bg-amber-100' : ''
                                                            }`}>
                                                            <th className='xl:px-10 lg:px-8 md:px-5 px-3 w-[30%] xl:text-base lg:text-[13px] md:text-[13.5px] text-[13px] font-bold text-left'>{index + 1}</th>
                                                            <th className='xl:px-10 lg:px-8 md:px-5 px-3 md:w-[40%] w-[48%] xl:text-base lg:text-[13px] md:text-[13.5px] text-[13px] font-medium text-left'>{user?.name}</th>
                                                            <th className='xl:px-10 lg:px-8 md:px-5 px-3 md:w-[30%] w-[37%] xl:text-base lg:text-[13px] md:text-[13.5px] text-[13px] font-medium text-left'>{user?.points}</th>
                                                        </tr>
                                                    </tbody>
                                                )
                                            }
                                        </table >
                                    </div>
                                </>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TrackProgress;