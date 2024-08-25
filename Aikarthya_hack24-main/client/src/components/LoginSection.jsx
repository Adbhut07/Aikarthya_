import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PIC from '../assets/images/lozo.gif';
import toast from "react-hot-toast";
import OAuth from './OAuth';

const LoginSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = handleInputErrors(formData);
    if (!success) return;

    // Always succeed if basic validation passes
    toast.success("Login successful!");
    navigate("/dashboard"); // Assuming the next page is a dashboard
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
                <label htmlFor="email" className="sr-only">Email</label>
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
                <label htmlFor="password" className="sr-only">Password</label>
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