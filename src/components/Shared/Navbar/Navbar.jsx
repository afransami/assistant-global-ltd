import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
// import logo from "../../../assets/Untitled-2.png";



const Navbar = () => {




//     const NavMenu = (
//     <>
//       <li>
      
//         <Link to="/"><img className="w-12 rounded" src="https://i.ibb.co/Tm3X6wB/Untitled-2.png" alt="" /></Link>
//       </li>
    //   <li>
    //     <Link to="/">Shop</Link>
    //   </li>
    //   <li>
    //     <Link to="/">Product</Link>
    //   </li>
    //   <li>
    //     <Link to="/">Service</Link>
    //   </li>
    //   <li>
    //     <Link to="/">Contact</Link>
    //   </li>
    //   <li>
    //     <Link to="/">Contribution</Link>
    //   </li>
//     </>
//   );
 
return (
    <div className="navbar bg-[#313132] text-[#F3F3F3]">

  <div className="navbar-start">
    <div className="dropdown flex">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>        
        <li><a>Item 3</a></li>
        
      </ul>
    </div>
    
    {/* <a className="btn btn-ghost normal-case text-xl"></a> */}
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/"><img className="w-5 " src="https://i.ibb.co/Tm3X6wB/Untitled-2.png" alt="" /></a></li>
      <li>
        <Link to="/">Shop</Link>
      </li>
      <li>
        <Link to="/">Product</Link>
      </li>
      <li>
        <Link to="/">Service</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
      <li>
        <Link to="/">Contribution</Link>
      </li>
    </ul>
  </div>
  
</div>
  );
};

export default Navbar;
