import { NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import logo from "../assets/logo.jpeg";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <div className="shadow-sm ">
        <div className="flex items-center justify-evenly py-2 bg-primary pl-10">
          <p className="hidden md:block text-sm text-[#FAFAFA]">Gena Specials:🎉 Enjoy Exclusive Discounts and Flexible Pricing Options! Don't Miss Out<a href="#" className="font-semibold underline ml-2">Explore Now!</a></p>
          <select className="bg-primary text-[#FAFAFA] ml-10">
            <option value="English">English</option>
            <option value="Amharic">Amharic</option>
          </select>
        </div>
        <div className="flex items-center justify-between py-3 px-10">
          <div id='Logo' className="flex items-center justify-center">
            <NavLink to='/'><img src={logo} alt="Logo" className="w-auto h-16"/></NavLink>
          </div>
          <div className="md:flex md:items-center gap-10">
            <div className="hidden md:flex md:items-center gap-3">
              <NavLink to='/' className="mx-2 active:font-semibold hover:text-gray-500">Home</NavLink>
              <NavLink to='/blog' className="mx-2 active:font-semibold hover:text-gray-500">Blog</NavLink>
              <NavLink to='/landlords' className="mx-2 active:font-semibold hover:text-gray-500">Landlords</NavLink>
              <NavLink to='/contacts' className="mx-2 active:font-semibold hover:text-gray-500">Contacts</NavLink>
            </div>
            <div className="hidden sm:flex items-center justify-evenly gap-3">
              <NavLink to='/login' className="bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white font-medium p-1 rounded">Login</NavLink>
              <NavLink to='/signup' className="bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white font-medium p-1 rounded">Sign Up</NavLink>
            </div>
            <button className="md:hidden text-3xl" onClick={()=>{setIsOpen(!isOpen)}}><VscThreeBars/></button>
            {isOpen && (
              <div className="absolute top-32 right-0 flex flex-col items-center justify-center w-4/5 text-2xl py-4 gap-5 rounded-md border shadow-xl ">
                <NavLink to='/' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Home</NavLink>
                <NavLink to='/blog' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Blog</NavLink>
                <NavLink to='/landlords' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Landlords</NavLink>
                <NavLink to='/contacts' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Contacts</NavLink>
                <hr className="border-gray-300 w-full"/>
                <div className="flex gap-2">
                  <NavLink to='/login' className="bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105">Login</NavLink>
                  <NavLink to='/signup' className="bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white font-medium p-2 rounded">Sign Up</NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar