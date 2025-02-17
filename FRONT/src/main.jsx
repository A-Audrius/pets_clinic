import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router";
import { StrictMode } from 'react'
import NotFound from "./components/NotFound";
import AddAppointment from "./components/appointments/AddAppointment";
import EditAppointment from "./components/appointments/EditAppointment";
import AppointmentsList from "./components/appointments/AppointmentsList";
import UserContextProvider from "./contexts/UserContextProvider.jsx";
import SignUpForm from "./components/signUp_login/SignUpForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpForm />}/>
        
          <Route path="/user" element={<App />}>
            <Route index element={<AppointmentsList />} />
            <Route path="addAppointment" element={<AddAppointment />} />
            <Route path="editAppointment/:id" element={<EditAppointment />} />
          </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)