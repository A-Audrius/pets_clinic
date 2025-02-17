import { useState } from 'react';
import { useForm } from "react-hook-form";
import { post } from "../../helpers/post.js"
import { useNavigate } from "react-router";

const AddAppointment = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");


    const onSubmit = async (data) => {
        try {
            console.log(data);
            data.date = new Date();

            const newAppointment = await post(data);

            if (newAppointment && newAppointment.data.appointmentId) {
                navigate(`/editAppointment/${newAppointment.data.appointmentId}`);
            }
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>



            <form onSubmit={handleSubmit(onSubmit)} className=" max-w-sm mx-auto grid  pt-10">

                <section>
                    <input id="name"
                        {...register("name",)}
                        className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("name", { required: "pet name is required" })} type="text" placeholder="Pet Name" />
                    {/* <p className="text-error">{errors.name?.message}</p> */}
                </section>
                <section>
                    <input id="fullname"
                        {...register("fullname",)}
                        className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("fullname", { required: "full name is required" })} type="text" placeholder="Full Name" />
                    {/* <p className="text-error">{errors.fullname?.message}</p> */}
                </section>

                <section>
                    <input id="description" {...register("description",)}
                        type="text" placeholder="description" className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    {/* <p className="text-error">{errors.value?.message}</p> */}
                </section>
                <section>
                    <input id="date" {...register("date",)}
                        type="date" placeholder="date" className="mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    {/* <p className="text-error">{errors.value?.message}</p> */}
                </section>

                <div className=''>
                    <button className="bg-gray-500 w-44 py-2 border  rounded-lg text-white"
                        type="submit">Add Appointment</button>
                    {error && <p className="text-error">{error}</p>}
                </div>


            </form>


        </>
    );
};

export default AddAppointment;
