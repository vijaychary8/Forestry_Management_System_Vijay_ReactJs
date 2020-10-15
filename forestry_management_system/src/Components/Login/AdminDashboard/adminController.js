import React from 'react';
import "./adminController.css"
import {BrowserRouter as Router,Route,Link,useHistory} from 'react-router-dom';
import AddProduct from './Product/addProduct';
import GetProduct from './Product/getProduct';
import DeleteProduct from './Product/deleteProduct';
import UpdateProduct from './Product/updateProduct'
import UpdateCustomer from './Customer/UpdateCustomer';
import GetCustomers from './Customer/GetCustomers';
import getAllCustomers from './Customer/getAllCustomers';
import DeleteCustomer from './Customer/DeleteCustomer';
import DeleteLand from './Land/DeleteLand';
import GetAllLands from './Land/GetAllLands';
import GetLand from './Land/GetLand';
import UpdateLand from './Land/UpdateLand';
import AddLand from './Land/AddLand';
import DeleteScheduler from './Scheduler/DeleteScheduler';
import UpdatScheduler from './Scheduler/UpdatScheduler';
import GetScheduler from './Scheduler/GetScheduler';
import GetAllScheduler from './Scheduler/GetAllScheduler';
import AddScheduler from './Scheduler/AddScheduler';
import DeleteOrder from './Orders/DeleteOrder';
import UpdateOrder from './Orders/UpdateOrder';
import GetOrder from './Orders/GetOrder';
import GetAllOrders from './Orders/GetAllOrders';
import AddOrder from './Orders/AddOrder';
import AddAdmin from './Admin/AddAdmin';
import GetAdmin from './Admin/GetAdmin';
import DeleteAdmin from './Admin/DeleteAdmin';
import UpdateAdmin from './Admin/UpdateAdmin';
import GetAllAdmin from './Admin/GetAllAdmin';
import DeleteContract from './Contract/DeleteContract';
import UpdateContracts from './Contract/UpdateContracts';
import GetContracts from './Contract/GetContracts';
import GetAllContracts from './Contract/GetAllContracts';
import AddContract from '../CustomerDashboard/AddContract';
import GetAllProducts from './Product/getAllProducts';


export default function AdminController(props) {


  const history = useHistory();

    // const [isAuth,setIsAuth]=useState(true);
    // if(!isAuth){

    //     return <Redirect to="/login"></Redirect>
    // }

    return (
        <Router>
            <div class="container-fluid  bg-secondary py-3">
    <div class="row collapse show no-gutters d-flex h-100 position-relative">
        <div class="col-3 px-0 w-sidebar navbar-collapse collapse d-none d-md-flex">
        </div>
        <div class="col px-3 ">
            <Link data-toggle="collapse" href="#" data-target=".collapse" role="button" class="p-1">
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

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Admin  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link className="dropdown-item"  to="/addAdmin">Add Admin </Link>
    <Link className="dropdown-item"  to="/getAdmin">Get Admin </Link>
    <Link className="dropdown-item"  to="/deleteAdmin">Delete Admin</Link>
    <Link className="dropdown-item"  to="/updateAdmin">Update Admin</Link>
    <Link className="dropdown-item"  to="/getAllAdmins">Get All Admins </Link>

  </div>
</div>

                    </li><br/>
                    <li class="nav-item">

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Product  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link className="dropdown-item"  to="/addProduct">Add Product </Link>
    <Link className="dropdown-item"  to="/getProduct">Get Product </Link>
    <Link className="dropdown-item"  to="/deleteProduct">Delete Product</Link>
    <Link className="dropdown-item"  to="/updateProduct">Update Product </Link>
    <Link className="dropdown-item"  to="/getAllProducts">Get All Products </Link>

  </div>
</div>

                    </li><br/>
                    <li class="nav-item">

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Customer  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className="dropdown-item"  to="/getCustomer">Get Customer </Link>
    <Link className="dropdown-item"  to="/deleteCustomer">Delete  Customer</Link>
    <Link className="dropdown-item"  to="/updateCustomer">Update Customer </Link>
    <Link className="dropdown-item"  to="/getAllCustomers">GetAll Customer </Link>

  </div>
</div>

                    </li><br/>
                    <li class="nav-item">

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Land  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link className="dropdown-item"  to="/addLand">Add Land </Link>
    <Link className="dropdown-item"  to="/getLand">Get Land </Link>
    <Link className="dropdown-item"  to="/deleteLand">Delete Land </Link>
    <Link className="dropdown-item"  to="/updateLand">Update Land </Link>
    <Link className="dropdown-item"  to="/getAllLands">GetAll Land </Link>

  </div>
</div>

                    </li><br/>
                    <li class="nav-item">

<div class="btn-group dropup">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Scheduler  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link className="dropdown-item"  to="/addScheduler">Add Scheduler</Link>
    <Link className="dropdown-item"  to="/getScheduler">Get Scheduler</Link>
    <Link className="dropdown-item"  to="/deleteScheduler">Delete Scheduler</Link>
    <Link className="dropdown-item"  to="/updateScheduler">Update Scheduler</Link>
    <Link className="dropdown-item"  to="/getAllSchedulers">Get All Scheduler</Link>

  </div>
</div>

                    </li><br/>
                    <li class="nav-item">

<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Orders  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link className="dropdown-item"  to="/addOrder">Add Orders </Link>
    <Link className="dropdown-item"  to="/getOrder">Get Orders </Link>
    <Link className="dropdown-item"  to="/deleteOrder">Delete Orders </Link>
    <Link className="dropdown-item"  to="/updateOrder">Update Orders </Link>
    <Link className="dropdown-item"  to="/getAllOrders">Get All Orders</Link>

  </div>
</div>

                    </li><br/>


                    <li class="nav-item">

<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Contracts  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link className="dropdown-item"  to="/addContract">Add Contracts </Link>
    <Link className="dropdown-item"  to="/getContract">Get Contracts </Link>
    <Link className="dropdown-item"  to="/deleteContract">Delete Contracts</Link>
    <Link className="dropdown-item"  to="/updateContract">Update Contracts</Link>
    <Link className="dropdown-item"  to="/getAllContracts">Get All Contracts </Link>

  </div>
</div>

                    </li><br/>




                    <li class="nav-item">

                        <button class="btn btn-secondary" onClick={()=>{
                          history.push("/login")
                          
                        }

                        }>logout</button>
                    </li>

                </ul>
            </div>
        </div>
        <div class="col p-3 ">

<h1 > </h1>
          {/* Admin */}
          <Route   path = "/addAdmin" component = {AddAdmin}></Route>
        <Route   path = "/getAdmin" component = {GetAdmin}></Route>
        <Route   path = "/deleteAdmin" component = {DeleteAdmin}></Route>
        <Route   path = "/updateAdmin" component = {UpdateAdmin}></Route>
        <Route   path = "/getAllAdmins" component = {GetAllAdmin}></Route>





{/* product */}
        <Route   path = "/addProduct" component = {AddProduct}></Route>
        <Route   path = "/getProduct" component = {GetProduct}></Route>
        <Route   path = "/deleteProduct" component = {DeleteProduct}></Route>
        <Route   path = "/updateProduct" component = {UpdateProduct}></Route>
        <Route   path = "/getAllProducts" component = {GetAllProducts}></Route>


      {/* Customer   */}
        <Route   path = "/updateCustomer" component = {UpdateCustomer}></Route>
        <Route   path = "/getCustomer" component = {GetCustomers}></Route>
        <Route   path = "/getAllCustomers" component = {getAllCustomers}></Route>
        <Route   path = "/deleteCustomer" component = {DeleteCustomer}></Route>
        
        {/* Land */}
        <Route   path = "/deleteLand" component = {DeleteLand}></Route>
        <Route   path = "/updateLand" component = {UpdateLand}></Route>
        <Route   path = "/getLand" component = {GetLand}></Route>
        <Route   path = "/getAllLands" component = {GetAllLands}></Route>
        <Route   path = "/addLand" component = {AddLand}></Route>
        
        {/* Scheduler */}
        <Route   path = "/deleteScheduler" component = {DeleteScheduler}></Route>
        <Route   path = "/updateScheduler" component = {UpdatScheduler}></Route>
        <Route   path = "/getScheduler" component = {GetScheduler}></Route>
        <Route   path = "/getAllSchedulers" component = {GetAllScheduler}></Route>
        <Route   path = "/addScheduler" component = {AddScheduler}></Route>

        {/* Orders */}
        <Route   path = "/deleteOrder" component = {DeleteOrder}></Route>
        <Route   path = "/updateOrder" component = {UpdateOrder}></Route>
        <Route   path = "/getOrder" component = {GetOrder}></Route>
        <Route   path = "/getAllOrders" component = {GetAllOrders}></Route>
        <Route   path = "/addOrder" component = {AddOrder}></Route>


{/* Contracts */}
<Route   path = "/deleteContract" component = {DeleteContract}></Route>
        <Route   path = "/updateContract" component = {UpdateContracts}></Route>
        <Route   path = "/getContract" component = {GetContracts}></Route>
        <Route   path = "/getAllContracts" component = {GetAllContracts}></Route>
        <Route   path = "/addContract" component = {AddContract}></Route>




        </div>
    </div>
</div>       



        </Router>
    );
}
