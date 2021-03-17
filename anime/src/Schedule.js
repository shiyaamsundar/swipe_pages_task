import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom";
import { getallamineoftheday,addtowatchlist } from './api';


const Schedule = () => {
    const [upcoming,setupcoming]=useState({
        day:[],
        loading:true
    })
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";
    
    var n = weekday[d.getDay()];
    

    const loadmanga=()=>{
            
        getallamineoftheday().then(data=>{
            console.log(data[n]);
        
            setupcoming({...upcoming,
                day:data[n],
                loading:false
            })
            console.log(upcoming.day,'day');
        })

       
    }

    useEffect(()=>{

        
        loadmanga()
        



    },[])


    return (
        <div>
            <h1>Schedule for {n} </h1>
{!upcoming.loading==false?(
        <div>loading..</div>
    ):(

<div className="wrapper">

{upcoming.day.map((data,index)=>{
    return (
        <button onDoubleClick={()=>addtowatchlist(data['url'],window.$username)}> <div>
        <div className="items1 card1" key={index}>
            <img src={data["image_url"]}/>

        </div>
        
        
        </div></button>

    )

})}

</div>
)}

            
        </div>
    )
}

export default Schedule
