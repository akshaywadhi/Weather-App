import React from 'react'

export default function Navbar() {
  return (
    <div className='rounded-end'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-end rounded-start">
  <div class="container-fluid rounded-end">
    <a class="navbar-brand" href="#">WeatherApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto p-2">
        <li class="nav-item px-3">
          <a class="nav-link active btn" aria-current="page" href='/'>Home</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link btn" onClick={() => alert('Open Weather API')}>About</a>
        </li>
        <li class="nav-item px-3 ">
          <a class="nav-link btn" onClick={() => alert(`Akshay Wadhi (Web Developer)\nEmail : akshaywadhi.cs@gmail.com`)}>Contact</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
