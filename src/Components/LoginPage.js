import React, { useState } from "react";
import "./LoginPageStyle.css";

function LoginPage() {

    const [LoginId, setLoginId] = useState("");
    const [ps, setPs] = useState("");
    const [logedIn, setLoggedIn] = useState(false);

    function handleLogin(){
        console.log(LoginId+" "+ps);

        fetch("http://localhost:5000/login",{
            method:"POST",
            crossDomain: true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({
                uname: LoginId,
                ps: ps,
            })
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userDone");
            if(data.status=="success") setLoggedIn(true);
        })
    }

  return (
    <>
      {!logedIn ?
      <div>
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form>
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" value={LoginId} onChange={e=>setLoginId(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" value={ps} onChange={e=>setPs(e.target.value)}/>
          <button type="button" onClick={handleLogin}>Log In</button>
          <div className="social">
            <div className="go">
              <i className="fab fa-google" /> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook" /> Facebook
            </div>
          </div>
        </form>
      </div>
      : 
        <> Login SuccessFull </>
      }

    </>
  );
}

export default LoginPage;
