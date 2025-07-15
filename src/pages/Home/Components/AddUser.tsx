import React, { useState } from 'react';
import { useAddUserMutation } from '../../../redux/api/baseApi';
import Swal from 'sweetalert2';
import { FaX } from 'react-icons/fa6';

const AddUser: React.FC = () => {

    const [addUser, { isLoading: loading, isError: addingError }] = useAddUserMutation();
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
        <div className='bg-amber-100 xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10  xl:py-20 lg:py-16 md:py-14 py-10'>
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Add a New User</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">
                    Add someone new to join the leaderboard and start earning points
                </p>
            </div>
            <div className="xl:mt-14 lg:mt-12 md:mt-10 mt-8 flex justify-center">

                <button className="xl:px-8 px-6 xl:py-[10px] md:py-2 py-[7px] bg-amber-700 text-white font-semibold rounded-xl hover:bg-amber-600 hover:rounded-4xl transition md:text-base text-sm" onClick={handleModal}>
                    Add New User
                </button>

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
        </div>
    );
};

export default AddUser;