const AddressDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <h1>Address Details:</h1>
      <input
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        className="input"
      />
      <input
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="input"
      />
      <input
        name="pin"
        placeholder="PIN Code"
        value={formData.pin}
        onChange={handleChange}
        className="input"
      />
      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
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

export default AddressDetails;
