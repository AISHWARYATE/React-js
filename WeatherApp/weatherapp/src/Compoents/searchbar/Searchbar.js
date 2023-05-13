import React, { useState } from 'react'
import './Searchbar.css';
import axios from "axios"
// import Lastpart from './../lastpart/Lastpart';
import Loader from './../loader/Loader';
import Home from '../../pages/Home';

export default function Searchbar() {
  const [state,setState] = useState({
    value:'',
    current:{},
    weekinfo:[],
    loading:false,
    error:false,
   })
  

     const change = (e)=>{
       setState({
         ...state,
         value : e.target.value,  
       })
    }

    const sub =(e)=>{
      e.preventDefault()
      setState({
        ...state,
        loading:true,
      })
      axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${state.value}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`)
      .then(response=>{
        console.log("response===>",response)

        const data =response.data
        const months=['Janvury','Februvury','March','April','May','June','Julay','Agust','September','October','November','December']
        const days=['Sunday','Monday','Tuesday','Wensday','Thursday','Friday','Saturday']
        const currentDate=new Date()
        console.log("current==>",currentDate);
        console.log("day----",currentDate.getDay())
        const date=`${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
        console.log("date---",date);
        const sunset = new Date(data.list[0].sunset * 1000).toLocaleTimeString().slice(0, 4)
        console.log('sunset----' ,sunset);
        const sunrise = new Date(data.list[0].sunrise * 1000).toLocaleTimeString().slice(0, 4)
        


        const current = {
        city: data.city.name,
        country: data.city.country,
        date,
        population: data.city.population,
        desc: data.list[0].weather[0].description,
        main: data.list[0].weather[0].main,
        icon: data.list[0].weather[0].icon,
        temp: data.list[0].temp.day,
        hTemp: data.list[0].temp.max,
        lTemp: data.list[0].temp.min,
        sunrise,
        sunset,
        clouds: data.list[0].clouds,
        humidity: data.list[0].humidity,
        wind: data.list[0].speed,
        pressure: data.list[0].pressure,
      }
      console.log("current===",current);

      const weekData = data.list
      const weekinfo = weekData.map((data, index) => {
        return{
          key:index,
          main: data.weather[0].main,
          day: new Date(data.dt * 1000).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).slice(0,3),
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
          hTemp: data.temp.max,
          lTemp: data.temp.min,
        }
      })
      console.log("weekinfo",weekinfo);

      //const WeekInfo =weekInfoo.slice(0,7)

      setState({
        ...state,
        current,
        weekinfo,
        loading: false,
        error: false,
      })
      
     console.log("cuurent",current);

      }).catch((error)=>{
        console.log("error===>",error);
        setState({
        ...state,
        loading:false,
        error: true,
        current:{},
        weekInfo:[],
      })
      })
    }
    console.log("cuurent",state.weekinfo);
  return (
    <>
      <nav class="navbar navbar-expand-sm ">
  <div class="container-fluid ">
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
   
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search"  onChange={change} placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"onClick={sub} >Search</button>
      </form>
      
    </div>
  </div>
</nav>
   
         {
        state.loading === true ? 
        <Loader/> 
        :
      <div>  
        {state.current.country !== undefined ? 
        <div className="weather">
          <Home today={state.current} weekly={state.weekinfo} />
        </div> 
        : 
        state.error ? 
        <p className="error__loc" style={{marginLeft:"500px",color:"red",marginTop:"100px"}}>Sorry! we donot have any information on specified location.</p> 
        :
        <div>  

        </div>
        }
      </div>
      }

    </>
    
  )
}
