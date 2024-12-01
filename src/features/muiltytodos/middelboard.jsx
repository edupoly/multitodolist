import { Link, Outlet } from "react-router-dom";
import Slidebar from "./slidebar";
function Middelboard(){
      
   
    return (
        <div>
         <Link to="/" style={{textDecoration:"none"}}> <h1 className="m-5 mb-0 " style={{backgroundColor:'#9fd3c7'}}>ALL BOARDS</h1></Link> 
        <div className="m-5  d-flex  justify-content-between  mt-0">
         <div className="   vh-100  border border-danger"  style={{width:'20%',background:'#497285'}}>
         <Slidebar ></Slidebar>
         </div>
         <div className="border border-primary  " style={{width:'80%',background:" radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0.1%, rgb(252, 251, 121) 90%)"}} >
            <Outlet></Outlet>
        
         </div>
        </div>
        </div>
    )
}
export default Middelboard