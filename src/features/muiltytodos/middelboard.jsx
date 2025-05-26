import { Link, Outlet } from "react-router-dom";
import Slidebar from "./slidebar";
import './style.css'

function Middelboard(){
      
   
    return (
        <div className="mainDiv">
            <div className="bg-secondary d-flex justify-content-between align-items-center px-3 text-light " style={{background: "linear-gradient(135deg, rgb(30, 60, 114) 0%, rgb(42, 82, 152) 100%)"}}>
                <Link to="/" style={{textDecoration:"none"}}>
                    <h1 className="m-0 mb-0 p-2 fw-bold text-light " >ALL BOARDS</h1>
                </Link> 
                <i className="bi bi-list fs-3 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
            </div>
            <div className="m-0 d-flex">
                <div className=" d-none d-lg-flex"  style={{background:'rgb(48 91 159)',width:'220px'}}>
                    <Slidebar ></Slidebar>
                </div>
                <div class="offcanvas offcanvas-start" style={{background:'rgb(48 91 159)',width:'240px'}} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header text-light d-flex justify-content-between">
                        <h4 class="offcanvas-title" id="offcanvasExampleLabel">ALL BOARDS</h4>
                        <i class="bi bi-x-lg fw-bolder" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                    </div>
                    <div class="offcanvas-body">
                        <div className="d-flex d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close">
                            <Slidebar ></Slidebar>
                        </div>
                    </div>
                </div>
                <div className="w-100">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
export default Middelboard