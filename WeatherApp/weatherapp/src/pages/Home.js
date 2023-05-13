import React from 'react'
import './Home.css';
// import Searchbar from './../Compoents/searchbar/Searchbar';
import Secondpart from '../Compoents/secondpart/Secondpart';
import Lastpart from '../Compoents/lastpart/Lastpart';
// import Loader from '../Compoents/loader/Loader';

export default function Home({today,weekly}) {
  console.log(today);
  return (
    <>
      
      {/* <Searchbar/> */}
      <Secondpart data={today}/>
      <Lastpart data={weekly}/>
        
    </>
  )
}
