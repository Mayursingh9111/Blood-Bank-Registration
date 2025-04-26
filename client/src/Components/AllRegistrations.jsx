import React, { useEffect, useState } from "react";

const AllRegistrations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://blood-bank-registration-backend.vercel.app/register")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4 text-center">All Registrations</h2>
      <table className="min-w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Contact</th>
            <th className="p-2 border">Blood Group</th>
            <th className="p-2 border">Last Donation</th>
            <th className="p-2 border">Complications</th>
            <th className="p-2 border">State</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">Pin</th>
            <th className="p-2 border">Address</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="11" className="text-center p-4 text-gray-500">
                No registrations found.
              </td>
            </tr>
          ) : (
            data.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.age}</td>
                <td className="p-2 border">{user.gender}</td>
                <td className="p-2 border">{user.contact}</td>
                <td className="p-2 border">{user.bloodGroup}</td>
                <td className="p-2 border">{user.lastDonation}</td>
                <td className="p-2 border">{user.complications}</td>
                <td className="p-2 border">{user.state}</td>
                <td className="p-2 border">{user.city}</td>
                <td className="p-2 border">{user.pin}</td>
                <td className="p-2 border">{user.address}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllRegistrations;
