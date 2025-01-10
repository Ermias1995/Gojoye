import login from '../assets/login.jpeg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:3000/auth/login', {
          email,
          password
        });
        console.log(res.data);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div>
      <div className="flex justify-center items-center gap-4 my-4">
        <div className="">
          <img src={login} alt="Login Page" className='hidden md:block w-[750px]'/>
        </div>
        <div className="flex flex-col justify-start gap-12 w-[370px]">
          <div className="flex flex-col justify-start gap-3">
            <h1 className="text-4xl">Log in to <span className='text-primary font-semibold'>Gojoye</span></h1>
            <p className="text-base">Enter your detail below</p>
            {/* {error&& <p className="text-red-500">{error}</p>} */}
          </div>
          <form className="flex flex-col justify-start gap-10" onSubmit={handleLogin}>
            <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
            <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
            <div className="flex justify-between items-center">
              <button className="text-white w-36 py-3 bg-emerald-800 hover:bg-opacity-40 active:bg-emerald-800 text-base rounded-md" type="submit">Login</button>
              <button className="pl-16 flex gap-2 text-[#EA4335]">Forget Password?</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login