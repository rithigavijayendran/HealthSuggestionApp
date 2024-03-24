import React, { useState } from 'react';
import { Link } from 'react-router-dom';


type category = {
  user_id : number;
  category: string;
};

export default function Category() {
  const AUTH_TOKEN = '1234567';
  const [category, setCategory] = useState<category>();

  const onSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('data submitted');

    fetch('/api/category/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify(category),
    })
      .then((response) => response.json())
      .finally(() => console.log('user created'));
  };

  return (
     <form onSubmit={onSubmitData}>
      <div className="full-window-container mt-4">
        <div className="relative w-full h-full max-w-screen-xl ">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://img.freepik.com/free-photo/flat-lay-frame-with-healthy-food_23-2148531526.jpg?t=st=1710361710~exp=1710365310~hmac=7cb0c8a964acbab20a9c83ec857470d338e0ac74c8a3693b45259bc29802574a&w=996"
            alt="Example"
          />

          <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
           
            <p className="text-lg md:text-3xl font-extrabold text-gray-800 tracking-tighter font-serif mb-24">
              "Sweat Now, Shine Later"
            </p>
            <input
              type="text"
              className="p-2 px-4 md:px-8 bg-green-100 border border-gray-500 rounded-xl mb-8"
              placeholder="Enter your Category"
              value={category?.category}
              onChange={(data) => {
                setCategory({
                  ...category!,
                  category: data.target.value,
                });
              }}
            />
            <Link to={`/suggestion/get/${category?.category}`}>
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
