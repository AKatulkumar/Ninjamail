import React from 'react'
import image from '../asset/section1.png';
import '../components/about.css';
export default function about() {
  return (
    <>
    <section className="about">
        <div className="info">
          <h1>Create Stunning <br />Email Campaigns</h1>
          <p className='para'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.Nostrum praesentium.</p>
          <button className="btn btn-success px-5">TRY NOW</button>
          <button className="btn btn-outline-success mx-4 px-5">GET A DEMO</button>
        </div>
        <div className="image">
          <img src={image} alt="image" />
        </div>
    </section>
    </>
  )
}
