import { Link } from "react-router";
import { deleteOne } from "../../helpers/delete.js";
import { updateOne } from "../../helpers/update.js";
// import { useState } from "react";
// import { useNavigate } from "react-router";
// import { Link } from "react-router";
// import EditAppointment from "./EditAppointment.jsx";
// import Dropdown from "./Dropdown.jsx";

function AppointmentRow(props) {
    const { item, setItems } = props;
    const { id, description, date, name, fullname, time } = item;

    // const [isOpen, setIsOpen] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Are you sure?")) return;

        try {
            await deleteOne(id);
            setItems(prev => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <>

            <section className="">
                <div className="mt-3  flex text-gray-900 ">
                    <div className=" ">
                        <div className="w-8 h-8 border mb-2 text-gray-950" onClick={handleDelete} >
                            <svg className="w-6 h-6 mx-auto mt-1 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                        </div>
                        <Link to={`editAppointment/${id}`} >
                        <div className="w-8 h-8 border  text-gray-950" >
                            <div className="text-sm">
                                <div className="mb-[-8px] mt-[-2px]">ed</div>
                                <div className="">it</div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="flex w-full">
                        <div className=" w-full">
                            <div className="text-start px-6 text-blue-800 font-bold ">{name}</div>
                            <div className="text-start px-6"><span className="font-bold text-blue-400">Owner:</span> {fullname}</div>
                            <div className="text-start px-6 w-52 ">{description}</div>
                        </div>
                        <div className="flex">
                            <div className="px-6 w-44">{date}</div>
                            {/* <div className="px-6 w-44">{time}</div> */}
                        </div>
                    </div>

                </div>
                <div className="h-0.5 w-full border border-dotted border-b-blue-200 mt-5"></div>
            </section>



        </>
    );
}

export default AppointmentRow;