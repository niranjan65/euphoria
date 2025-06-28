import { Facebook, Instagram, Twitter, Linkedin, ChevronDown } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Need Help Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Need Help</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ's</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">euphoria Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">euphoriastan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Collaboration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Media</a></li>
            </ul>
          </div>

          {/* More Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">More Info</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Term and Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Location</h3>
            <div className="space-y-4 text-gray-300">
              <p>support@euphoria.in</p>
              <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
              <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Download App Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-6">Download The App</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Google Play Button */}
            <a href="#" className="flex items-center bg-black hover:bg-gray-900 px-6 py-3 rounded-lg transition-colors">
              <div className="mr-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">android app on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>

            {/* App Store Button */}
            <a href="#" className="flex items-center bg-black hover:bg-gray-900 px-6 py-3 rounded-lg transition-colors">
              <div className="mr-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Available on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Popular Categories - Collapsible */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <button className="flex items-center justify-between w-full text-left">
            <h3 className="text-xl font-semibold">Popular Categories</h3>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            Copyright © 2025 Euphoria Folks Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}