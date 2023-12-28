import React from 'react'
import Cimage1 from '../images/Cimage1.jpg'
import Cimage2 from '../images/Cimage2.jpg'
import Cimage3 from '../images/Cimage3.jpg'

const Home = () => {
  return (
    <div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1500">
      <img src={Cimage1} className="d-block w-100" alt="companyimg" height={500}/>
    </div>
    <div className="carousel-item" data-bs-interval="1500">
      <img src={Cimage2} className="d-block w-100" alt="companyimg" height={500}/>
    </div>
    <div className="carousel-item" data-bs-interval="1500">
      <img src={Cimage3} className="d-block w-100" alt="companyimg" height={500}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home
