import React, { useState } from "react";
import { useGettodolistQuery } from "./boardapi";
import { Link } from "react-router-dom";
function Donetodos(){ 
         const [y,sety]=useState(false)
         const {isLoading,data}  =  useGettodolistQuery()
         console.log(  'navebar',data)
         function openfn(){
            sety(!y)
            console.log(y)
         }
    return (
     <div  >
        <div style={{height:'300px',border:'1px solid blue',backgroundColor:'greenyellow'}}>
             {
            y?<i class="bi bi-chevron-right border border-light rounded-circle"  onClick={()=>{openfn()}}></i>:<i class="bi bi-chevron-left  border border-light rounded-circle"    onClick={()=>{openfn()}}></i>
            }
            {
                y?<div className="p-3"  >
                {
                !isLoading && data.map((d)=>{
                    return <h5><Link  to={`/todos/${d.id}`} >{d.title}</Link></h5>
                }) 
                }</div>  :''
            }

            </div>
        </div>
        
    )
}
export default Donetodos