import { useClaimPointsMutation } from "../../../redux/api/baseApi";

interface UserCardProps {
    user: { _id: string; name: string; totalPoints: number };
    isSelected: boolean;
    onSelect: (id: string) => void;
}
const UserSelection: React.FC<UserCardProps> = ({ user, isSelected, onSelect }) => {
    const [claimPoints, { isLoading }] = useClaimPointsMutation();

    return (
        <div
            onClick={() => onSelect(user?._id)}
            className={`
        group p-4 bg-white rounded-lg shadow transition-transform duration-300 
        hover:scale-105 cursor-pointer border ${isSelected ? 'border-blue-500' : 'border-transparent'}
      `}
        >
            <h3 className="text-lg font-semibold">{user?.name}</h3>
            <p className="text-sm text-gray-500">{user?.totalPoints} pts</p>
            {isSelected && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        claimPoints(user?._id);
                    }}
                    disabled={isLoading}
                    className="mt-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                >
                    {isLoading ? 'Claiming...' : 'Claim Points'}
                </button>
            )}
        </div>
    );
};

export default UserSelection;