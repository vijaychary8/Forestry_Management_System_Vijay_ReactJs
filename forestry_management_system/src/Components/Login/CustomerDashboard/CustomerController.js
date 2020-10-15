import React from 'react'
import {BrowserRouter as Router,Route,Link, useHistory} from 'react-router-dom';
import AddContract from './AddContract';
import getAllProducts from '../AdminDashboard/Product/getAllProducts';
import GetAllScheduler from '../AdminDashboard/Scheduler/GetAllScheduler';
import "./CustomerController.css"

export default function CustomerController(props) {
    const history=useHistory();

    return (
        <Router>
                <div class="container-fluid  bg-secondary py-3">
<div class="row collapse show no-gutters d-flex h-100 position-relative">
    <div class="col-3 px-0 w-sidebar navbar-collapse collapse d-none d-md-flex">
    </div>
    <div class="col px-3 ">
        <Link data-toggle="collapse" href="#" data-target=".collapse" role="button" className="p-1 font">
        Welcome,{props.history.location.state.user}
        </Link>
    </div>
    </div>

</div>
<div class="container-fluid px-0 h-100 ">
<div class="row vh-100 collapse show no-gutters d-flex h-100 position-relative">
    <div class="col-3 p-0 vh-100 h-100 text-white w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
        <div class="navbar-light bg-secondary  h-100 w-sidebar">
            <ul class="nav flex-column flex-nowrap text-truncate fontcolor">
            <li class="nav-item">

<Link className=" btn btn-secondary font"  to="/addContract">Add Contract</Link>


                </li><br/>


                <li class="nav-item">

<Link className=" btn btn-secondary font"  to="/getAllProducts">All Products </Link>



                </li><br/>

<li class="nav-item">

<Link className="btn btn-secondary font"  to="/getAllSchedulers">All Schedulers </Link>



                </li><br/>

                <li class="nav-item">

<button class="btn btn-secondary logout" onClick={()=>{
    history.push("/Login")
}}>logout</button>
</li>

</ul>
</div>
</div>
<div class="col p-3">

<Route   path = "/AddContract" component ={AddContract}></Route>
<Route   path = "/getAllProducts" component ={getAllProducts}></Route>
<Route   path = "/getAllSchedulers" component ={GetAllScheduler}></Route>




</div>
</div>
</div>       



</Router>



    )
}
