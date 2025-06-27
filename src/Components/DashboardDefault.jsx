import React, { useContext, useEffect, useState } from 'react';
import { FirebaseAuthContext } from '../Firebase/FirebaseAuthContext';

const DashboardDefault = () => {
  const { user } = useContext(FirebaseAuthContext);
  const [totalItems, setTotalItems] = useState(0);
  const [myItems, setMyItems] = useState(0);

  useEffect(() => {
    // Fetch total items
    fetch('https://room-server.vercel.app/allroommate')
      .then(res => res.json())
      .then(data => {
        setTotalItems(data.length);

        // Filter user-specific items (if they have an email field)
        const userItems = data.filter(item => item?.email === user?.email);
        setMyItems(userItems.length);
      });
  }, [user]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>

      {/* User Info */}
      <div className="bg-white shadow p-4 rounded-lg mb-6 flex items-center gap-4">
        <img
          src={user?.photoURL}
          alt="User"
          className="w-16 h-16 rounded-full border-2"
        />
        <div>
          <h2 className="text-xl font-semibold">{user?.displayName}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold text-blue-700">Total Listings</h3>
          <p className="text-3xl font-extrabold text-blue-900">{totalItems}</p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold text-green-700">My Listings</h3>
          <p className="text-3xl font-extrabold text-green-900">{myItems}</p>
        </div>

        {/* Add more cards here if needed */}
      </div>
    </div>
  );
};

export default DashboardDefault;
