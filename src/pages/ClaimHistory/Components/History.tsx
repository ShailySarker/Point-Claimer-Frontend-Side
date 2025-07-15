import React from 'react';
import { useGetClaimHistoryQuery } from '../../../redux/api/baseApi';

const History: React.FC = () => {
    const { data, isLoading, isError } = useGetClaimHistoryQuery({});
    return (
        <div className='xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10'>
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Points Claim Record</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">
                    View a complete timeline of point claims with user names, point values, and timestamps for full transparency.
                </p>
            </div>
            <div className="xl:mt-14 lg:mt-12 md:mt-10 mt-8">
                {
                    isError ? (
                        <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Something went wrong.</p>
                    ) : isLoading ? (
                        <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Loading leaderboard...</p>
                    ) : (
                        data?.length === 0 ? (
                            <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">No user track record found!</p>
                        ) : (
                            <>
                                <div className="w-full xl:max-h-[620px] lg:max-h-[480px] md:max-h-[590px] max-h-[460px] overflow-y-auto">
                                    <table className="table border-2 border-amber-700 min-w-full">
                                        <thead className="min-w-full uppercase">
                                            <tr className="xl:text-lg md:text-base text-[15px] xl:py-5 lg:py-4 md:py-[14px] py-3 bg-amber-700 text-white flex items-center justify-between min-w-full">
                                                <th className='xl:px-10 lg:px-8 md:px-5 pl-3 font-semibold w-[30%] text-left'>User</th>
                                                <th className='xl:px-10 lg:px-8 md:px-5 pl-3 font-semibold md:w-[30%] w-[22%] text-left'>Points</th>
                                                <th className='xl:px-10 lg:px-8 md:px-5 pl-3 font-semibold md:w-[40%] w-[48%] text-left'>Date</th>
                                            </tr>
                                        </thead >
                                        {
                                            data?.map((record: any, index: number) =>
                                                <tbody key={record?._id}>
                                                    <tr className={`xl:py-3 lg:py-[10px] py-2 border-t-2 border-amber-700 flex items-center justify-between min-w-full ${index % 2 === 0 ? 'bg-amber-100' : ''
                                                        }`}>
                                                        <th className='xl:px-10 lg:px-8 md:px-5 pl-3 w-[30%] xl:text-base lg:text-[13px] md:text-[13.5px] text-[13px] font-bold text-left'>{record?.userId?.name}</th>
                                                        <th className='xl:px-10 lg:px-8 md:px-5 pl-3 md:w-[30%] w-[22%] xl:text-base lg:text-[13px] md:text-[13.5px] text-[13px] font-medium text-left'>{record?.points}</th>
                                                        <th className='xl:px-10 lg:px-8 md:px-5 pl-3 md:w-[40%] w-[48%] xl:text-base lg:text-[13px] md:text-[13.5px] text-[13px] font-medium text-left'>{new Date(record.createdAt).toLocaleString()}</th>
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
    );
};

export default History;