import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom";
import { allrecmmlist} from './api';


const Recommendation = () => {
    const [upcoming,setupcoming]=useState({
        d:[],
        loading:true
    })

    const loaddata=()=>{

        if(window.$username){
            
        allrecmmlist(window.$username).then(data=>{
            setupcoming({...upcoming,
                d:data,
                loading:false
            })
            console.log(upcoming.d,'recmm');
        })

    }
    }

    useEffect(()=>{

        
        loaddata()
    
    },[])

    return (
        <div>
            <h1>Recommendation</h1>
            {!upcoming.loading==false?(
        <div>Please login to find your recommendation......</div>
    ):(

<div className="wrapper">

{upcoming.d.map((data,index)=>{
    return (
               <div>
        <div className="items1 card1" key={index}>

        <a href={data["url"]} className="pr-5" target="_blank">{data["url"]}</a>
        </div>
        
        </div>

    )

})}

</div>
)}
        </div>
    )
}

export default Recommendation
