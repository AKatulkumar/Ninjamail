import React from 'react';
import image from '../asset/section3.png';
import image2 from '../asset/Section5.png';
import '../components/card.css';
export default function card() {
  return (
    <>
    <div className="section3">
    <section className="card1">
        <div className="card">
        <img src={image} className="card-img-top" alt="image"/>
        <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ut numquam, aspernatur suscipit atque dolorem ullam minima velit!</p>
            <button className="btn btn-primary">Learn More</button>
        </div>
        </div>
    </section>
    <section className="card2">
        <div className="card">
        <img src={image2} className="card-img-top" alt="image"/>
        <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ut numquam, aspernatur suscipit atque dolorem ullam minima velit!</p>
            <button className="btn btn-success">Learn More</button>
        </div>
        </div>
    </section>
    <section className="informations">
        <h1 className="heading">The Source For <br />Proven, Engaging <br />email campaigns.</h1>
        <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis itaque, exercitationem corrupti deserunt excepturi dolor nam ducimus iste inventore rem esse laboriosam est accusamus, at quaerat quidem unde ex?</p>
    </section>
    </div>
    </>
  )
}
