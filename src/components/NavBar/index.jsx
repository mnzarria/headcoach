import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import CartWidget from '../CartWidget'


export default function NavBar() {
  return (
    <>     
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">HEAD-COACH
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#">INICIO</a></li>
                    <li className='nav-item'><a className="nav-link" href="#">ARQUEROS</a></li>
                    <li className='nav-item'><a className="nav-link" href="#">DEFENSORES</a></li>
                    <li className='nav-item'><a className="nav-item" href="#">MEDIOCAMPISTAS</a></li>
                    <li className='nav-item'><a className="nav-item" href="#">DELANTEROS</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">LEYENDAS</a></li>                   
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Qué estas buscando?" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <div>
                    <CartWidget/>
                    <span>5</span>
                </div>
                </div>
            </div>
        </nav>
    </>
  )
}