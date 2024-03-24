import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type suggestions = {
    
    suggestions:string;
    category: string;
    Exercise_1: string;
    Descriptions_1: string;
    Exercise_2: string;
    Descriptions_2: string;
    NutritionDiet:string;
    Duration: string;
    Donts: string;
    image: string;
};

export default function Suggestions() {
    const AUTH_TOKEN = "1234567"
    const {id} = useParams();
    const [suggestions, setsuggestions] = useState<suggestions[]>([]);

    useEffect(() => {
        fetch(`/api/suggestion/get/${id}` , {
            method:'GET',
      headers :{
        'content-type':'application/json',
        'Authorization':`Bearer ${AUTH_TOKEN}`,
      }
        })
        .then((response) => response.json())
        .then((data) => setsuggestions(data.results))
        .finally(() => console.log("done"));
  }, [id]);


  return (
    <div className="bg-white h-full flex items-center justify-center flex-col gap-3 full-window-container mt-4" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/sport-equipment_23-2148148982.jpg?size=626&ext=jpg&ga=GA1.1.1053476714.1708961817&semt=ais')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <h1 className='text-blue font-bold tracking-tight p-4 px-8 '> </h1>
        {
        suggestions.map((suggestion) => (
           
            <Link to ={`/category/post  ${suggestion.Exercise_1}`}>
           <div  className='flex items-center flex-col gap-5 '>
                <img src={suggestion.image} alt="" width={500} height={700} className='mt-4'/>
                <p className=' px-24 font-serif text-pretty text-lg justify-start'><p className=' text-black font-bold text-3xl'>Exercise</p>
                {
                suggestion.Exercise_1
                }
                
                </p>
                <p className=' px-24 font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl'></p>
                {
                suggestion.Descriptions_1
                }
                </p>
                <p className=' px-24 font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl'></p>
                {
                suggestion.Exercise_2
                }
                
                </p>
                <p className=' px-24 font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl'></p>
                {
                suggestion.Descriptions_2
                }
                </p>

               <p className='font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl font-serif'>Nutrition Diet</p>{suggestion.NutritionDiet}</p>
               <p className='font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl font-serif'>Duration</p>{suggestion.Duration}</p>
            <p className='px-24 font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl font-serif'>Dont's</p>{suggestion.Donts}</p>
          </div>
            </Link>
        )
        )}
        
      


      
    </div>
  )
}