import React, { useState }  from 'react'
import { Link ,Redirect} from "react-router-dom";
import {login,authenticate} from './api';

const Login = () => {


    const [values,setvalues]=useState({
        email:"",
        password:"",
        loading:false,
        didredirect:false,
        error:false
      })
      const {email,password,error,loading,didredirect}=values

      const handleChange = name => event => {
        setvalues({ ...values, error: false, [name]: event.target.value });
      };

      const onsubmit=event=>{
        event.preventDefault()
        setvalues({...values,error:false,loading:true})

        login({email,password})
        .then(
          data=>{
            if(data.error){
              setvalues({...values,error:data.error,loading:false})

            }
            else{
              authenticate(data,()=>{
                setvalues({...values,didredirect:true})

              })
            }
          }
        )
        .catch(console.log("signin failed"))
      }
      const loadingmessage=()=>{
        return(
          loading && (
            <div className="row">
            <div className="alert alert-info">
              <h2>loading...</h2>
            </div></div>
          )
        )
      }

      const performredirect=()=>{
      
        if(didredirect){

          return <Redirect to="/"/>
        
      }
      
    }

      const errormessage=()=>{
        return(
          <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger" style={{display: error?"":"none"}}>
          {error}
        </div></div>)
      }

      const loginForm = () => {
        return (
            <div className="container-fluid">
                <div className="pt-9 bg-white text-black text-center">
        <h2 className="display-4 pt-3">Login Page</h2>
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

                <button className="btn btn-success btn-block" onClick={onsubmit}>Submit</button>
              </form>
          </div>
          </div>
          </div>
    
        );
      };

    return (
        <div>
            {loadingmessage()}
        {errormessage()}
        {loginForm()}
        {performredirect()}
            
        </div>
    )
}

export default Login
