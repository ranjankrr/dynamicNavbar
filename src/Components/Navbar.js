import {useState,useEffect} from 'react';
import { NavLink } from "react-router-dom";

const Navbar =()=>{

  const [getdata, setGetdata] =useState([])
   const getData =async()=>{
       const res =await fetch("http://localhost:5001/NavBar");
       const actualData =await res.json();
       console.log(actualData)
       setGetdata(actualData)
   }
   useEffect(()=>{
    getData()
   },[])

    return(
      <div className="container">
      <nav className="navbar navbar-expand-lg bg-success mt-4">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-light" aria-current="page" to='/'>Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link text-light" to='/about'>About</NavLink>
              </li>
                 {
                  getdata.map((menu)=>{
                    return(
                      <li className="nav-item dropdown">
                      <NavLink className="nav-link dropdown-toggle text-light"role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {menu.navbar}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item bg-light text-dark" to="/html">{menu.dropMenu1}</NavLink></li>
                        <li><NavLink className="dropdown-item bg-light text-dark ">{menu.dropMenu2}</NavLink></li>
                        <li><NavLink className="dropdown-item bg-light text-dark ">{menu.dropMenu3}</NavLink></li>
                        <div>
                          <li className='nav-item dropdown'>
                          
                          <NavLink className="nav-link dropdown-toggle text-dark"role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           {menu.dropMenu4}
                           </NavLink>
                             <ul className='dropdown-menu'>
                                 <li><NavLink className="dropdown-item bg-light text-dark ">{menu.language.items1}</NavLink></li>
                                 <li><NavLink className="dropdown-item bg-light text-dark ">{menu.language.items2}</NavLink></li>
                                 <li><NavLink className="dropdown-item bg-light text-dark ">{menu.language.items3}</NavLink></li>
                             </ul>
                             
                          </li>
                          </div> 
                      </ul>
                    </li>
                    )
                  })
                 }
              </ul>
           </div>
         </nav>
       </div>
    );
  }
export default Navbar;