import { NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import logo from "../assets/logo.jpeg";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const scrollListener = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-50 shadow-sm ">
        {isVisible && <div className="flex items-center justify-evenly py-2 bg-primary pl-10">
          <p className="hidden md:block text-sm text-[#FAFAFA]">Gena Specials:🎉 Enjoy Exclusive Discounts and Flexible Pricing Options! Don't Miss Out<a href="#" className="font-semibold underline ml-2">Explore Now!</a></p>
          <select className="bg-primary text-[#FAFAFA] ml-10">
            <option value="English">English</option>
            <option value="Amharic">Amharic</option>
          </select>
        </div>}
        <div className="flex items-center justify-between py-2 px-10 bg-white">
          <div id='Logo' className="flex items-center justify-center">
            <NavLink to='/'><img src={logo} alt="Logo" className="w-auto h-12"/></NavLink>
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
              <div className="absolute top-32 right-0 flex flex-col items-center justify-center w-4/5 text-2xl py-4 gap-5 rounded-md border shadow-xl bg-white">
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
      <div className="h-40"></div>
    </div>
  )
}
export default Navbar