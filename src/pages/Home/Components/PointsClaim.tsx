import React, { useState } from 'react';
import { useAddUserMutation, useGetAllUserQuery } from '../../../redux/api/baseApi';
import UserSelection from './UserSelection';
import { FaX } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const PointsClaim: React.FC = () => {
    const { data: users, refetch } = useGetAllUserQuery({});
    const [addUser, { isLoading: loading, isError: addingError }] = useAddUserMutation();
    const [newName, setNewName] = useState('');
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isOpen, setOpen] = useState(false);
    const handleModal = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const newName = (formData.get('name') as string).trim();

        if (!newName) {
            alert("Name is required.");
            return;
        }

        try {
            await addUser(newName).unwrap();
            Swal.fire({
                icon: "success",
                title: "User added successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
            refetch();
            setOpen(false);

        } catch (err: any) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Error: ${err.data?.message || 'Unknown error.'}`,
            });
        }
    };


    return (
        <div className='xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10'>
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Claim Points</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">
                    Add and claim random points, updating their scores and generating a claim history
                </p>
            </div>
            <div className="xl:mt-14 lg:mt-12 md:mt-10 mt-8">
                {/* {
                    isError ? (
                        <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Something went wrong.</p>
                    ) : isLoading ? (
                        <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">Loading...</p>
                    ) : (
                        data?.data?.length === 0 ? (
                            <p className="xl:py-20 lg:py-16 md:py-14 py-12 xl:text-lg md:text-base text-sm font-semibold text-center">No book found!</p>
                        ) : (
                            <div>

                            </div>
                        )
                    )
                } */}

                {/* <UserSelection onSelect={setSelectedUserId} /> */}
                <div className="p-4">
                    <button className="xl:px-8 px-6 xl:py-[10px] md:py-2 py-[7px] bg-amber-700 text-white font-semibold rounded-xl hover:bg-amber-600 hover:rounded-4xl transition md:text-base text-sm" onClick={handleModal}>
                        Add New User
                    </button>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* {users?.map((u: any) => (
                            <UserSelection
                                key={u?._id}
                                user={u}
                                isSelected={selectedId === u?._id}
                                onSelect={setSelectedId}
                            />
                        ))} */}
                    </div>
                </div>
            </div>
            {
                isOpen &&
                (
                    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
                        <div className="mx-auto bg-white rounded-xl md:max-w-md w-[80%] md:p-6 p-5 shadow-lg relative">
                            <button
                                onClick={handleClose}
                                className="absolute top-3 right-3"
                            >
                                <FaX className="text-3xl text-white p-2 rounded-full bg-amber-700 hover:bg-amber-600" />
                            </button>
                            <h2 className="xl:text-[25px] lg:text-2xl text-xl font-bold text-amber-700 lg:mt-1 lg:mb-8 mb-7 text-center">Add User</h2>
                            <form onSubmit={handleAddUser} className="flex flex-col gap-4 ">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-black font-medium">Name</label>
                                    <input
                                        id="name"
                                        className="shadow-md px-3 md:py-2 py-[6px] rounded-xl border-2 border-amber-700"
                                        placeholder="Enter name"
                                        name='name'
                                        required
                                    />
                                    <p>{addingError}</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="shadow-md bg-amber-700 hover:bg-amber-600 text-white font-semibold xl:text-lg text-base rounded-xl hover:rounded-4xl px-4 md:py-2 py-[6px] mt-5 "
                                >
                                    {loading ? "Adding..." : "Add New User"}
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default PointsClaim;