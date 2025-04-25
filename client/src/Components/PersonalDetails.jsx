import React from "react";

const PersonalDetails = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <h1>Personal Details:</h1>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="input"
      />
      <input
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        className="input"
      />
      <input
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
        className="input"
      />
      <input
        name="contact"
        placeholder="Contact"
        value={formData.contact}
        onChange={handleChange}
        className="input"
      />
      <button onClick={nextStep} className="btn">
        Next
      </button>
    </div>
  );
};

export default PersonalDetails;
