import { FaSearch, FaCalendar, FaWifi, FaCommentDots } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import home from '../assets/home.jpeg';
import home2 from '../assets/home2.jpeg';
import { useState } from "react";
function Home() {
  const [subCity, setSubCity] = useState('');
  return (
    <div> 
      <div className="flex flex-col items-center h-[720px] w-full relative">
        <img src={home} alt="home" className='object-cover w-full h-full'/>
        <div className="flex flex-col items-center justify-center w-96 absolute top-1/3 left-10 bg-white bg-opacity-70 p-5 rounded-lg">
          <h1 className='font-semibold text-2xl'><span className='block text-primary text-3xl'>Discover, Rent, Buy</span> Your Future Awaits!</h1>
          <p>Find your perfect home or maximize your rental potential with ease! 
            Renters can explore a diverse range of properties tailored to their needs, 
            while landlords can effortlessly list their homes and connect with qualified tenants. 
            Join us today to simplify your housing journey!
          </p>
        </div>
        <div className="flex items-center justify-center absolute top-[660px] mt-10 border-4 border-primary rounded-r-full rounded-l-full">
          <select onChange={(e) => setSubCity(e.target.value)} className="border-b-[1px] focus:outline-none p-2 w-96 border border-gray-300 rounded-l-full">
            <option value="">Select subcity</option>
            <option value="Addis Ketema">Addis Ketema</option>
            <option value="Akaki Kaliti">Akaki Kaliti</option>
            <option value="Arada">Arada</option>
            <option value="Bole">Bole</option>
            <option value="Gullele">Gullele</option>
            <option value="Kirkos">Kirkos</option>
            <option value="Kolfe">Kolfe</option>
            <option value="Keranio">Keranio</option>
            <option value="Ledeta">Ledeta</option>
            <option value="Nifas Silk Lafto">Nifas Silk Lafto</option>
            <option value="Yeka">Yeka</option>
            <option value="Lemi Kura">Lemi Kura</option>
          </select>
          <button className="bg-primary text-white p-3 rounded-r-full"><FaSearch/></button>
        </div>
      </div>
      <div className="flex items-center justify-center my-20">
        <div className="flex items-center justify-center h-[350px] w-3/4 my-20 gap-8 bg-[#F2F0F2] rounded-l-3xl rounded-r-3xl">
          <img src={home2} alt="Home2" className="object-cover h-full"/>
          <div className="flex flex-col itm-center justify-center gap-2 p-10">
            <h1 className="text-5xl font-semibold">The future is flexible</h1>
            <p className="text-base">Discover a new way to rent with us! 
              Our platform offers a variety of rental options to suit your lifestyle, 
              from short-term stays to long-term leases. 
              Find the perfect home for your unique needs today!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-20">
      <div className="w-3/5 flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-semibold">It is now a matter of concern for someone regarding the unpleasant burdens.</h1>
        <p className="text-base">Time for adjustments is essential. Accumulating burdens without proper management can lead to complications; 
          it is vital to have a pure and straightforward approach. When everything is in order, 
          living arrangements can be greatly improved.
        </p>
      </div>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center gap-2 my-20">
       <div className="flex flex-col items-start justify-center w-72 gap-4 p-8 rounded-3xl bg-[#E2F1E8]">
          <p className="text-4xl md:text-6xl"><GiSofa/></p>
          <h1 className="text-2xl font-bold">Flexible living</h1>
          <p className="text-base">Stay as Long or as little as you need with month-to-month</p>
        </div>
        <div className="flex flex-col items-start justify-center w-72 gap-4 p-8 rounded-3xl bg-[#E2F1E8]">
          <p className="text-4xl md:text-6xl"><GiSofa/></p>
          <h1 className="text-2xl font-bold">Move-in ready</h1>
          <p className="text-base">Ready to move in with everything you need</p>
        </div>
        <div className="flex flex-col items-start justify-center w-72 gap-4 p-8 rounded-3xl bg-[#E2F1E8]">
          <p className="text-4xl md:text-6xl"><FaWifi/></p>
          <h1 className="text-2xl font-bold">High-speed Wi-Fi</h1>
          <p className="text-base">Best in class internet speeds suitable for working from home</p>
        </div>
        <div className="flex flex-col items-start justify-center w-72 gap-4 p-8 rounded-3xl bg-[#E2F1E8]">
          <p className="text-4xl md:text-6xl"><FaCommentDots/></p>
          <h1 className="text-2xl font-bold">24/7 support</h1>
          <p className="text-base">On hand team for any issues you have</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center gap-2 my-20">
        <h1 className="font-bold text-3xl md:text-5xl">Choose your location</h1>
        <div className=""></div>
      </div>
    </div>
  )
}
export default Home