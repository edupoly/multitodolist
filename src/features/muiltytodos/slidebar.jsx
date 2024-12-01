import React, { useRef, useState } from "react";
import { useCreateboardMutation,  useGettodolistQuery,  useLazyGettodolistQuery } from "./boardapi";
import { Link } from "react-router-dom";

function Slidebar(){
                 const [change,setchange]  = useState(true)
            const {isLoading,data} = useGettodolistQuery()
            console.log(data)
    const [createfn]=useCreateboardMutation()
    const iref= useRef()
    const [lazyfn]=useLazyGettodolistQuery()
    async function createboard(){
         await  createfn({title:iref.current.value,todolist:[]})
            lazyfn()
       }
       function colorchange(p){
        setchange(p)
             
       }
    return(
        <div  >
            <div className="m-2">
          <button type="button" class="btn btn-light  " style={{height:'50px',width:'200px'}} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
               ADD TO BOARD  <i class="bi bi-plus-circle " style={{fontSize:'20px'}}></i></button>

            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
             <h1 class="modal-title fs-5" id="exampleModalLabel">Creat New Board</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
             <div class="modal-body">
             <form>
            <div class="mb-3">
            <label for="recipient-name" class="col-form-label">TITLE:</label>
            <input type="text" class="form-control" id="recipient-name" ref={iref}   />
             </div>
             
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onClick={()=>createboard()}>Craete board</button>
        </div>
         </div>
        </div>
          </div>
          {
            !isLoading && data?.map((f)=>{
                return (
                   <Link class="shadow" style={{textDecoration:"none",fontSize:'20px',color:'white',  }}   to={`/todos/${f.id}`}>
                    <ul className=" m-2 rounded" style={{background:change==f.id ?'blue':''}} onClick={()=>{colorchange(f.id)}} >{f.title.toUpperCase()}</ul></Link> 
                )
            })
          }
        </div>
       
    )
}

export default Slidebar