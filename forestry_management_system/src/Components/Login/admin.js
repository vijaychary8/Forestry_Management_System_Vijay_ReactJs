import React ,{useState,useEffect}from 'react';
import { useHistory } from 'react-router-dom';
const axios = require('axios').default;

 const  Admin=(props) => {
   const history=useHistory();

const [userName,setUserName]=useState("");
const [password,setPassword]=useState("");
const [err,setError]=useState(true);


useEffect(() => {
  axios.get('http://localhost:8080/loginadmin', {
    params: {
      adminName: userName,
      adminPassword: password
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
   
   history.push("/Admin",{user:userName})
  } else {
    alert("enter valid credentials")
  }




}
  
      return (
          <form onSubmit={handleSubmit} >
        <div className="inner-container">
          <div className="header">
            Admin Login
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input  
              pattern="[A-Za-z ]{1,20}" 
              title="must be characters and range from [1-20]"
                
              type="text"
                name="username"
                className="login-input"
                placeholder="Username"
                // value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                required

                />
            </div>
  
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,8}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"

                name="password"
                className="login-input"
                placeholder="Password"
                // value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required/>
            </div>
            <button
              type="submit"
              className="login-btn"
              // onClick={()=>setIsAuth(true)}
              >Login</button>
          </div>
        </div>
        </form>
      );
    
  }
  export default Admin;
  