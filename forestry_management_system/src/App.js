import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Login from "./Components/Login/login";

import './App.css';
import AdminController from './Components/Login/AdminDashboard/adminController';
import CustomerController from './Components/Login/CustomerDashboard/CustomerController';
import Home from './Components/Home/Home';
import Register from './Components/Register';
import Contacts from './Components/Login/Contacts/Contacts';

function App() {
  return (
    <Router>
    <div className="App">
     <nav className="navbar navbar-expand-lg ">
  <Link className="navbar-brand" to="/Home">
  <span style={{fontSize: "20px",color: "white"}}>
  <i class="fas fa-seedling"></i>
  </span>

   <b> MyForestry</b></Link>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button><br/>
  <div className="collapse navbar-collapse " id="navbarNav">
  <ul className="navbar-nav">


      <li className="nav-item  ">
        <Link className="nav-link  "to="/Contact">Contact</Link>
      </li>

      </ul>
      

    </div>

  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item ">
        <Link className="nav-link login"  to="/Login">Login</Link>
      </li>

      <li className="nav-item  ">
        <Link className="nav-link login" data-toggle="modal" data-target="#exampleModal">Sign Up</Link>
      </li>

     
    </ul>

  </div>

  
</nav>
<Route exact path = "/" component ={Home}></Route>

  <Route exact path = "/home" component ={Home}></Route>
    <Route   path = "/login" component = {Login}></Route>
    <Route   path = "/Contact" component = {Contacts}></Route>

    <Route   path = "/Admin" component = {AdminController}></Route>
    <Route path="/Customer" component={CustomerController}></Route>




        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sign up</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <Register/>
      </div>
          </div>
  </div>
</div>

            
        </Router>

  );
}

export default App;
