import { useState } from 'react';
import useHasMounted from '../components/HasMounted'
import styles from '../styles/Home.module.css'
import Datos from '../components/Datos';

export async function getStaticProps(){
  const url = 'https://jsonplaceholder.typicode.com/users';
  const url2 = 'https://api.covidtracking.com/v1/us/daily.json';
  const res =await fetch(url2);
  const data = await res.json();
  return {
    props:{
      data
    }
  }
}


const Home = ({data}) => {
  const hasMounted = useHasMounted();
  if(!hasMounted){
    return null 
  }else{
    return (
      <>
      <div className=''>
       <div className={styles.container}>
         <div className='flex justify-center mt-12'>
             <h1 className='text-3xl font-bold text-indigo-600'>Hydratation,Render, SSG</h1>
             <br />
          </div>
          <div className='ml-12'>
             <p>⚠️Hospitalized Currently</p>
             <p>🛑 Ventilator Currently</p>
            </div>
       </div>
       <div className='flex flex-wrap justify-center'>
         {data.map(datas => (
           <Datos
             key={datas.date}
             datas={datas}
           />
         ))}
       </div>
       </div>
      </>
   )
  }
  
}

export default Home
