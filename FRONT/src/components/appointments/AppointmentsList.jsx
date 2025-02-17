import { useEffect, useState } from 'react';
import Appointment from "./Appointment.jsx";
// import SearchBar from '../SearchBar.jsx';
import { getAll } from "../../helpers/get.js";
import { Link } from "react-router";

function AppointmentsList() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");


    const getAllItems = async () => {
        try {
            const { allAppointments } = await getAll();
            setItems(allAppointments);
            setError("");
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getAllItems();
    }, [])
    return (
        <>
         

            <section className="w-4/5 mx-auto">
                <Appointment items={items} setItems={setItems} />
                {error && <p className="text-error">{error}</p>}
            </section>

        </>




    );
}

export default AppointmentsList;