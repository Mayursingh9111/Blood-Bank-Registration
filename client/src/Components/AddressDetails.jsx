const AddressDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className="text-center">Address Details:</h1>
      <label>State:</label>
      <input
        name="state"
        value={formData.state}
        onChange={handleChange}
        className="input"
      />
      <label>City:</label>
      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="input"
      />
      <label>PinCode:</label>
      <input
        name="pin"
        value={formData.pin}
        onChange={handleChange}
        className="input"
      />
      <label>Address:</label>
      <textarea
        name="address"
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
    </>
  );
};

export default AddressDetails;
