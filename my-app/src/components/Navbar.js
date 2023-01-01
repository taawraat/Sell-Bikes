import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" >
        <div class="container-fluid">
        <div id="icon"><img style={{height: 50, width: 50}} src="/logo.png" alt="react logo"/> </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/services">Service</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/contact">Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/banner">Banner</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}