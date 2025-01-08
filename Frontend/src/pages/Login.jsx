import login from '../assets/login.jpeg';
import { useState } from 'react';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div>
      <div className="flex justify-evenly items-center gap-10 pr-32 h-[781px]">
        <div className="">
          <img src={login} alt="Login Page" className='hidden md:block w-[750px]'/>
        </div>
        <div className="flex flex-col justify-start gap-12 w-[370px]">
          <div className="flex flex-col justify-start gap-3">
            <h1 className="text-4xl">Log in to <span className='text-primary font-semibold'>Gojoye</span></h1>
            <p className="text-base">Enter your detail below</p>
            {/* {error&& <p className="text-red-500">{error}</p>} */}
          </div>
          <form className="flex flex-col justify-start gap-10">
            <input type="text" placeholder="username or email" onChange={(e)=>setUsername(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
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