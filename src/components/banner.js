import React from 'react';
import '../components/banner.css';
import image from '../asset/section2.png';
export default function banner() {
  return (
    <section className="banner">
      <div className="info2">
        <h1>Reach More Customers</h1>
        <button className="btn btn-success">LEARN MORE</button>
      </div>
      <div className="image2">
        <img src={image} alt="image" />
      </div>
    </section>
  )
}
