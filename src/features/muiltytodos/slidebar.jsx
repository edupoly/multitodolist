import React, { useRef, useState } from "react";
import { useCreateboardMutation,  useGettodolistQuery,  useLazyGettodolistQuery } from "./boardapi";
import { Link } from "react-router-dom";

function Slidebar(){
     const [change,setchange]  = useState()
     const {isLoading,data} = useGettodolistQuery()
     console.log(data)
    const [createfn]=useCreateboardMutation()
    const iref= useRef()
    const [lazyfn]=useLazyGettodolistQuery()
    async function createboard(){
         await  createfn({title:iref.current.value,todolist:[]})
         iref.current.value=''
         lazyfn()
       }
       function colorchange(p){
        setchange(p)
        lazyfn()
        console.log(p)
             
       }
    return(
        <div >
            <div className="m-2">
          <button type="button" className="btn btn-light  " style={{height:'50px',width:'200px'}} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
               ADD TO BOARD  <i className="bi bi-plus-circle " style={{fontSize:'20px'}}></i></button>

            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
             <h1 className="modal-title fs-5" id="exampleModalLabel">Creat New Board</h1>
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
             <div className="modal-body">
             <form>
            <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">TITLE:</label>
            <input type="text" className="form-control" id="recipient-name" ref={iref}   />
             </div>
             
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={()=>createboard()}>Craete board</button>
        </div>
         </div>
        </div>
          </div>
          {
            !isLoading && data?.map((f,i)=>{
                return (
                   <Link key={i} className="shadow" style={{textDecoration:"none",fontSize:'20px',color:'white',  }}   to={`/todos/${f.id}`}>
                  <ul className=" m-2 rounded" style={{background:change==f.id ?'blue':''}} onClick={()=>{colorchange(f.id)}} >{f.title.toUpperCase()}</ul></Link> 
                )
            })
          }
        </div>
       
    )
}

export default Slidebar