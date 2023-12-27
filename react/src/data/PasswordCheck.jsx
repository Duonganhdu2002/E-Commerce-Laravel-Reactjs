import React, { useState } from 'react';
import axios from 'axios';

const PasswordCheckComponent = () => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [result, setResult] = useState('');

  const handleCheckPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/public/User', {
        enteredPassword,
      });

      if (response.data.success) {
        setResult('Password is correct!');
      } else {
        setResult('Incorrect password. Try again.');
      }
    } catch (error) {
      console.error('Error checking password:', error);
      setResult('Error checking password. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter password to check"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
      />
      <button onClick={handleCheckPassword}>Check Password</button>
      <p>{result}</p>
    </div>
  );
};

export default PasswordCheckComponent;
