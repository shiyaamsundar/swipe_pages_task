import React,{useState,useEffect} from 'react'
import { allwatchlist } from './api'


const Watchlist = () => {

    
        const [values,setvalues]=useState({
            list:[],
            loading:true
        })

        const loaddata=()=>{
            allwatchlist(window.$username).then(data=>{
                
                setvalues({...values,
                    list:data,
                    loading:false
                })
                console.log(values.list);
            })

        }

        useEffect(()=>{
            loaddata()
            
        },[])
    return (
        <div>
            <div className="row">

                <div className="col-4 mb-3 cardcol">
                    <div >
                        {!values.loading==false?(
                            <div>loading</div>
                        ):(
                            <div>
                                {values.list.map((data,index)=>{
                            return (
                                <p key={index}>{data}</p>

                                    )
                                })}
                            </div>
                        )}
                    </div>
                    
                </div>
                

            
            </div>



            
        </div>
    )
}

export default Watchlist
