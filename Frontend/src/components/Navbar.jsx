import { NavLink, useNavigate } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { MdAccountCircle } from "react-icons/md";
import logo from "../assets/logo.jpeg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/authSlice';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { isLoggedIn, username, userType } = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
    userType: state.auth.userType,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-50 shadow-sm ">
        {isVisible && (
          <div className="flex items-center justify-evenly py-2 bg-primary pl-10">
            <p className="hidden md:block text-sm text-[#FAFAFA]">
              Gena Specials: 🎉 Enjoy Exclusive Discounts and Flexible Pricing Options! Don't Miss Out
              <a href="#" className="font-semibold underline ml-2">Explore Now!</a>
            </p>
            <select className="bg-primary text-[#FAFAFA] ml-10">
              <option value="English">English</option>
              <option value="Amharic">Amharic</option>
            </select>
          </div>
        )}
        <div className="flex items-center justify-between py-2 px-10 bg-white">
          <div id='Logo' className="flex items-center justify-center">
            <NavLink to='/'><img src={logo} alt="Logo" className="w-auto h-12" /></NavLink>
          </div>
          <div className="md:flex md:items-center gap-10">
            <div className="hidden md:flex md:items-center gap-3">
              <NavLink to='/' className="mx-2 active:font-semibold hover:text-gray-500">Home</NavLink>
              <NavLink to='/blog' className="mx-2 active:font-semibold hover:text-gray-500">Blog</NavLink>
              {isLoggedIn && userType === 'admin' && (
                <>
                  <NavLink to='/admin/dashboard' className="mx-2 active:font-semibold hover:text-gray-500">Admin Dashboard</NavLink>
                  <NavLink to='/admin/manage-blogs' className="mx-2 active:font-semibold hover:text-gray-500">Manage Blogs</NavLink>
                </>
              )}
              {isLoggedIn && userType === 'renter' && (
                <NavLink to='/property' className="mx-2 active:font-semibold hover:text-gray-500">Find a Home</NavLink>
              )}
              {isLoggedIn && userType === 'landlord' && (
                <NavLink to='/property' className="mx-2 active:font-semibold hover:text-gray-500">Properties</NavLink>
              )}
              {isLoggedIn && (
                <NavLink to='/contacts' className="mx-2 active:font-semibold hover:text-gray-500">Contacts</NavLink>
              )}
            </div>
            <div className="hidden sm:flex items-center justify-evenly gap-3">
              {isLoggedIn ? (
                <div className="relative inline-block">
                  <button className="text-blue-600 font-medium flex items-center" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    {username}
                    <p className="bg-yellow-200 text-orange-500 text-xs p-0.5 rounded">{userType}</p>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                      <NavLink to='/profile' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</NavLink>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <NavLink to='/login' className="bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white font-medium p-1 rounded">Login</NavLink>
                  <NavLink to='/signup' className="bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white font-medium p-1 rounded">Sign Up</NavLink>
                </>
              )}
            </div>
            <button className="md:hidden text-3xl" onClick={() => { setIsOpen(!isOpen) }}>
              <VscThreeBars />
            </button>
            {isOpen && (
              <div className="absolute top-24 right-0 flex flex-col items-center justify-center w-4/5 text-2xl py-4 gap-5 rounded-md border shadow-xl bg-white">
                <NavLink to='/' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Home</NavLink>
                <NavLink to='/blog' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Blog</NavLink>
                {isLoggedIn && userType === 'Admin' && (
                  <>
                    <NavLink to='/admin/dashboard' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Admin Dashboard</NavLink>
                    <NavLink to='/admin/manage-blogs' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Manage Blogs</NavLink>
                  </>
                )}
                {isLoggedIn && userType === 'Renter' && (
                  <>
                    <NavLink to='/landlords' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Landlords</NavLink>
                    <NavLink to='/properties' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Properties</NavLink>
                    <NavLink to='/checkout' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Checkout</NavLink>
                  </>
                )}
                {isLoggedIn && userType === 'Landlord' && (
                  <>
                    <NavLink to='/my-properties' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">My Properties</NavLink>
                    <NavLink to='/add-property' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Add Property</NavLink>
                  </>
                )}
                {isLoggedIn && (
                  <NavLink to='/contacts' className="flex items-center justify-center py-2 w-full active:font-semibold hover:bg-primary hover:bg-opacity-70 hover:text-white duration-150">Contacts</NavLink>
                )}
                <hr className="border-gray-300 w-full" />
                {isLoggedIn ? (<>
                  <button className="text-blue-600 font-medium flex items-center" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    {username}
                    <p className="bg-yellow-200 text-orange-500 text-xs p-0.5 rounded">{userType}</p>
                  </button>
                  <button onClick={handleLogout} className="bg-red-600 hover:bg-red-500 active:bg-red-800 text-white font-medium p-2 rounded">
                    Logout
                  </button>
                  </>
                ) : (
                  <div className="flex gap-2">
                    <NavLink to='/login' className="bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105">Login</NavLink>
                    <NavLink to='/signup' className="bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white font-medium p-2 rounded">Sign Up</NavLink>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  )
}

export default Navbar;