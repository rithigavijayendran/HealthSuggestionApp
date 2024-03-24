import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type Healthqueries = {

    problem: string;
    advices: string;
    NutritionDiet:string;
    Donts:string;
    image1: string;
};

export default function Healthqueries() {
    const AUTH_TOKEN = "1234567"
    const {id} = useParams();
    const [Healthqueries, setHealthqueries] = useState<Healthqueries[]>([]);

    useEffect(() => {
        fetch(`/api/hlth/get/${id}` , {
            method:'GET',
      headers :{
        'content-type':'application/json',
        'Authorization':`Bearer ${AUTH_TOKEN}`,
      }
        })
        .then((response) => response.json())
        .then((data) => setHealthqueries(data.results))
        .finally(() => console.log("done"));
  }, [id]);


  return (
    <div className="bg-white h-full flex items-center justify-center flex-col gap-3 full-window-container mt-4" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/notebook-pen-near-medical-supplies_23-2147796472.jpg?size=626&ext=jpg&ga=GA1.1.1053476714.1708961817&semt=ais')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <h1 className='text-white font-bold tracking-tight p-4 px-8 '> </h1>
        {
        Healthqueries.map((Healthquerie) => (
           
            <Link to ={`/hlth/new  ${Healthquerie.advices}`}>
           <div  className='flex items-center flex-col gap-6 justify-center'>
                <img src={Healthquerie.image1} alt="" width={500} height={700} className='mt-4'/>
                <p className=' px-24 font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl'>Health Advices</p>
                {
                Healthquerie.advices
                }
                </p>
                <p className=' px-24 font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl'>Nutrition Diet</p>
                {
                Healthquerie.NutritionDiet
                }
                </p>
                <p className=' px-24 font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl'>Avoid</p>
                {
                Healthquerie.Donts
                }
                </p>
          </div>
            </Link>
        )
        )}
        
      


      
    </div>
  )
}