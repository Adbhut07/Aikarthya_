import React from 'react';
import P1 from "../assets/images/instagramNew.png";
import P2 from "../assets/images/link (2).png";
import P3 from "../assets/images/link (3).png";
import P4 from "../assets/images/link (4).png";
import P5 from "../assets/images/link (5).png";
import P6 from "../assets/images/link (6).png";
import P7 from "../assets/images/link (7).png";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Aikarthya</h3>
            <p className="text-sm text-gray-300 mb-4">A student-led collaboration project empowering researchers and students with cutting-edge tools and resources.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Research Tools</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Collaboration Space</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Data Analysis</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Learning Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <form className="mb-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="flex items-center">
                <input
                  id="email"
                  type="email"
                  required
                  className="appearance-none bg-gray-700 border border-gray-600 rounded-l-md py-2 px-4 text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              {[P1, P2, P3, P4, P5, P6, P7].map((icon, index) => (
                <a key={index} href="#" className="hover:opacity-75 transition-opacity">
                  <img src={icon}  className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2024 Aikarthya. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white mr-4 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;