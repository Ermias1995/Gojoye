import { IoCall } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
function Contact() {
  return (
    <div className="my-28">
        <h2 className="text-2xl font-bold ml-5 mb-4 text-primary">Contact us</h2>
        <div className="flex flex-col justify-center md:flex-row gap-5 md:px-[135px] py-10">
            <div className="flex flex-col gap-1 py-12 px-4 rounded shadow-md w-11/12">

                <h1 className="text-base flex items-center gap-3"><IoCall className="bg-primary rounded-full text-white p-2 text-3xl"/>Call To Us</h1>
                <p className="text-sm">We are available 24/7, 7 days a week.</p>
                <p className="text-sm">Phone: +251984837758</p>
                <hr className="my-4"/>
                <h1 className="text-base flex items-center gap-3"><IoMdText className="bg-primary rounded-full text-white p-2 text-3xl"/>Write To Us</h1>
                <p className="text-sm">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-sm">Emails: customer@gojoye.com</p>
                <p className="text-sm">Emails: support@gojoye.com</p>
            </div>
            <div className="flex flex-col gap-6 rounded shadow-md p-4 py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <input type="text" placeholder="Your Name" className="bg-textColor p-2"/>
                    <input type="email" placeholder="Your Email" className="bg-textColor p-2"/>
                    <input type="phone" placeholder="Your Phone" className="bg-textColor p-2"/>
                </div>
                <textarea className="h-[207px] w-[737px] bg-textColor p-4" placeholder="Your Message"></textarea>
                <button className="bg-red-500 hover:bg-red-400 py-2 px-6 w-56 text-white rounded flex items-center justify-center">Send Message</button>
            </div>
        </div>
    </div>
  )
}
export default Contact