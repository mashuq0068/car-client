import { NavLink } from "react-router-dom";
import logo from "../../../car-doctor-resources/assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";


const Navbar = () => {
  const {signOutUser} = useContext(AuthContext)
  const handleSignOut = () => {
    signOutUser()
    .then(()=>{})
    .catch(error => console.error(error.message))
  }
    const lists = <>
          <ul className="flex gap-5 text-base 2xl:text-xl  lg:gap-8">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to = '/services'>Services</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/checkOutProducts'>CheckOut Products</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink onClick={handleSignOut}>Sign Out</NavLink>

          </ul>
          
    </>
    return (
   <div className="flex">
       
  <div className="navbar-start">
          <div className="navbar bg-base-100">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {lists}
      </ul>
    </div>
  
   
   <div>
   <img src={logo}alt="" />
   
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {lists}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="border border-red-600 px-5 py-2 text-base 2xl:text-xl  hover:bg-white hover:border-red-600 rounded-md cursor-pointer btn  capitalize">Appointment</a>
  </div>
</div>
</div>
       
        
        
    );
};

export default Navbar;