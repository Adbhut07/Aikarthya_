import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PIC from '../assets/images/lozo.gif'; // Updated import for the GIF
import axios from 'axios';
import toast from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice.js';
import OAuth from './OAuth';

const LoginSection = () => {

  const [formData, setFormData] = useState({});
  const {loading, error:errorMessage, currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if(errorMessage) {
        toast.error(errorMessage);
    }
  }, [errorMessage]); // Trigger toast.error only when errorMessage changes

  const handleChange = (e)=>{
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const success = handleInputErrors(formData);
    if(!success)
      return;

    try {
      dispatch(signInStart());
      const res = await axios.post("/api/auth/signin", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200) {
        console.log("hi");
        dispatch(signInSuccess(res.data)); // Dispatch signInSuccess with response data
        navigate("/");
      } else {
        dispatch(signInFailure(res.data.message)); // Dispatch signInFailure with error message
      }
    } catch (error) {
      dispatch(signInFailure(error.response.data.error));
    } 
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 font-sans">
      <div className="hidden md:block md:w-1/2">
        <img src={PIC} className="h-full w-full object-cover" alt="Decorative GIF" />
      </div>
      <div className="flex w-full items-center justify-center md:w-1/2 bg-white shadow-lg">
        <div className="w-full max-w-md space-y-10 px-6 py-14 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">Sign in to Aikarthya</h2>
          </div>
          {/* <button
            type="button"
            className="group relative flex w-full justify-center rounded-lg border border-gray-300 bg-white py-3 px-6 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FcGoogle className="h-6 w-6" aria-hidden="true" />
            </span>
            Sign in with Google
          </button> */}
          <OAuth />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">Or continue with</span>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5 rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  onChange={handleChange}
                  className="relative block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-base"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={handleChange}
                  className="relative block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-base"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg bg-gray-800 py-3 px-6 text-base font-semibold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-gray-800 hover:text-gray-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;

function handleInputErrors({email, password}) {

	if (!email || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}