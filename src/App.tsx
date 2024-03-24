
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import UserDetails from './components/UserDetails';
import User from './components/User';
import Suggestions from './components/Suggestions';
import Category from './components/Categoty';
import Choose from './components/Choose';
import './App.css'
import LoginButton from './components/LoginButton'

import LogoutButton from './components/LogoutButton';
import Home from './components/Home';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Health from './components/Health';
import HealthSug from './components/HealthSug';


const ProtectedRoute = ({ component, ...args } : any) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

export default function App() {
  return (
    <div className =" ">
    <Router>
      <div >
        <nav className=''>
          
      
          <ul className='flex flex-row gap-6 px-80 mx-44 text-blue-500 underline'>
            
            <li className='font-bold text-xl underline'>
              <Link to=''>Home</Link>
            </li>
          
            <li className='font-bold text-xl px-8' >
              <Link to='/user'>User</Link>
            </li>
            <li className='font-bold text-xl px-2'>
              <Link to='/choose'>Xplore</Link>
            </li>
            <li className='font-bold text-xl px-4'>
              <Link to='/hlth/new'></Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to='/post-bmi'></Link>
            </li>
           
            <li className='font-bold text-xl '>
              <Link to='/category/post'> </Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to='/suggestion/get/:id'> </Link>
            </li>
            <li className='font-bold text-xl'>
              <Link to='/hlth/get/:id'></Link>
            </li>
          
          <li className='font-bold text-xl'>
            <Link to="/logout">lo</Link>
          </li>
          </ul>
        </nav>

        <Routes>

        <Route path="" element= {<Home/>} />
        <Route path="/login" element={<LoginButton />} />
        <Route path="/logout" element={<LogoutButton />} />
        <Route path="/contact" element={<h1>Contact us</h1>} />
          <Route path='/user' element={<User/>} />
          <Route path='/hlth/new' element={<Health/>} />
          <Route path='/hlth/get/:id' element={<HealthSug/>} />
          <Route path='/post-bmi' element={<UserDetails />} />
          <Route path='/choose' element={<Choose />} />
          <Route path='/category/post' element={<Category />} />
          <Route path='/suggestion/get/:id' element={<Suggestions />} />
    
        </Routes>
      </div>
    </Router>
    </div>
  );
}
