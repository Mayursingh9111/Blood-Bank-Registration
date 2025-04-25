import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => (
  <div className="text-center space-y-4">
    <h2 className="text-green-600 text-xl font-bold">
      Registration Successful!
    </h2>
    <Link to="/" className="text-blue-500 underline">
      Register another donor
    </Link>
    
  </div>
);

export default SuccessPage;
