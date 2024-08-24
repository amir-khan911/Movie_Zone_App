import React, { useState } from 'react'

 
import { movies } from './data'
const Movies = () => {
  const [film,setFilm] = useState(movies);
  const fillterByCatagory = (cat)=>{
     setFilm(movies.filter((data)=>data.category == cat))
  }
  return (
   <>
  
<div className='my-3 mx-auto' style={{width:"1000px",margin:"auto"}}>
  <div className='mx-auto text-center'>

<button onClick={()=>setFilm(movies)} type="button" className="btn btn-outline-primary mx-3">All</button>
<button onClick={()=>fillterByCatagory("Action")} type="button" className="btn btn-outline-primary mx-3">Action</button>
<button onClick={()=>fillterByCatagory("Thriller")} type="button" className="btn btn-outline-success mx-3">Thriller</button>
<button onClick={()=>fillterByCatagory("Animation")} type="button" className="btn btn-outline-info mx-3">Animation</button>
<button onClick={()=>fillterByCatagory("Horror")} type="button" className="btn btn-outline-warning mx-3">Horror</button>
<button onClick={()=>fillterByCatagory("Drama")} type="button" className="btn btn-outline-info mx-3">Drama</button>
<button onClick={()=>fillterByCatagory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3">Sci-Fi</button>

  </div>
   </div>
  
   <div style={{display:"flex",
     justifyContent:"center",
     alignItems:"center",
    flexWrap:"wrap",
    // gap:"2rem",
    textAlign:"center",
    width:"1300px",
    margin:"auto",
    marginTop:"2.7rem"
   }}>
    {film.map((data)=>(
      <div key={data.id} style={{
         maxWidth:"280px",
         textAlign:"center"

      }}>
       <div style={{padding:"10px"}} className='hover_effect'>
        <img src={data.poster_path} alt="" style={{width:"200px",height:"280px",borderRadius:"10px",border:"1px solid yellow"}}/>
       </div>
       <h5>{data.title}</h5>
       <p>{data.release_date}</p>
      </div>
    ))}
   </div>
    
   </>
  )
}

export default Movies
