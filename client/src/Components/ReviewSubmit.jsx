const ReviewSubmit = ({ formData, prevStep, handleSubmit }) => (

  <>
    <pre className="mb-4">{JSON.stringify(formData, null, 2)}</pre>
    <div className="flex justify-between">
      <button onClick={prevStep} className="btn">
        Back
      </button>
      <button onClick={handleSubmit} className="btn">
        Submit
      </button>
    </div>
    </>

);

export default ReviewSubmit;
