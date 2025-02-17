import { Link } from "react-router";
import AppointmentsList from "../appointments/AppointmentsList";

function SignUp_Login() {
    return (
        <>
            <section className="w-screen h-14 bg-violet-900 flex justify-center">

                <div className="mt-2">
                    <Link to="/">
                        <button type="button" className=" text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm my-auto px-5 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">SignUp</button>
                    </Link>
                    <Link to="login">
                        <button type="button" className=" text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm my-auto px-5 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Login</button>
                    </Link>
                </div>

                <Link to="user">
                        <button type="button" className=" text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm my-auto px-5 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Appointments list</button>
                    </Link>

            </section>



        </>
    );
}

export default SignUp_Login;