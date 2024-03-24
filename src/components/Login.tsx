import React, { useState } from 'react';
import { Link} from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmitData(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Sign in data submitted:', { email, password });
    
    }

  return (
    <div className="login-container flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('https://media.istockphoto.com/id/857838962/photo/fitness-background-sport-equipment-copy-space.jpg?s=612x612&w=0&k=20&c=A9Kuj9GCaqhzIumDbB-j6TW32mFIIahsxvYORGiG1pw=')` }}>
      <h1 className="login-title text-4xl text-white font-bold">Let's Go</h1>

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

        <button type="submit" className="login-button bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700">
          Sign In
        </button>
      </form>

      <Link to="/signup" className="new-user-link flex items-center gap-2">
        <button className="new-user-button bg-gray-200 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-300">I'm New</button>
      </Link>
    </div>
  );
}
