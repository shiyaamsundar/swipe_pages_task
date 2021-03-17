import React, { useState }  from 'react'
import { Link ,Redirect} from "react-router-dom";
import {signup} from './api';

const Signup = () => {


    const [values,setvalues]=useState({
        email:"",
        password:"",
        name:"",
        error:false,
        success:false
      })
      const {email,password,error,didredirect,name}=values

      const onSubmit=event=>{
        event.preventDefault()
        setvalues({...values,error:false})
        signup({name,email,password}).
        then(data=>{
          if(data.error){
            setvalues({...values,error:data.error,success:false})
          }
          else{
            setvalues({
              ...values,
              name:"",
              email:"",
              password:"",
              error:"",
              success:true
            })
          }
        })
        .catch(console.log("Error in signup"))
      }

      const handleChange = name => event => {
        setvalues({ ...values, error: false, [name]: event.target.value });
      };

      const successmessage=()=>{
        return(
          <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-success" style={{display: values.success?"":"none"}}>
          New Account has been created Successfully.  <Link to="/signin">Click here</Link> to Singin
        </div>
        </div>
        )
      };
      
      const errormessage=()=>{
        return(
          <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger" style={{display: error?"":"none"}}>
          {error}
        </div></div>)
      }

      const signupForm = () => {
        return (
            <div className="container-fluid">
                <div className="pt-9 bg-white text-black text-center">
        <h2 className="display-4 pt-3">Signup Page</h2>
      </div>
          <div className="row pt-5">
            <div className="col-md-6 offset-sm-3 text-left">
              <form>
                <div className="form-group">
                  <label className="text-dark">Email</label>
                  <input className="form-control" type="email" value={email} onChange={handleChange('email')} />
                </div>
    
                <div className="form-group ">
                  <label className="text-dark">Password</label>
                  <input className="form-control" type="password" value={password} onChange={handleChange('password')} />
                </div>
                <div className="form-group">
                  <label className="text-dark">User Name</label>
                  <input className="form-control" type="text" value={name} onChange={handleChange('name')} />
                </div>
                <button className="btn btn-success btn-block" onClick={onsubmit}>Submit</button>
              </form>
          </div>
          </div>
          </div>
    
        );
      };

    return (
        <div>
           {successmessage()}  
        {errormessage()}
        {signupForm()}
            
        </div>
    )
}

export default Signup
