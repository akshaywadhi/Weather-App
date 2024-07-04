import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWData } from './redux/UserSlice'
import { Navigate } from 'react-router-dom'
import Navbar from './component/Navbar'

function EnterCity() {
  const today = new Date()
const date = today.toDateString()

  const [city ,setCity] = useState()
  const [navigate, setNavigate] = useState(false)
  const dispatch = useDispatch()
 
async function get(e){
    e.preventDefault()

if(city){

  try{
     
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fc55cd89ceb42db33d8cea1d66fa478f`)
    const res = response.data


    console.log(res)
    let order = []
    for(let key in res){
      order.push(res[key])
    }
      dispatch(getWData(order))
      setNavigate(true)
    
  }

catch(err){
console.log(err)
alert('City Not Found')
}


}

else{
  alert('Please Enter City Name')
}
   
  }

  return (
    <>
  {
    navigate && (<Navigate to='/weather' replace='true'/>)
  }

<Navbar/>


<div className='row g-3  align-items-center justify-content-center mt-4'>
  <div className='col-auto'>
<label className='col-form-label'>Enter City Name</label>
    </div>
    <div className='col-auto'>
    <form onSubmit={get} className='d-flex align-items-center justify-content-center'>
      <input type='text' className='form-control' onChange={(e) => setCity(e.target.value)}/>
     <button type='submit' className='ms-2'>Search</button>
    </form>
    </div>
  
</div>
  <div className='mt-5'>
   {date}
<p className='bg-black text-white'>OpenWeather API</p>

  </div>
  
   </>
  )
}

export default EnterCity
