import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitData = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
  };

  return !isAuthenticated && (
    <div className="login-container flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/medical-desk-with-stethoscope-keyboard_23-2148519721.jpg?w=996&t=st=1710392303~exp=1710392903~hmac=69da3e72b8ecf3842fbac0923671ba4145a5e946d6c66c356d087b0fd7061057')`, backgroundSize: 'cover' }}>
      <form onSubmit={onSubmitData} className="login-form flex flex-col gap-4">
        <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button type="submit" className="login-button bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700" onClick={loginWithRedirect}>
          Sign In
        </button>
      </form>

    </div>
  );
}

export default LoginButton;
