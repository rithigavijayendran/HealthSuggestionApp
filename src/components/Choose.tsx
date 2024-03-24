import React from 'react';
import { Link } from 'react-router-dom';

export default function Choose() {
  return (
    <div className="full-window-container mt-4">
      <div className="relative w-full h-full max-w-screen-xl mt-2">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://img.freepik.com/premium-photo/lemons-limes-wooden-background_127657-5848.jpg?w=996"
          alt="Example"
        />

        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
          <img
            src="https://media.istockphoto.com/id/1135440686/vector/wellness-people-health-logo-symbol-icon-vector-design.jpg?s=612x612&w=0&k=20&c=sBtKVsSYhHl3xUjQt2MAmXKK80hbUMdO3BdAGpMm8Q4="
            alt=" ws"
            className="w-20 mb-20"
          />
          <p className="font-serif text-3xl text-black text-center mb-10">
            "Life has its ups and downs, we call them squats"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-3">
            < Link to = "/post-bmi">
            <button className="bg-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white px-6 py-3 rounded-md mt-2 shadow-2xl mb-24">
              Know Your BMI
            </button>
            </Link>
            <Link to ="/hlth/new">
            <button className="bg-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white px-6 py-3 rounded-md mt-2 shadow-2xl mb-24">
              Ask Your Health Queries
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
