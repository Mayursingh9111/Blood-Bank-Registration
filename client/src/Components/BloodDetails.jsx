const BloodDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <h1>Blood Details:</h1>
      <input
        name="bloodGroup"
        placeholder="Blood Group"
        value={formData.bloodGroup}
        onChange={handleChange}
        className="input"
      />
      <input
        name="lastDonation"
        placeholder="Last Donation Date"
        value={formData.lastDonation}
        onChange={handleChange}
        className="input"
      />
      <input
        name="complications"
        placeholder="Any Complications?"
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
    </div>
  );
};

export default BloodDetails;
