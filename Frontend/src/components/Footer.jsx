import { FaLinkedinIn, FaFacebookF, FaTelegram } from "react-icons/fa6";
import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <div className="mb-0 pb-0 w-full mt-5">
      <div className="flex flex-col md:flex-row md:items-start items-center justify-evenly pt-32 pb-20">
        <div className="flex flex-col items-center md:items-start justify-center gap-2">
          <img src={logo} alt="Logo" className="w-auto h-16 pl-1"/>
          <p className="hidden md:block">Contact number: +251984837758</p>
          <div id="contact links" className="hidden md:flex gap-4">
            <a href="#" className="text-xl text-primary"><FaLinkedinIn/></a>
            <a href="#" className="text-xl text-primary"><FaFacebookF/></a>
            <a href="#" className="text-xl text-primary"><FaTelegram/></a>
          </div>
          <p className="text-gray-800 hidden md:block">© 2025 Gojoye Housing</p>
        </div>
        <hr className="md:hidden border-gray-300 w-full my-2"/>
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-10 gap-5">
          <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="font-bold text-xl">Company</h1>
            <a href="#" className="text-gray-800">Home</a>
            <a href="#" className="text-gray-800">About Us</a>
            <a href="#" className="text-gray-800">Our Team</a>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="font-bold text-xl">Guest</h1>
            <a href="/blog" className="text-gray-800">Blog</a>
            <a href="/faq" className="text-gray-800">FAQ</a>
            <a href="#" className="text-gray-800">Career</a>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="font-bold text-xl">Privacy</h1>
            <a href="#" className="text-gray-800">Terms and Service</a>
            <a href="#" className="text-gray-800">Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 mt-5 md:mt-0">
          <h1 className="font-bold text-xl">Stay up to date</h1>
          <p className="text-gray-800">Subscribe to our newsletter to get the latest updates and offers</p>
          <div id="subscribe" className="flex flex-col items-center md:items-start gap-2">
            <input type="email" placeholder="Email" className="bg-gray-200 w-64 text-primary border border-gray-300 p-1 rounded-lg"/>
            <button className="bg-primary text-white font-semibold p-2 px-5 rounded-r-full rounded-l-full hover:bg-opacity-40">Subscribe</button>
          </div>
        </div>
      </div>
      <p className="hidden bg-primary text-white py-1 text-base md:flex items-center justify-center gap-2">Copyright © 2025 GoJoye. All Rights Reserved.</p>
    </div>
  )
}
export default Footer