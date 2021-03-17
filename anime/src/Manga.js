import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom";
import { getalltopanime,getallmangaanime } from './api';


const Manga = () => {
    const [upcoming,setupcoming]=useState({
        manga:[],
        loading:true
    })

    const loadmanga=()=>{
            
        getallmangaanime().then(data=>{
            setupcoming({...upcoming,
                manga:data['characters'],
                loading:false
            })
            console.log(upcoming.manga[0],'manga');
        })

       
    }

    useEffect(()=>{

        
        loadmanga()
        



    },[])

    return (
        <div>
            <h1>Manga</h1>
{!upcoming.loading==false?(
        <div>loading..</div>
    ):(

<div className="wrapper">

{upcoming.manga.map((data,index)=>{
    return (
               <div>
        <div className="items1 card1" key={index}>
        <a target="_blank" href={data["url"]}>   
            <img src={data["image_url"]}/>
            </a>
        </div>
        {/* <div>
        <p className="cardname">{data["title"]}</p>
        </div> */}
        
        </div>

    )

})}

</div>
)}

            
        </div>
    )
}

export default Manga
