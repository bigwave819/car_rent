import React from 'react'
import Classic from "../assets/classic1.jpg"
import "./pages.css"

const AboutOne = () => {
  return (
    <div className='all'>
      <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6 text-center text-md-start">
        <h1>Become a Host</h1>
        <p>Earn extra by renting out your car...</p>
        <button class="btn btn-custom">List Your Car</button>
      </div>
      <div class="col-md-6">
        <img src={Classic} alt="Car" class="img-fluid car-image"/>
      </div>
    </div>
  </div>
    </div>
  )
}

export default AboutOne
