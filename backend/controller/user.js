const express = require('express')
const router = express.Router()
const jwt=require('jsonwebtoken')
const expressjwt=require('express-jwt')
const User = require('../model/user')
require('dotenv').config()


exports.signout=(req,res)=>{
    res.clearCookie("token")
    res.json({
        message:"User signout successfully"
    })
}



exports.signup=(req,res)=>{
    const user=new User(req.body)
    user.save((err,user)=>{

        if(err){
            return res.status(400).json({
                err:"Not able to save user in db"
            })
        }
        res.json({
            name:user.name,
            email:user.email,
            id:user._id})
    })
}

exports.signin=(req,res)=>{
    const {email,password}=req.body

    User.findOne({email},(err,user)=>{

        if(err || !user){
           return res.status(400).json({
                error:"User doesnt exist"
            })
        }
        if(user.password!=password){
            return res.status(401).json({
                error:"Email and password dosent match"
            })
        }

        const token=jwt.sign({_id:user._id},process.env.SECRET)

        res.cookie("token",token,{expire:new Date()+99})

        const {_id,name,email}=user
        return res.json({token,user:{
            id:_id,
            name:name,
            email:email
        }})

    })
}



