import React from "react";
import { Link } from "react-router-dom";
import { useDeleteboardMutation, useLazyGettodolistQuery, useLazyGettodosbyidQuery } from "./boardapi";
function Cardtodolist({todos}){
   console.log("toooooo",todos)
  const [deletefn]=useDeleteboardMutation()
     const [lazyfn] =useLazyGettodolistQuery()
 async function deleteobj(){
    console.log(todos.id)
   await  deletefn(todos.id)
   lazyfn().then((r)=>{
      console.log(r)

   })
  }
    return(
      
        <div  className=" card border border-2 m-3 ms-3 w-20 p-3 shadow-lg" style={{background:"#ececec"}}
         >
             <div className="d-flex justify-content-between  card-header bg-primary">
                <b style={{color:"white"}}  > {todos.title?.toUpperCase()}</b> 
                 <i className="bi bi-trash3  text-warning" onClick={()=>deleteobj()}></i>
             </div >
                <div className="card-body">
                <h5 className="card-title m-2" style={{color:"dark"}}>TOTAL:{todos.todolist.length}</h5>
                <div style={{height:'150px',overflow:'auto'}} >
                  {
                     todos.todolist?.map((s)=>{
                        return (
                         
                              <h5 className="border border-1 text-center rounded p-2" style={{background:'white'}}  >{s?.task.toUpperCase()}</h5>
                          

                        )
                     })
                  }
                   </div>
                </div>
            <center> <Link to={`/todos/${todos.id}`} className="btn btn-primary mb-2 " style={{width:'300px'}}>Go to todolists</Link></center>
       </div>
                  
               
    )
}
export default Cardtodolist