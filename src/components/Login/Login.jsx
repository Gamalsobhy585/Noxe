import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Login({saveUserData}) {
  console.log(saveUserData);
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    
    email: "",
    password: "",
  });
  function getUSerData(eventinfo) {
    let myUser = { ...user };
    myUser[eventinfo.target.name] = eventinfo.target.value;
    setUser(myUser);
  }



  
  // async function sendingLoginDataToApi() {
  //   let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`,user);
  //   if (data.message === "success") {
  //     setIsLoading(false);
  //     localStorage.setItem('userToken',data.token)
  //     navigate("/home");
  //   } else {
  //     setIsLoading(false);
  //     setError(data.message);
  //   }
  //   console.log(data);
  // }



  function validateUserCredentials() {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = storedUsers.find(
      storedUser => storedUser.email === user.email && storedUser.password === user.password
    );

    if (matchedUser) {
      setIsLoading(false);
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      console.log("Navigating to /");
      navigate("/");
    } else {
      setIsLoading(false);
      setError("Invalid email or password");
    }
  }




  function submitLoginForm(e) {
    e.preventDefault();
    setIsLoading(true);
    // sendingLoginDataToApi();
  let validation =validateLoginForm();
  if(validation.error)
    {
setIsLoading(false);
setErrorList(validation.error.details)
    }
    else
    {
          // sendingLoginDataToApi();
          validateUserCredentials();



    }
}

function validateLoginForm()
{
let scheme=Joi.object({
 
  email:Joi.string().email({tlds:{allow:['com','net']}}).required(),
  password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/),

});
return scheme.validate(user,{abortEarly:false});
// console.log(scheme.validate(user,{abortEarly:false}));
}




  return (
    <>
<Helmet>
  <meta charSet="utf-8" />
  <title>Login</title>
  <link rel="shortcut icon" href="../../../public/images.png" type="image/x-icon" />
</Helmet>
    {errorList.map((err,index) =>{ if (err.context.label == 'password') {
      return  <div key={index} className="alert alert-danger my-2" >Password Invalid</div>}

      
      else{
        return <div key={index} className="alert alert-danger my-2" >{err.message}</div>}
})}
     
       {error.length > 0 ? <div className="alert alert-danger my-2">{error}</div> : ''}

<form onSubmit={submitLoginForm} action="">
                <label htmlFor="email">Email</label>
                <input onChange={getUSerData} type="email" className='form-control my-input my-2' name='email' id='email' />

                <label htmlFor="password">Password</label>
                <input onChange={getUSerData} type="password" className='form-control my-input my-2' name='password' id='password' />
                <button className='btn btn-info'>
                    {isLoading == true ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
                </button>
            </form>
    </>
  );
}