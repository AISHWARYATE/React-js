import React from 'react'
import './Lastpart.css';
export default function Lastpart({data}) {
  console.log(data);

  return (
     <>
    {data.map((data)=>(
      // <div class="container1 align-items-center">
      <div class="container2 ">
        <div>
         <h2>{data.day}</h2>
         <p>{data.hTemp} c-{data.lTemp}</p>
         <p>{data.main}</p>
         <p>{data.desc}</p>  
         </div>
   </div>
  //  </div>
    )
    )}
  </>  
  )
}
