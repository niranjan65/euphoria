import React, { useState } from 'react';
import { Heart, Package, User, LogOut } from 'lucide-react';
import OrderDetailsPage from './OrderDetailsPage';
import Myinfo from './Myinfo';
import WishlistPage from '@/components/WishlistPage';

export default function ContactDetailsPage() {
  const [activeSection, setActiveSection] = useState('My orders');

  const sidebarItems = [
    { icon: Package, label: 'My orders', active: true },
    { icon: Heart, label: 'Wishlist', active: false },
    { icon: User, label: 'My info', active: false },
    { icon: LogOut, label: 'Sign out', active: false }
  ];

  

  return (
    <div className="container mx-20 min-h-screen ">
      {/* Breadcrumb */}
      <div className="bg-white px-6 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <span>Home</span>
          <span className="mx-2">›</span>
          <span>My Account</span>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Personal Info</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 min-h-screen ">
          

          <div>
            <div className="flex items-center mb-8">
          <div className="w-1.5 h-8 rounded-full bg-purple-600 mr-4"></div>
          <h3 className="text-3xl font-semibold text-gray-800">Hello Jhanvi</h3>
        </div>
          <p className="text-gray-600">Welcome to your Account</p>
          </div>
          
          <nav className="mt-8">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.label;
              return (
                <button
                  key={index}
                  className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                    isActive 
                      ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection(item.label)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        {
            activeSection === "My info" && (<Myinfo /> )

        }

        {
            activeSection === "My orders" && (<OrderDetailsPage />)
        }

        {
            activeSection === "Wishlist" && (<WishlistPage />)
        }

        
      </div>
    </div>
  );
}