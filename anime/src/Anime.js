import React,{useState,useEffect} from 'react'
import { getspecificanime,addtowatchlist } from './api'
import { Link, Redirect, withRouter } from "react-router-dom";
import styled from 'styled-components'

const Anime = ({match}) => {

    const [values,setvalues]=useState({
        d:[],
        loading:true
    }) 



    const loaddata=()=>{
        getspecificanime(match.params.id).then(data=>{
            setvalues({...values,
                d:data,
                loading:false
            })

            console.log(values.d,'anime');
            // console.log(values.d["related"]["Prequel"]);
            // console.log(values.d["related"]["Adaptation"]);
            // console.log(values.d["related"]["Other"]);

        });

    }

    const handleclick=()=>{
        addtowatchlist(values.d['url'],window.$username)

    }

    useEffect(()=>{
        loaddata()
    },[])


    return (
        <div>
                          <Sidediv>
 <div className="container col card">

<span className="pt-5 pl-2 ">{window.$username}</span>
<button className="btn btn-primary">
<i class="fa fa-user" aria-hidden="true"></i><span></span></button>
<div className="pt-4 pl-3">
<StyledI>

    <Link to="/watchlist"><div className="row container pt-4"> <i class="fa fa-id-badge" aria-hidden="true"/><h5>User Watchlist</h5></div></Link>
   <button className="btn btn-success" onClick={handleclick}>Click here to add this to your watch list</button>

    </StyledI>
</div>


    
</div>
</Sidediv>
            <img src={values.d['image_url']}/>
            <h4>title:</h4><p>{values.d["title"]}</p>
            <h4>synopsis:</h4><p>{values.d["synopsis"]}</p>
            <h4>status:</h4><p>{values.d["status"]}</p>
            <h4>trailer_url:</h4><p>{values.d["trailer_url"]}</p>
            {/* <h4>related:</h4><p>{values.d["related"]["Prequel"].map((data,index)=>{
                return (
                <p key={index}>1</p>)
            })}</p>
                         */}
            
        </div>
    )
}


const Sidediv=styled.div`
width:20rem;
height:100%;
position:absolute;
.card{
height:100%;
border-radius:5px;
}
left:0px;
h5{
    color:black;
    font-size:large;
}
i{
    padding-right:15px;
    padding-top:4px;
    
}
button{
    i{
        font-weight:500;
    }
    span{
        font-weight:600;
    }
}
`;

const StyledI=styled.div`
i{
    color:black;
}
`;


export default Anime
