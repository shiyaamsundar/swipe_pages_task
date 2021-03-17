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




export const signout=next=>{
    if(typeof window!=="undefined")
    {
        localStorage.removeItem("jwt")
        next()

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
