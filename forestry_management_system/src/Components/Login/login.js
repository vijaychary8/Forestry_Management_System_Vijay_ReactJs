import React, { useState} from 'react'
import User from "./user";
import Admin from './admin';
import "./login.css";






export default function Login() {

    var [userLogin, setUserLogin] = useState(false);
    var [adminLogin, setAdminLogin] = useState(true);

    var setUser = () => {
        setUserLogin(true);
        setAdminLogin(false);
    }

    var setAdmin = () => {
        setUserLogin(false);
        setAdminLogin(true);
    }

    return (


      

        <div>



            <div className="root-container ">

                <div className="box-controller">
                    <div
                        className={"controller " + (userLogin
                            ? "selected-controller"
                            : "")}
                        onClick={setUser}>
                         User 
</div>
                    <div
                        className={"controller " + (adminLogin
                            ? "selected-controller"
                            : "")}
                        onClick={setAdmin}>
                        Admin 
</div>

                </div>
                <div className="box-container">
                    {userLogin && <User />}
                    {adminLogin && <Admin />}
                </div>


            </div>
        </div>



    )
}