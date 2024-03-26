import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom"
import "./trailer.css"

const Trailer = () =>{
    let params = useParams();
    let key = params.ytTrailerId;
    console.log(`https://www.youtube.com/watch?v=${key}`)
    return(
        <div className="react-player-container">
            {(key)!= null? <ReactPlayer controls={true} playing={true} url={`https://www.youtube.com/watch?v=${key}`} width='100%' height='100%'/>:null}
        </div>
    )
}
export default Trailer