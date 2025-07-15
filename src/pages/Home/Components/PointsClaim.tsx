import React, { useState } from 'react';
import UserSelection from './UserSelection';
import { useGetAllUserQuery } from '../../../redux/api/baseApi';


const PointsClaim: React.FC = () => {

    const [page, setPage] = useState(1);
    const { data, isLoading, isError } = useGetAllUserQuery(page);
    const users = data?.data;
    const totalPages = data?.totalPages;

    return (
        <div className='xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10'>
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Claim Points</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">
                    Add and claim random points, updating their scores and generating a claim history
                </p>
            </div>
            <div className="xl:mt-14 lg:mt-12 md:mt-10 mt-8">

                <div className="">
                    {
                        isError ? (
                            <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Something went wrong.</p>
                        ) : isLoading ? (
                            <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Loading users...</p>
                        ) : (
                            users?.length === 0 ? (
                                <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">No user found!</p>
                            ) : (

                                <>
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:gap-6 gap-4">
                                        {users?.map((user: any) => (
                                            <UserSelection key={user?._id} user={user} />
                                        ))}
                                    </div>

                                    <div className="flex justify-center items-center xl:mt-12 lg:mt-10 md:mt-8 mt-7 xl:space-x-6 lg:space-x-4 md:space-x-3 space-x-2">
                                        <button
                                            disabled={page <= 1}
                                            onClick={() => setPage((p) => p - 1)}
                                            className="xl:px-8 lg:px-6 md:px-5 px-5 md:py-2 py-[5px] md:text-base text-[15px] bg-amber-700 text-white font-semibold rounded-full disabled:opacity-50"
                                        >
                                            Prev
                                        </button>
                                        <span className='font-semibold xl:text-lg md:text-base text-[15px]'>
                                            Page {page} of {totalPages}
                                        </span>
                                        <button
                                            disabled={page >= totalPages}
                                            onClick={() => setPage((p) => p + 1)}
                                            className="xl:px-8 lg:px-6 md:px-5 px-5 md:py-2 py-[5px] md:text-base text-[15px] bg-amber-700 text-white font-semibold rounded-full disabled:opacity-50"
                                        >
                                            Next
                                        </button>
                                    </div>

                                    {/* {isFetching && <p className="text-center mt-2">Updating...</p>} */}
                                </>
                            )
                        )
                    }

                </div>
            </div>
        </div >
    );
};

export default PointsClaim;