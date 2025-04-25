// App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import PersonalDetails from "./components/PersonalDetails";
import BloodDetails from "./components/BloodDetails";
import AddressDetails from "./components/AddressDetails";
import ReviewSubmit from "./components/ReviewSubmit";

import SuccessPage from "./components/SuccessPage";

function MainForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    bloodGroup: "",
    lastDonation: "",
    complications: "",
    state: "",
    city: "",
    pin: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateStep = () => {
    switch (step) {
      case 1:
        if (
          !formData.name ||
          !formData.age ||
          !formData.gender ||
          !/^\d{10}$/.test(formData.contact)
        ) {
          setError("Please fill all personal details correctly.");
          return false;
        }
        break;
      case 2:
        if (!formData.bloodGroup || !formData.lastDonation) {
          setError("Please provide your blood donation details.");
          return false;
        }
        break;
      case 3:
        if (
          !formData.state ||
          !formData.city ||
          !/^\d{6}$/.test(formData.pin) ||
          !formData.address
        ) {
          setError("Please complete your address details.");
          return false;
        }
        break;
    }
    setError("");
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) navigate("/success");
      else throw new Error("Server error");
    } catch (e) {
      alert("Error submitting form.");
    }
  };

  return (
    <div className="max-w-xl w-full bg-white rounded shadow p-4">
      <h2 className="text-center text-xl font-bold mb-4">Step {step} of 4</h2>
      {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
      {step === 1 && (
        <PersonalDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <BloodDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <AddressDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <ReviewSubmit
          formData={formData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center flex-col p-4">
        <h1 className="text-center font-bold text-3xl mb-32">
          Blood Bank Registration
        </h1>
        <Routes>
          <Route path="/" element={<MainForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}
