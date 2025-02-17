import { Outlet } from "react-router";
import "./index.css"
import AppointmentsList from "./components/appointments/AppointmentsList";
import Header from "./components/Header";
import { Link } from "react-router";


export default function App() {


  return (
    <>
      <div className=" h-screen">
        <Header />

        <div className="">
          <div className=' mx-auto '>
            <Link to="addAppointment">
              <button className="text-white bg-violet-900 h-12 w-4/5 my-5" >Add Appointment</button>
            </Link>
          </div>
          <Outlet />

        </div>
      </div>





    </>
  )
}
