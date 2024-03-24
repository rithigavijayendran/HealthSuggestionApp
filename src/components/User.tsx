import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';



type user = {
  user_id: number;
  username: string;
  password: string;
};

export default function User() {
  const AUTH_TOKEN = '1234567';
  const [user, setUser] = useState<user>();
 


  const onSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('data submitted');

    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .finally(() => console.log('user created'));
  };

  return  (
   
    <div className="full-window-container mt-4" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/high-angle-view-apples-table_1048944-12443228.jpg?size=626&ext=jpg&ga=GA1.1.1053476714.1708961817&semt=ais')`, backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="bg-white border border-gray-500 w-full max-w-md p-8  rounded-md">
      <h1 className="font-bold text-2xl text-black mb-6">Your Personal Trainer in Your Pocket.</h1>
      <form onSubmit={onSubmitData} className="flex flex-col items-center gap-6">
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          className="text-black bg-white border border-blue-500 px-4 py-2 rounded-md"
          value={user?.username}
          onChange={(data) => {
            setUser({
              ...user!,
              username: data.target.value,
            });
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="Enter your Password"
          className="text-black bg-white border border-blue-500 px-4 py-2 rounded-md"
          value={user?.password}
          onChange={(data) => {
            setUser({
              ...user!,
              password: data.target.value,
            });
          }}
        />
                  
          
        <button
          type="submit"
          className="login-button bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700"
      
        >
          Let's Go
        </button>

      </form>
    </div>
  </div>
  );
}
