import React from "react";

const PersonalDetails = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className="text-center">Personal Details</h1>
      <label>Name:</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="input"
      />
      <label>Age:</label>
      <input
        name="age"
        value={formData.age}
        onChange={handleChange}
        className="input"
      />
      <label>Gender:</label>
      <input
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="input"
      />
      <label>Contact:</label>
      <input
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        className="input"
      />
      <button onClick={nextStep} className="btn">
        Next
      </button>
    </>
  );
};

export default PersonalDetails;
