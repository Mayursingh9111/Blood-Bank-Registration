import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => (
  <>
    <div className="text-center space-y-4">
      <h2 className="text-green-600 text-xl font-bold">
        Registration Successful!
      </h2>
      <Link to="/" className="text-blue-500 text-2xl underline">
        Register another donor
      </Link>
      <Link
              to="/all"
              className="mt-4  text-blue-600 hover:text-blue-800 btn ml-10"
            >
              View All Registrations
            </Link>
    </div>
  </>
);

export default SuccessPage;
