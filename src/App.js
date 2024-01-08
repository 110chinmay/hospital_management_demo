import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginComponent/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import AddDoctorForm from "./components/Forms/AddDoctorForm";
import AddPatientForm from "./components/Forms/AddPatientForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-patient" element={<AddPatientForm />} />
          <Route path="/add-doctor" element={<AddDoctorForm />} />
          <Route path="/add-appointment" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
