import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Sidediv>
 <div className="container col card">

<span className="pt-5 pl-2 "></span>
<button className="btn btn-primary">
<i class="fa fa-user" aria-hidden="true"></i>hello<span></span></button>
<div className="pt-4 pl-3">
<StyledI>

    <Link to="/watchlist"><div className="row container pt-4"> <i class="fa fa-id-badge" aria-hidden="true"/><h5>User Wishlist</h5></div></Link>
   

    </StyledI>
</div>


    
</div>
</Sidediv>
        </div>
    )
}

const Sidediv=styled.div`
width:15rem;
height:100%;
position:absolute;
.card{
height:100%;
}
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


export default Dashboard
