import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Weather.css'

export default function Weather() {
  const data = useSelector(state => state.wdata.wdata)
  const [nav, setNav] = useState(false)
  const [file, setFile] = useState(data)
  
  console.log(data)

  function reset(){
   window.location.replace('/')
  }

  useEffect(() => {
    if(data.length == 0){
      return setNav(true)
     }
  })


  return (
    <div>
      {
        nav && (<Navigate to='/' replace='true'/>)
      }
 {
  file.map(datas => {
    console.log(datas[8].country)
   const icon = datas[1][0].icon
   const image = `https://openweathermap.org/img/wn/${icon}@2x.png`
   console.log(icon)
    console.log(datas[1][0].description)
  return  <>
<h1 className='text-black'>{datas[11]}</h1>
     <h3>Temperature : {datas[3].temp}°</h3>
     <h3>Feels Like : {datas[3].feels_like}°</h3>
     <p>The Weather Is Currently : {datas[1][0].description} </p>
     <img src={image} alt='image' />

     <p>Longitude :  {datas[0].lon}</p>
     <p>Latitude :  {datas[0].lat}</p>
     <h3>Country : {datas[8].country}</h3>
 
     </>
   
  })
 }
 <Link to='/'> <button onClick={reset}>Home</button></Link>

    </div>
  )
}
