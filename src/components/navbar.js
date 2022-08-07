import React from 'react'
import logo from '../asset/logo.png';
import '../components/navbar.css';
export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand px-4" href="#"><img src={logo} width="60px" height="30px"/>NinjaMail</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 px-5">
            <li className="nav-item mx-4 ">
              <a className="nav-link active" aria-current="page" href="#">FEATURES</a>
            </li>
            <li className="nav-item mx-4 ">
              <a className="nav-link active" href="#">PRICING</a>
            </li>
            <li className="nav-item mx-4 ">
              <a className="nav-link active" href="#">SERVICES</a>
            </li>
            <li className="nav-item mx-4 ">
              <a className="nav-link active" href="#">PARTNERS</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-success px-5 mx-3" type="submit">SIGN UP FREE</button>
          </form>
        </div>
      </div>
    </nav>
  );
}


