// import login from '../assets/login.jpeg';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import {jwtDecode} from "jwt-decode";

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [resetEmail, setResetEmail] = useState('');
//     const [resetRequested, setResetRequested] = useState(false);
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:3000/auth/login', {
//                 email,
//                 password
//             });
//             localStorage.setItem('token', res.data.accessToken); // Store access token

//             // Decode the JWT token
//             const decodedToken = jwtDecode(res.data.accessToken);
//             localStorage.setItem('username', decodedToken.username);
//             localStorage.setItem('userType', decodedToken.userType);
//             localStorage.setItem('email', decodedToken.email);
//             localStorage.setItem('isLoggedIn', decodedToken.isLoggedIn);

//             toast.success('Login successful!'); // Show success message
//             navigate('/');
//         } catch (error) {
//             setError('Login failed. Please check your credentials.');
//             toast.error('Login failed. Please check your credentials.'); // Show error message
//             console.log(error);
//         }
//     };

//     const handleResetPassword = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:3000/auth/forgot-password', {
//                 email: resetEmail
//             });
//             console.log(res.data);
//             setResetRequested(true);
//             toast.success('Reset password link sent!'); // Show success message
//         } catch (error) {
//             setError('Error sending reset password email.');
//             toast.error('Error sending reset password email.'); // Show error message
//             console.log(error);
//         }
//     };

//     return (
//         <div>
//             <div className="flex justify-center items-center gap-4 my-4">
//                 <div className="">
//                     <img src={login} alt="Login Page" className='hidden md:block w-[750px]'/>
//                 </div>
//                 <div className="flex flex-col justify-start gap-12 w-[370px]">
//                     <div className="flex flex-col justify-start gap-3">
//                         <h1 className="text-4xl">Log in to <span className='text-primary font-semibold'>Gojoye</span></h1>
//                         <p className="text-base">Enter your details below</p>
//                         {error && <p className="text-red-500">{error}</p>}
//                     </div>
//                     <form className="flex flex-col justify-start gap-10" onSubmit={handleLogin}>
//                         <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
//                         <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
//                         <div className="flex justify-between items-center">
//                             <button className="text-white w-36 py-3 bg-emerald-800 hover:bg-opacity-40 active:bg-emerald-800 text-base rounded-md" type="submit">Login</button>
//                             <button type="button" onClick={() => setResetRequested(true)} className="pl-16 flex gap-2 text-[#EA4335]">Forget Password?</button>
//                         </div>
//                     </form>

//                     {resetRequested && (
//                         <form className="flex flex-col justify-start gap-10" onSubmit={handleResetPassword}>
//                             <input type="text" placeholder="Enter your email" onChange={(e) => setResetEmail(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
//                             <button className="text-white w-36 py-3 bg-blue-600 hover:bg-opacity-40 active:bg-blue-600 text-base rounded-md" type="submit">Send Reset Link</button>
//                         </form>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;
import login from '../assets/login.jpeg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/authSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [resetRequested, setResetRequested] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/auth/login', {
                email,
                password,
            });
            dispatch(setCredentials({ token: res.data.accessToken })); // Dispatch action to set credentials

            toast.success('Login successful!'); // Show success message
            navigate('/');
        } catch (error) {
            setError('Login failed. Please check your credentials.');
            toast.error('Login failed. Please check your credentials.'); // Show error message
            console.log(error);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/auth/forgot-password', {
                email: resetEmail,
            });
            console.log(res.data);
            setResetRequested(true);
            toast.success('Reset password link sent!'); // Show success message
        } catch (error) {
            setError('Error sending reset password email.');
            toast.error('Error sending reset password email.'); // Show error message
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center gap-4 my-4">
                <div className="">
                    <img src={login} alt="Login Page" className='hidden md:block w-[750px]'/>
                </div>
                <div className="flex flex-col justify-start gap-12 w-[370px]">
                    <div className="flex flex-col justify-start gap-3">
                        <h1 className="text-4xl">Log in to <span className='text-primary font-semibold'>Gojoye</span></h1>
                        <p className="text-base">Enter your details below</p>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                    <form className="flex flex-col justify-start gap-10" onSubmit={handleLogin}>
                        <input 
                            type="text" 
                            placeholder="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="border-[#808080] border-b-[1px] focus:outline-none"
                        />
                        <input 
                            type="password" 
                            placeholder="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="border-[#808080] border-b-[1px] focus:outline-none"
                        />
                        <div className="flex justify-between items-center">
                            <button 
                                className="text-white w-36 py-3 bg-emerald-800 hover:bg-opacity-40 active:bg-emerald-800 text-base rounded-md" 
                                type="submit"
                            >
                                Login
                            </button>
                            <button 
                                type="button" 
                                onClick={() => setResetRequested(true)} 
                                className="pl-16 flex gap-2 text-[#EA4335]"
                            >
                                Forget Password?
                            </button>
                        </div>
                    </form>

                    {resetRequested && (
                        <form className="flex flex-col justify-start gap-10" onSubmit={handleResetPassword}>
                            <input 
                                type="text" 
                                placeholder="Enter your email" 
                                onChange={(e) => setResetEmail(e.target.value)} 
                                className="border-[#808080] border-b-[1px] focus:outline-none"
                            />
                            <button 
                                className="text-white w-36 py-3 bg-blue-600 hover:bg-opacity-40 active:bg-blue-600 text-base rounded-md" 
                                type="submit"
                            >
                                Send Reset Link
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;