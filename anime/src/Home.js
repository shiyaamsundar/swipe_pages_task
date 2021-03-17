import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom";
import { getalltopanime,getallmangaanime } from './api';
import Manga from './Manga';


const Home = () => {
 

    const [upcoming,setupcoming]=useState({
        top:[],
        manga:[],
        loading:true
    })
 

        const loaddata=()=>{
                        
           
            getalltopanime().then(data=>{
                setupcoming({...upcoming,
                    top:data['top'],
                    loading:false
                })



                console.log(upcoming.top[0],'top');
            });

            



        }



    useEffect(()=>{

        
        loaddata()
        



    },[])




    return (
        <div>
                        <Sidediv>
 <div className="container col card">

<span className="pt-5 pl-2 "></span>
<button className="btn btn-primary">
<i class="fa fa-user" aria-hidden="true"></i><span></span></button>
<div className="pt-4 pl-3">
<StyledI>

    <Link to="/watchlist"><div className="row container pt-4"> <i class="fa fa-id-badge" aria-hidden="true"/><h5>User Watchlist</h5></div></Link>
   

    </StyledI>
</div>


    
</div>
</Sidediv>
<Maindiv>

    <h1>Upcomig anime</h1>
    {!upcoming.loading==false?(
        <div>loading..</div>
    ):(

<div className="wrapper">

{upcoming.top.map((data,index)=>{
    return (
               <div>
        <div className="items card" key={index}>
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

<div className="c1"></div>
<Manga/>


<div className="container">

</div>
</Maindiv>




        </div>
    )
}
// const Wrapper=styled.div`
// max-height:250px;
// border:1px solid #ddd;
// display:flex;
// overflow-x:aut0;

// /* .scroll{
//     display:flex;
// } */

// .item{

//     max-width:150px;
//     height:120px;
//     line-height:120px;
//     align-items:center;
//     margin-right:50px;

// }
// `;


// const Scrollablecard=styled.div`

// .img{

    
// }
// .card{
//     width:20rem;
//     height:200px;
//     width:200px;
    
// }

// `;


const Maindiv=styled.div`
padding-left:50px;
padding-top:50px;
`;

const Sidediv=styled.div`
width:15rem;
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


export default Home
