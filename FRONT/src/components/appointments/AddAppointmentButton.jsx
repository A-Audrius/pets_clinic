import { Link } from "react-router";

function AddAppointmentButton() {
    return (
        <Link to="addAppointment">
            <button className="text-white bg-violet-900 h-12 w-4/5 my-5" >Add Appointment</button>
        </Link>

    );
}

export default AddAppointmentButton;