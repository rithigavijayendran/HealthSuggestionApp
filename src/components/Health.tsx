import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Healthqueries = {
  user_id: number;
  problem: string;
  advices?:string,
  image1?:string;
};

export default function Health() {
  const AUTH_TOKEN = '1234567';
  const [Healthqueries, setHealthqueries] = useState<Healthqueries>({ user_id: 0, problem: '' });

  const onSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('data submitted');


    fetch('/api/hlth/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify(Healthqueries),
    })
      .then((response) => response.json())
      .finally(() => console.log('Healthqueries created'));
  };

  return (
    <form onSubmit={onSubmitData}>
      <div className="full-window-container mt-4">
        <div className="relative w-full h-full max-w-screen-xl ">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://img.freepik.com/premium-photo/healthy-lifestyle-accessories-white-background-top-view_185193-6005.jpg?w=900"
            alt="Example"
          />

          <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
            <p className="text-lg md:text-3xl font-extrabold text-gray-800 tracking-tighter font-serif mb-24">
              "Your pocket companion for a journey to optimal health."
            </p>
         
            <input
              type="text"
              className="p-2 px-4 md:px-8 bg-green-100 border border-gray-500 rounded-xl mb-8"
              placeholder="Enter your Problem"
              value={Healthqueries?.problem}
              onChange={(data) => {
                setHealthqueries({
                  ...Healthqueries!,
                  problem: data.target.value,
                });
              }}
            />
            <Link to={`/hlth/get/${Healthqueries?.problem}`}>
              <button
                type="submit"
                className="px-5 py-2 md:px-8 md:py-3 bg-green-600 hover:bg-green-400 text-white font-bold border border-gray-500 rounded-xl mt-4 md:mt-8 transition duration-300 mb-8"
              >
                Give Suggestions
              </button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
