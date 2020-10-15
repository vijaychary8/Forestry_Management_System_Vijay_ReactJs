import React, { useState } from 'react'
const axios = require('axios').default;


export default function GetAdmin() {

    var [adminName, setAdminName] = useState("");
    var [admin, setAdmin] = useState({});
    var [message,setMessage]=useState("");
  
    const handleInput = () => {
    
  
        axios.get('http://localhost:8080/getadmin', {
            params: {
                adminName: adminName
            }
        }
        ).then((response) => {
            setAdmin(response.data.admin);
            if(response.data.message==="Get the record"){
                alert("record found");
      
            }
        
      
        }).catch(error => {
            setMessage(error.message );
            console.error('There was an error!', error);
            alert(error)
        });

    }
    console.log(message)
  
    const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(adminName)
      handleInput();
  }
  


  
  
    return (
        <div>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group row">
                            <div class="col-sm-8">
                                <h4> Get Admin</h4>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="adminName"
                                    pattern="[A-Za-z ]{1,20}"
                                    title="must be characters and range from [1-20]"
                                    placeholder="Admin Name" 
                                    onChange={(e)=>setAdminName(e.target.value)}
                                    />

                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-8">
                                <button type="submit" class="btn btn-primary">Get Admin</button>
                            </div>
                        </div>
                    </form>

                </div>


            </div>

            <div className="container">

                <table class="table" style={{color:"blue"}}>
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Admin Name</th>
                            <th scope="col">Admin Password</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{admin.adminName}</td>
                            <td>{admin.adminPassword}</td>


                        </tr>
                    </tbody>
                </table>




            </div>




        </div>
    )
}

