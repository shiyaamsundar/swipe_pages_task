export const getalltopanime=()=>{
    return fetch("https://api.jikan.moe/v3/top/anime/1/upcoming",{method:"GET"})
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
    
  }

  export const getallmangaanime=()=>{
    return fetch("https://api.jikan.moe/v3/manga/1/characters",{method:"GET"})
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
    
  }

  export const getspecificanime=(id)=>{
      return fetch(`https://api.jikan.moe/v3/anime/${id}`,{method:"GET"})
      .then(res=>{
          return res.json()
      })
      .catch(err=>console.log(err))

  }

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

console.log(n)

  export const getallamineoftheday=()=>{
    return fetch(`https://api.jikan.moe/v3/schedule/${n}`,{method:"GET"})
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
    
  }





  export const signup=user=>{
    return fetch(`${API}/signup`,{
        method:"post",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },

        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    }).catch(error=>console.log(error))
}


const API='http://localhost:5000/api'

export const login=user=>{
    return fetch(`${API}/signin`,{
        method:"post",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },

        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    }).catch(error=>console.log(error))
}





export const logout=next=>{
    if(typeof window!=="undefined")
    {
        localStorage.removeItem("jwt")

        return fetch(`${API}/signout`,{
            method:"GET"
        })
        .then(res=>console.log("Signout success"))
        .catch(error=>console.log(error))
    }
}



export const authenticate=(data,next)=>{
    if(typeof window!=="undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        next()
    }
}

export const pushtorecmm=(data,email)=>{
    console.log(data,email);
    return fetch(`${API}/addtorecmm`,{
        method:"post",
     

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gener:data ,useremail:email })
    })
    .then(res=>{
        return res.json()
    }).catch(error=>console.log(error))
}



export const addtowatchlist=(data,email)=>{
    console.log(data);
    
    return fetch(`${API}/addtowatchlist`,{
        method:"post",
     

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url:data ,useremail:email })
    })
    .then(res=>{
        return res.json()
    }).catch(error=>console.log(error))
}


export const allwatchlist=(email)=>{
    return fetch(`${API}/watchlist/${email}`,{method:"GET"})
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
    
  }

  export const allrecmmlist=(email)=>{
    
    return fetch(`${API}/recmm/${email}`,{method:"GET"})
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
    
  }
