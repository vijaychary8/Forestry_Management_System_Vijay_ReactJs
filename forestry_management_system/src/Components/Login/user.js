import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
const axios = require('axios').default;


const  User=(props) =>{
  const history=useHistory();
  const [userName,setUserName]=useState("");
const [password,setPassword]=useState("");
const [err,setError]=useState(true);


  useEffect(() => {
    axios.get('http://localhost:8080/logincustomer', {
      params: {
        customerName: userName,
        customerPassword: password
      }
    }
    ).then((response) => {
      setError(response.data.error)
      console.log(response)
     
    
    });
  }, [userName,password])  
  
  const handleSubmit= (e)=>{
    e.preventDefault();
  console.log(userName);
  
    console.log(err);
    console.log(userName);
  
  
  
    if (!err) {
      alert("logged in");
     
     history.push("/Customer",{user:userName})
    } else {
      alert("enter valid credentials")
    }
  
  
  
  
  }  


      return (
        <form onSubmit={handleSubmit}>
        <div className="inner-container">
          <div className="header">
            User Login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username" 
                pattern="[A-Za-z ]{1,20}" title="must be characters and range from [1-20]"
                className="login-input"
                onChange={(e)=>setUserName(e.target.value)}
                required

                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                className="login-input"
                onChange={(e)=>setPassword(e.target.value)}
                required
                placeholder="Password"/>
            </div>
  
            <button
              type="submit"
              className="login-btn"
              // onClick={()=>setIsAuth("true")}
              >Login</button>
          </div>
        </div>
        </form>
      );
    
  
  }
  export default User;
