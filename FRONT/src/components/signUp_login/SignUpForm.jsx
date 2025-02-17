import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
// import { Link } from "react-router";

import SignUp_Login from "./SignUp_Login";
import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;


function SignUpForm() {
    const [error, setError] = useState("");
    const { user, setUser } = useState(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formdata) => {
        try {
            const { data: response } = await axios.post(
                `${API_URL}/users/signup`,
                formdata,
                //   { withCredentials: true }

            );
            // console.log("response:", response);
            // setUser(response.data);

            if (response) {
                navigate("/user");
            }
        } catch (error) {

            if (axios.isAxiosError(error)) {
                if (error.response) {
                    setError(
                        error.response.data.message || "An error occurres, please try again"
                    );
                } else if (error.request) {
                    setError("No response from server. Check interner connection");
                } else {
                    setError("Something went wrong. Please try again");
                }
            } else {
                setError("An unexpected error occurred");
            }
        }
    };


    return (
        <>

            <SignUp_Login />


            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <div className="grid mb-5 md:gap-4">

                    <div>
                        <label className="block text-sm font-medium text-dark">Full name</label>
                        <input
                            type="name"
                            {...register("fullname", {
                                required: "Can't be empty",
                            })}
                            className="mt-1 w-100 input input-bordered border border-gray-500"
                        />
                        <p className="text-red-500 text-sm">{errors?.email?.message}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-dark">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Can't be empty",
                                pattern: {
                                    value:
                                        /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address",
                                },
                            })}
                            className="mt-1 w-100 input input-bordered border border-gray-500"
                        />
                        <p className="text-red-500 text-sm">{errors?.email?.message}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-dark">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Can't be empty",
                                //   pattern: {
                                //     value:
                                //       /^(?=.*\d)(?=.*[A-Z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*.,?]).{8,}$/,
                                //     message:
                                //       "At least 8 characters, capital letter, symbol and number",
                                //   },
                            })}
                            className="mt-1 w-100 input input-bordered border border-gray-500"
                        />
                        <p className="text-red-500 text-sm">{errors?.password?.message}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-dark">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            {...register("passwordconfirm", {
                                required: "Can't be empty",
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match",
                            })}
                            className="mt-1 w-100 input input input-bordered border border-gray-500"
                        />
                        <p className="text-red-500 text-sm">
                            {errors?.passwordconfirm?.message}
                        </p>
                    </div>

                </div>

                <button type="submit"
                    className="text-white bg-violet-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   dark:focus:ring-blue-800">Submit</button>
            </form>


        </>

    );
}

export default SignUpForm;


