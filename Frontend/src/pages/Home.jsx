import { FaSearch, FaCalendar, FaWifi, FaCommentDots } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import home from '../assets/home.jpeg';
import home2 from '../assets/home2.jpeg';
import piazza from '../assets/piazza.jpg';
import bole from '../assets/bole.jpg';
import aratkilo from '../assets/4kilo.jpg';
import mexico from '../assets/mexico.jpg';
import cmc from '../assets/cmc.jpg';
import ayat from '../assets/ayat.jpg';
import home3 from '../assets/home3.png';
import { useState } from "react";

function Home() {
  const [subCity, setSubCity] = useState('');
  const navigateToBooking = () => {
    window.location.href = '/booking';
  };

  return (
    <div> 
      <div className="flex flex-col items-center h-[720px] w-full relative">
        <img src={home} alt="home" className='object-cover w-full h-full'/>
        <div className="flex flex-col items-center justify-center w-11/12 md:w-96 absolute top-1/3 left-5 md:left-10 bg-white bg-opacity-70 p-5 rounded-lg">
          <h1 className='font-semibold text-2xl'><span className='block text-primary text-3xl'>Discover, Rent, Buy</span> Your Future Awaits!</h1>
          <p>Find your perfect home or maximize your rental potential with ease! 
            Renters can explore a diverse range of properties tailored to their needs, 
            while landlords can effortlessly list their homes and connect with qualified tenants. 
            Join us today to simplify your housing journey!
          </p>
        </div>
        <div className="flex items-center justify-center absolute top-[660px] mt-10 border-4 border-primary rounded-r-full rounded-l-full">
          <select onChange={(e) => setSubCity(e.target.value)} className="border-b-[1px] focus:outline-none p-2 w-11/12 md:w-96 border border-gray-300 rounded-l-full">
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
        <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[350px] w-11/12 md:w-3/4 my-20 gap-8 bg-[#F2F0F2] rounded-l-3xl rounded-r-3xl">
          <img src={home2} alt="Home2" className="object-cover h-full w-full md:w-auto"/>
          <div className="flex flex-col items-center md:items-start justify-center gap-2 p-10">
            <h1 className="text-3xl md:text-5xl font-semibold">The future is flexible</h1>
            <p className="text-base">Discover a new way to rent with us! 
              Our platform offers a variety of rental options to suit your lifestyle, 
              from short-term stays to long-term leases. 
              Find the perfect home for your unique needs today!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-20">
        <div className="w-11/12 md:w-3/5 flex flex-col items-center justify-center gap-3">
          <h1 className="text-2xl md:text-4xl font-semibold">It is now a matter of concern for someone regarding the unpleasant burdens.</h1>
          <p className="text-base">Time for adjustments is essential. Accumulating burdens without proper management can lead to complications; 
            it is vital to have a pure and straightforward approach. When everything is in order, 
            living arrangements can be greatly improved.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center gap-2 my-20">
        <div className="flex flex-col items-start justify-center w-11/12 md:w-72 gap-4 p-8 rounded-3xl bg-[#E2F1E8]">
          <p className="text-4xl md:text-6xl"><GiSofa/></p>
          <h1 className="text-2xl font-bold">Flexible living</h1>
          <p className="text-base">Stay as Long or as little as you need with month-to-month</p>
        </div>
        <div className="flex flex-col items-start justify-center w-11/12 md:w-72 gap-4 p-8 rounded-3xl bg-[#E2F1E8]">
          <p className="text-4xl md:text-6xl"><GiSofa/></p>
          <h1 className="text-2xl font-bold">Move-in ready</h1>
          <p className="text-base">Ready to move in with everything you need</p>
        </div>
        <div className="flex flex-col items-start justify-center w-11/12 md:w-72 gap-4 p-8 rounded-3xl bg-[#E2F1E8]">
          <p className="text-4xl md:text-6xl"><FaWifi/></p>
          <h1 className="text-2xl font-bold">High-speed Wi-Fi</h1>
          <p className="text-base">Best in class internet speeds suitable for working from home</p>
        </div>
        <div className="flex flex-col items-start justify-center w-11/12 md:w-72 gap-4 p-8 rounded-3xl bg-[#E2F1E8]">
          <p className="text-4xl md:text-6xl"><FaCommentDots/></p>
          <h1 className="text-2xl font-bold">24/7 support</h1>
          <p className="text-base">On hand team for any issues you have</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 my-20">
        <h1 className="font-bold text-3xl md:text-5xl">Choose your location</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl">Piazza</h1>
            <img src={piazza} alt="piazza" className="object-cover h-[196px] w-[196px] rounded-3xl"/>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl">Bole</h1>
            <img src={bole} alt="bole" className="object-cover h-[196px] w-[196px] rounded-3xl"/>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl">4Kilo</h1>
            <img src={aratkilo} alt="aratkilo" className="object-cover h-[196px] w-[196px] rounded-3xl"/>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl">Mexico</h1>
            <img src={mexico} alt="mexico" className="object-cover h-[196px] w-[196px] rounded-3xl"/>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl">CMC</h1>
            <img src={cmc} alt="cmc" className="object-cover h-[196px] w-[196px] rounded-3xl"/>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl">Ayat</h1>
            <img src={ayat} alt="ayat" className="object-cover h-[196px] w-[196px] rounded-3xl"/>
          </div>
        </div>
        <div className="relative flex items-center justify-center mt-20">
          <img src={home3} alt="Banner Image" className="w-full"/>
          <div className="flex md:flex-col items-start absolute top-1/3 left-5 md:left-10 md:w-2/5 gap-3">
            <h1 className='font-bold text-3xl md:text-5xl text-white'>Free Spaces</h1>
            <p className='text-lg text-white hidden md:block'>Designed to provide outstanding living spaces that meet the needs of flexible renters and discerning buyers.</p>
            <button onClick={navigateToBooking} className="bg-primary text-white p-3 rounded-full mt-4">Start Booking</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 my-20">
          <h1 className="font-bold text-3xl md:text-5xl">What Our Parents Think</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-[#F2F0F2] w-11/12 md:w-80">
              <p className="text-lg">"This platform made finding a rental property so easy and stress-free. Highly recommend!"</p>
              <h2 className="font-bold text-xl">- Ermias</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-[#F2F0F2] w-11/12 md:w-80">
              <p className="text-lg">"Great service and support. I found the perfect home for my family in no time."</p>
              <h2 className="font-bold text-xl">- Samirawit</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-[#F2F0F2] w-11/12 md:w-80">
              <p className="text-lg">"The flexibility and ease of use are unmatched. I couldn't be happier with my experience."</p>
              <h2 className="font-bold text-xl">- Fitsum</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 my-20">
          <h1 className="font-bold text-3xl md:text-5xl">Frequently Asked Questions</h1>
          <div className="flex flex-col items-center justify-center gap-8">
            <details className="flex flex-col items-start justify-center gap-4 p-8 rounded-3xl bg-[#F2F0F2] md:w-11/12 w-80">
              <summary className="font-bold text-xl cursor-pointer">How do I list my property?</summary>
              <p className="text-lg">To list your property, simply sign up for an account, navigate to the "List Property" section, and fill out the required details about your property.</p>
            </details>
            <details className="flex flex-col items-start justify-center gap-4 p-8 rounded-3xl bg-[#F2F0F2] md:w-11/12 w-80">
              <summary className="font-bold text-xl cursor-pointer">What are the fees for listing a property?</summary>
              <p className="text-lg">Listing a property on our platform is free. However, we charge a small commission fee once your property is rented or sold.</p>
            </details>
            <details className="flex flex-col items-start justify-center gap-4 p-8 rounded-3xl bg-[#F2F0F2] md:w-11/12 w-80">
              <summary className="font-bold text-xl cursor-pointer">How can I contact support?</summary>
              <p className="text-lg">You can contact our support team 24/7 through the "Contact Us" section on our website or by calling our support hotline.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home