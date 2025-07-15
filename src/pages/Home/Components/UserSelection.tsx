import React from 'react';
import { useClaimPointsMutation } from '../../../redux/api/baseApi';
import Swal from 'sweetalert2';

interface UserSelectionProps {
    user: { _id: string; name: string; points: number }

}

const UserSelection: React.FC<UserSelectionProps> = ({ user }) => {

    const [claimPoints, { isLoading }] = useClaimPointsMutation({});

    const handleClaim = async () => {
        try {
            const result = await claimPoints(user?._id).unwrap();
            Swal.fire({
                icon: "success",
                title: `Awarded ${result?.data?.pointsAwarded} points to ${result?.data?.user?.name}`,
                showConfirmButton: false,
                timer: 1500
            });
        } catch (err: any) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Error: ${err.data?.message || 'Unknown error.'}`,
            });
        }
    };

    // Get first letter
    const initial = user?.name.charAt(0).toUpperCase();

    return (
        <div className="group flex flex-col items-center xl:p-5 lg:p-4 p-[14px] bg-amber-100 border-2 border-amber-700 rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
            <div className="xl:w-24 xl:h-24 lg:w-[70px] lg:h-[70px] md:w-16 md:h-16 w-14 h-14 bg-amber-400 text-white rounded-full flex items-center justify-center xl:text-3xl lg:text-[26px] md:text-2xl font-semibold xl:mb-5 md:mb-4 mb-3">
                {initial}
            </div>
            <h3 className="xl:text-2xl md:text-lg text-[17px] font-semibold">{user?.name}</h3>
            <p className="xl:text-lg md:text-base text-[14.5px] text-gray-500 xl:mb-3 mb-2 italic">{user?.points} points</p>
            <button
                onClick={handleClaim}
                disabled={isLoading}
                className="xl:px-8 lg:px-5 px-4 xl:py-3 md:py-[10px] py-2 bg-amber-700 text-white font-semibold rounded-xl hover:bg-amber-600 hover:rounded-4xl transition md:text-base/none text-sm/none"
            >
                {isLoading ? 'Claiming...' : 'Claim Points'}
            </button>
        </div>
    );
};


export default UserSelection;