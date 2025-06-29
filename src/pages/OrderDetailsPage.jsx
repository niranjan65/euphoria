import React, { useState } from 'react';
import { ChevronLeft, X } from 'lucide-react';

export default function OrderDetailsPage() {
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      name: 'Printed white cote',
      color: 'White',
      quantity: 1,
      price: 29.00,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Men Blue Shirt',
      color: 'Blue',
      quantity: 1,
      price: 29.00,
      image: '/api/placeholder/80/80'
    }
  ]);

  const orderStatus = [
    { label: 'Order Placed', active: true, completed: true },
    { label: 'Inprogress', active: true, completed: true },
    { label: 'shipped', active: false, completed: false },
    { label: 'Delivered', active: false, completed: false }
  ];

  const removeItem = (id) => {
    setOrderItems(orderItems.filter(item => item.id !== id));
  };

  const totalAmount = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen w-full ">
      {/* Header */}
      <div className="bg-white px-6 py-4">
        <div className="flex items-center">
          <button className="mr-4 p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Order Details</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Order Summary */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Order no: #12345678
              </h2>
              <p className="text-gray-600">Placed On 2 June 2023 2:40 PM</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">
                Total : ${totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Order Progress */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-300">
              <div 
                className="h-full bg-gray-800 transition-all duration-500"
                style={{ width: '50%' }}
              ></div>
            </div>
            
            {/* Progress Steps */}
            <div className="relative flex justify-between">
              {orderStatus.map((status, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={`w-4 h-4 rounded-full border-2 mb-2 ${
                      status.completed 
                        ? 'bg-gray-800 border-gray-800' 
                        : status.active 
                        ? 'bg-gray-400 border-gray-400'
                        : 'bg-gray-300 border-gray-300'
                    }`}
                  ></div>
                  <span 
                    className={`text-sm font-medium ${
                      status.completed || status.active 
                        ? 'text-gray-900' 
                        : 'text-gray-400'
                    }`}
                  >
                    {status.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Verification */}
        <div className="bg-gray-100 rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">8 June 2023 3:40 PM</span>
            <span className="text-gray-900 font-medium">Your order has been successfully verified.</span>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg overflow-hidden">
          {orderItems.map((item, index) => (
            <div key={item.id} className={`p-6 ${index < orderItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-orange-200 rounded-lg mr-4 flex items-center justify-center overflow-hidden">
                    {item.id === 1 ? (
                      <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-400 rounded"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                          <div className="w-8 h-8 bg-teal-500 rounded"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Details */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm">Color : {item.color}</p>
                  </div>
                </div>

                {/* Quantity and Price */}
                <div className="flex items-center space-x-6">
                  <div className="text-gray-600">
                    <span className="font-medium">Qty : </span>
                    <span>{item.quantity}</span>
                  </div>
                  <div className="font-semibold text-gray-900 min-w-[80px] text-right">
                    ${item.price.toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}