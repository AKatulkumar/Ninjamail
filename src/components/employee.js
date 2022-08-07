import React from 'react';
import img1 from '../asset/chef.jpg';
import img2 from '../asset/emp.jpg';
import img3 from '../asset/happy.jpg';
import '../components/employee.css';
export default function employee() {
  return (
    <>
    <section className="image-container">
        <div className="image1">
            <img src={img1} alt="image"/>
        </div>
        <div className="image3">
            <img src={img2} alt="image"/>
        </div>
        <div className="image4">
            <img src={img3} alt="image"/>
        </div>
    </section>
    </>
  )
}
