import { NavLink } from 'react-router-dom';
import google from '../assets/google.png';
import signup from '../assets/signup.jpeg';
import { useState } from 'react';
import axios from 'axios';

function Signup() {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState(''); // Optional
  const [securityAnswer, setSecurityAnswer] = useState(''); // Optional
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) =>{
    e.preventDefault();

    setLoading(true);
    setError(null);

    try{
      const res = await axios.post('http://localhost:3000/auth/register', {
        username,
        email,
        password,
        userType,
        securityQuestion,
        securityAnswer, 
      });
      console.log(res);
    }catch(error){
      console.log(error);
      setError(error.res ? error.res.data.message : 'Signup failed');
    }finally{
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex justify-center gap-4 items-center my-4">
      <div className="bg-[#CBE4E8]">
        <img src={signup} alt="Signup Page" className='hidden md:block w-[750px]'/>
      </div>
      <div className="flex flex-col justify-center md:justify-start gap-12 w-[370px]">
        <div className="flex flex-col justify-center md:justify-start gap-3">
          <h1 className="text-4xl">Create an account</h1>
          <p className="text-base">Enter your detail below</p>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <form className="flex flex-col justify-center md:justify-start gap-10" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none" required/>
          <input type="email" placeholder="Enter Email or Phone Number" onChange={(e)=>setEmail(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none" required/>
          <input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none" required/>
          <select onChange={(e) => setUserType(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none" required>
            <option value="">Select User Type</option>
            <option value="renter">Renter/Buyer</option>
            <option value="landlord">Landlord</option>
            <option value="admin">Admin</option>
          </select>
          <input
              type="text"
              placeholder="Security Question"
              onChange={(e) => setSecurityQuestion(e.target.value)}
              className="border-[#808080] border-b-[1px] focus:outline-none"
          />
          <input
              type="text"
              placeholder="Security Answer"
              onChange={(e) => setSecurityAnswer(e.target.value)}
              className="border-[#808080] border-b-[1px] focus:outline-none"
          />
          <div className="flex flex-col justify-center md:justify-start gap-6">
            <button className="text-white py-3 bg-[#EA4335] text-base w-full rounded-[4px]" type='submit' disabled={loading}>{loading ? "Creating Account...":"Create Account"}</button>
            <button className="flex gap-1 items-center justify-center py-3 text-base w-full border border-[#808080] rounded-[4px]"><img src={google} alt="Google" className="w-6 h-6"/>Sign up with Google</button>
            <p className="text-[#808080] pl-16 flex gap-2">Already have account?<NavLink to="/login" className="underline font-medium">Log in</NavLink></p>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
export default Signup