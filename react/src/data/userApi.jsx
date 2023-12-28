import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/public/User')
      .then(response => {
        setData(response.data.data); // Access the 'data' property in the response
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p className="text-xl">Loading...</p>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">Data from API:</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map(user => (
              <div key={user.user_id} className="bg-gray-200 p-4 rounded-md">
                <h2 className="text-xl font-bold mb-2">{user.username}</h2>
                <p>Email: {user.email}</p>
                <p>Full Name: {user.first_name} {user.last_name}</p>
                <p>Telephone: {user.telephone}</p>
                <p>Password: {user.password}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
