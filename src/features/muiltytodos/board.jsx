import React, {  } from "react";
import { useGettodolistQuery } from "./boardapi";
import Cardtodolist from "./cardboardtitles";

function Boardtodos(){
    const {isLoading,data} =useGettodolistQuery()
      console.log("boarddata",data)
    console.log(isLoading,data)
      
           return(
        <div >
         
        <div className="d-flex flex-wrap justify-content-even   "  >
            {
                !isLoading && data?.map((s)=>{
                    return <Cardtodolist todos={s}></Cardtodolist>

                })
            }
           
        </div>
        </div>
    )
}
export default Boardtodos