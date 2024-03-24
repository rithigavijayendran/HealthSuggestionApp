import React from 'react';
import {  useAuth0 } from '@auth0/auth0-react'


export default function Home() {

  const { user, getAccessTokenSilently } = useAuth0()
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();
 
  return (

    <div className="full-window-container mt-4 bg-white flex items-center justify-center flex-col gap-3 p-7">
      <header className="bg-white py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-red-800 mb-8 sm:mx-52 lg:mx-72">Health Warriors!!!</h1>
          </div>
        </nav>
      </header>

      <section
        className="bg-center py-20 w-full"
        style={{ backgroundImage: `url('http://www.tipsforgrooming.com/wp-content/uploads/2018/11/6-Simple-Tips-For-Better-Fitness-and-Health-to-Follow.jpg')`, backgroundSize: 'cover', height: '50vh' }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Fit, Stay Healthy</h2>
          <p className=' font-bold text-white text-3xl'> Welcome {user?.name}</p> 
          <button
          type="submit"
          className="mt-6 login-button bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700" onClick={loginWithRedirect}
        >
          Login
        </button>
     
        </div>
      </section>

      <section className="py-16 " style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/lemons-limes-wooden-background_127657-5848.jpg?w=996')` }}>

          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-8">
          <div className="p-8 bg-white rounded-lg shadow-md m-20 ">
                    <h3 className="text-2xl font-bold text-gray-800 ">Enter Health Condition</h3>
                    <p className="text-gray-600">Simply enter the name of your disease or health condition.</p>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-md m-20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Receive Suggestions</h3>
                    <p className="text-gray-600">Get personalized fitness exercises, nutrition diet, remedies, and more!</p>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-md m-20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Calculate BMI and Understand Health Category</h3>
                    <p className="text-gray-600">Please input your height and weight to calculate your Body Mass Index (BMI). Based on the BMI value obtained, you will be categorized into one of the following categories: obese, underweight, normal weight, or overweight.</p>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-md m-20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Receive Suggestions</h3>
                    <p className="text-gray-600">Based on your categorized category, you will receive personalized fitness exercises, nutritional guidance, recommended remedies, and a list of foods and activities to avoid.</p>
                </div>
                <div className="p-8 bg-white rounded-lg shadow-md m-20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Start Your Journey</h3>
                    <p className="text-gray-600">Take the first step towards a healthier lifestyle and achieve your fitness goals.</p>
                </div>
          </div>
      </section>

      <footer className="bg-gray-800 py-4 text-center text-white">
        <div className="container mx-auto">
        </div>
      </footer>

    </div>
  );
}

