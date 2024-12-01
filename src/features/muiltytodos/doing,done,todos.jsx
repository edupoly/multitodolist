import React, { useState } from "react";
import { useAddnewtodosMutation, useDeletetaskMutation,useLazyGettodosbyidQuery, useUpdatatodolistMutation } from "./boardapi";

function Statestodos({tododata,type}){
       const [updatadragfn] =  useAddnewtodosMutation()
    const [deletetodofn]=useDeletetaskMutation()
    const [updatefn]=useUpdatatodolistMutation()
    const [index,setindex]=useState('')
    const [todolistid,settid]=useState('')

    
     async function deletetod(i){
        
        const tmp = [...tododata.todolist]
         tmp.splice(i,1)
        deletetodofn({...tododata,todolist:tmp})
          }
         function handleDragStart(ev,tid){
          ev.dataTransfer.setData("xyz", JSON.stringify({ title:ev.target.id,teeid:tid}))
          console.log(tid)
        }
        function handleDrop(ev){
          var {title,teeid} = JSON.parse(ev.dataTransfer.getData("xyz"))
           console.log(title,teeid)
        
          if(ev.target.tagName == "LI" ){
             ev.target.parentElement.appendChild(document.getElementById(title))
          }else
          {
         ev.target.appendChild(document.getElementById(title))
          }
          
         const tmp=JSON.parse(JSON.stringify(tododata))
         var todss= tmp.todolist.map((d)=>{
          if(d.id==teeid){
             d.stats=type
          }
          return d
         })
         tmp.todolist=todss
         updatadragfn(tmp)
          }
          function edit(p,t){
            document.getElementById("d2").value=p
            //   setindex(i)
              settid(t)
      
           }
          console.log(todolistid)
        async  function updatetodo(){
          const tmp=JSON.parse(JSON.stringify(tododata))
         //  tmp.todolist.splice(index,1,{task:document.getElementById('d2').value,stats:type,id:tid})
          const todos=tmp.todolist.map((j)=>{
            if(j.id==todolistid){
               console.log(todolistid)
               j.task=document.getElementById('d2').value
            }
            return j
           })
           console.log(todos)
           tmp.todolist=todos
          await  updatefn(tmp)
    
            
          }
       
        return(
          
        <div className="m-2 p-2  ">
         
         <div className="card " style={{width: "18rem"}}>
         <div className="card-header bg-primary text-white">
           Status : {type.toUpperCase()}
        </div>
        
        <ul className="list-group list-group-flush  border border-2 h-100 "  style={{background:'#ececec'}}  onDragOver={(ev)=>{ev.preventDefault()}} onDrop={(ev)=>{handleDrop(ev)}}>
        {
             tododata?.todolist.map((r,i)=>{
                if(r.stats !== type ){
                    return null
                } 
                else{
             return <li className="list-group-item m-2 p-2 d-flex shadow rounded text-dark justify-content-between" id={`${r.task}${i}`} draggable="true" onDragStart={(ev)=>handleDragStart(ev,r.id)} >{r.task.toUpperCase()} 
                     <div ><i  className="bi bi-trash3 text-warning " onClick={()=>deletetod(i)}  ></i>
                           <i className="bi bi-pencil-square " data-bs-toggle="modal" data-bs-target="#exampleModal22" onClick={()=>{edit(r.task,r.id)}} ></i>
                           <div class="modal fade" id="exampleModal22" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div class="modal-dialog">
                             <div class="modal-content">
                               <div class="modal-header">
                                 <h1 class="modal-title fs-5" id= "exampleModalLabel22" >Modal title</h1>
                                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                               </div>
                               <div class="modal-body">
                                 <input type="text"  id="d2" className="w-100" />
                               </div>
                               <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                 <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{updatetodo()}}>Save changes</button>
                               </div>
                             </div>
                           </div>
                           </div>

                     </div>

                </li>
                
               }
            })
        }
         </ul>
        
        </div>
        </div>
        


    )
                
                
}
export default Statestodos





