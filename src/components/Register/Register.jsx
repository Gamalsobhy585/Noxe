import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Register() {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
  });
  function getUSerData(eventinfo) {
    let myUser = { ...user };
    myUser[eventinfo.target.name] = eventinfo.target.value;
    setUser(myUser);
  }
  // async function sendingRegisterDataToApi() {
  //   let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signup`,user);
  //   if (data.message === "success") {
  //     setIsLoading(false);
  //     navigate("/login");
  //   } else {
  //     setIsLoading(false);
  //     setError(data.message);
  //   }
  //   console.log(data);
  // }

  function saveUserDataToLocalStorage() {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storedUsers));
  }




  function submitRegisterForm(e) {
    e.preventDefault();
    setIsLoading(true);
    // sendingRegisterDataToApi();
  let validation =validateRegisterForm();
  if(validation.error)
    {
setIsLoading(false);
setErrorList(validation.error.details)
    }
    else
    {
          // sendingRegisterDataToApi();
          saveUserDataToLocalStorage();
          setIsLoading(false);
          navigate("/login");

    }
}

function validateRegisterForm()
{
let scheme=Joi.object({
  first_name:Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
  last_name:Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
  age:Joi.number().min(16).max(80).required(),
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
  <title>Register</title>
  <link rel="shortcut icon" href="../../../public/images.png" type="image/x-icon" />

</Helmet>
    {errorList.map((err,index) =>{ if (err.context.label == 'password') {
      return  <div key={index} className="alert alert-danger my-2" >Password Invalid</div>}

      
      else{
        return <div key={index} className="alert alert-danger my-2" >{err.message}</div>}
})}
     
       {error.length > 0 ? <div className="alert alert-danger my-2">{error}</div> : ''}

<form onSubmit={submitRegisterForm} action="">
                <label htmlFor="first_name">First Name</label>
                <input onChange={getUSerData} type="text" className='form-control my-input my-2' name='first_name' id='first_name' />

                <label htmlFor="last_name">Last Name</label>
                <input onChange={getUSerData} type="text" className='form-control my-input my-2' name='last_name' id='last_name' />

                <label htmlFor="age">Age</label>
                <input onChange={getUSerData} type="number" className='form-control my-input my-2' name='age' id='age' />

                <label htmlFor="email">Email</label>
                <input onChange={getUSerData} type="email" className='form-control my-input my-2' name='email' id='email' />

                <label htmlFor="password">Password</label>
                <input onChange={getUSerData} type="password" className='form-control my-input my-2' name='password' id='password' />
                <button className='btn btn-info'>
                    {isLoading == true ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
                </button>
            </form>
    </>
  );
}