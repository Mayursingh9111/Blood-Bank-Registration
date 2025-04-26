const BloodDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className="text-center">Blood Details:</h1>
      <label>Blood Group:</label>
      <input
        name="bloodGroup"
        value={formData.bloodGroup}
        onChange={handleChange}
        className="input"
      />
      <label>Last Donation Date:</label>
      <input
        name="lastDonation"
        value={formData.lastDonation}
        onChange={handleChange}
        className="input"
      />
      <label>Any Complications?</label>
      <input
        name="complications"
        value={formData.complications}
        onChange={handleChange}
        className="input"
      />
      <div className="flex justify-between">
        <button onClick={prevStep} className="btn">
          Back
        </button>
        <button onClick={nextStep} className="btn">
          Next
        </button>
      </div>
    </>
  );
};

export default BloodDetails;
