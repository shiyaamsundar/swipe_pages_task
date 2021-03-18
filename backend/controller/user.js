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


exports.addtowatchlist=(req,res)=>{
    console.log(req.body['url'],req.body['useremail']);
    const reqemail=req.body['useremail']
    const url=req.body['url']

   const user= User.find({email:reqemail}).exec((err,data)=>{
        if(!err){
            
            data[0]['watchlist']+=url
            const id=data[0]['_id']
            User.findByIdAndUpdate({"_id":id},
            {"$push":{"watchlist":url}},function(err,raw){
                if(!err){

                }
            })
            
            
        }
    })
}

exports.addtouserrecmm=(req,res)=>{
    console.log("recommed",req.body.useremail);
    const reqemail=req.body.useremail
    const recmmarr=req.body.gener

   const user= User.find({email:reqemail}).exec((err,data)=>{
        let datarecm=data[0]["recommendation"]
        const id=data[0]['_id']
        let arr=[]
        let cnt=0
        let j=0
        let k=datarecm.length+recmmarr.length
            if(recmmarr.length<10)
            {
                for(let i=0;i<recmmarr.length;i++)
                {
                    console.log('aa');
                    arr.push(recmmarr[i])
                    cnt+=1
                }
                console.log(cnt,"cnntttt");
                for(let i=cnt;i<=10;i++)
                {

                    if(datarecm.length>cnt && j<k){
                    arr.push(datarecm[j])
                    j+=1
                    }
                    else{

                        break
                    }

                }

                
            }else{
                for(let i=0;i<10;i++)
                {
                    arr.push(recmmarr[i])
                    cnt+=1
                }

            }

            User.updateMany({_id:id},{$set:{recommendation:arr}}).exec().then(res=>console.log('updated')).catch(err=>console.log(err))


    })

}

exports.getallrecmm=(req,res)=>{
    const reqemail=req.params.email
    User.find({email:reqemail}).exec((err,data)=>{
        
        return res.json(data[0]["recommendation"])
    })
}


exports.getuserwatchlist=(req,res)=>{
    const id=req.params
    console.log(id);

    User.find({email:id['email']}).exec((err,data)=>{
    

        if(!err){
            console.log(data[0]['watchlist']);
            return res.json(data[0]['watchlist'])
        }
    })
    
}


exports.signup=(req,res)=>{
    console.log('signuo');
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





