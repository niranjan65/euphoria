import React, { useState } from 'react';
import { ChevronDown, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    shippingAddress: 'same',
    saveInfo: false,
    paymentMethod: 'credit',
    cardNumber: '',
    nameOnCard: '',
    expirationDate: '',
    securityCode: '',
    showSecurityCode: false
  });

  const orderItems = [
    {
      id: 1,
      name: 'Blue Flower Print Crop Top',
      color: 'Yellow',
      quantity: 1,
      price: 29.00,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=80&h=80&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Levender Hoodie',
      color: 'Levender',
      quantity: 2,
      price: 119.00,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=80&h=80&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Black Sweatshirt',
      color: 'Black',
      quantity: 2,
      price: 123.00,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=80&h=80&fit=crop&crop=center'
    }
  ];

  const subtotal = 513.00;
  const savings = -30.00;
  const shipping = -5.00;
  const total = 478.00;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const toggleSecurityCodeVisibility = () => {
    setFormData(prev => ({
      ...prev,
      showSecurityCode: !prev.showSecurityCode
    }));
  };

  const handleContinue = () => {
    alert('Proceeding to delivery options...');
    navigate("/order-confirmed")
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <span>Home</span>
          <span className="mx-2">›</span>
          <span>My Account</span>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Check Out</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-purple-600 mr-4"></div>
                <h1 className="text-3xl font-bold text-gray-900">Check Out</h1>
              </div>
            </div>

            {/* Billing Details */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing Details</h2>
              
              <div className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                    />
                  </div>
                </div>

                {/* Country & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country / Region*
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Country / Region"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Company (optional)"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                    />
                  </div>
                </div>

                {/* Street Address & Apartment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address*
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      placeholder="House number and street name"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apt, suite, unit
                    </label>
                    <input
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleInputChange}
                      placeholder="apartment, suite, unit, etc. (optional)"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                    />
                  </div>
                </div>

                {/* City, State, Postal Code */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City*
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Town / City"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State*
                    </label>
                    <div className="relative">
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 appearance-none"
                      >
                        <option value="">State</option>
                        <option value="CA">California</option>
                        <option value="NY">New York</option>
                        <option value="TX">Texas</option>
                        <option value="FL">Florida</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code*
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="Postal Code"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 max-w-md"
                  />
                </div>
              </div>

              {/* Continue Button */}
              <div className="mt-8">
                <button
                  onClick={handleContinue}
                  className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium"
                >
                  Continue to delivery
                </button>
                
                <div className="mt-4">
                  <label className="flex items-center text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mr-3"
                    />
                    Save my information for a faster checkout
                  </label>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h2>
              <p className="text-gray-600 mb-6">Select the address that matches your card or payment method.</p>
              
              <div className="space-y-4">
                <label className="flex items-center p-4 bg-gray-50 rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="shippingAddress"
                    value="same"
                    checked={formData.shippingAddress === 'same'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="ml-3 text-gray-900 font-medium">Same as Billing address</span>
                </label>
                
                <label className="flex items-center p-4 bg-gray-50 rounded-md cursor-pointer">
                  <input
                    type="radio"
                    name="shippingAddress"
                    value="different"
                    checked={formData.shippingAddress === 'different'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="ml-3 text-gray-900 font-medium">Use a different shipping address</span>
                </label>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Method</h2>
              
              <div className="bg-gray-50 rounded-md p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">Arrives by Monday, June 7</span>
                </div>
                <hr className="border-gray-300 my-4" />
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-gray-900">Delivery Charges</span>
                    <p className="text-sm text-gray-600">Additional fees may apply</p>
                  </div>
                  <span className="font-semibold text-gray-900">$5.00</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
              <p className="text-gray-600 mb-6">All transactions are secure and encrypted.</p>
              
              <div className="space-y-4">
                {/* Credit Card Option */}
                <div className="bg-gray-50 rounded-md p-6">
                  <label className="flex items-center cursor-pointer mb-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={formData.paymentMethod === 'credit'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                    />
                    <div className="ml-3">
                      <span className="text-gray-900 font-medium">Credit Card</span>
                      <p className="text-sm text-gray-600">We accept all major credit cards.</p>
                    </div>
                  </label>
                  
                  {/* Payment Icons */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      <span className="text-blue-600 font-bold text-sm">G</span>
                      <span className="text-red-600 font-bold text-sm">Pay</span>
                    </div>
                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">VISA</div>
                    <div className="text-blue-600 font-bold text-sm">PayPal</div>
                    <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">PAYpass</div>
                  </div>

                  {/* Credit Card Form */}
                  {formData.paymentMethod === 'credit' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="Card number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="nameOnCard"
                            value={formData.nameOnCard}
                            onChange={handleInputChange}
                            placeholder="Name of card"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            name="expirationDate"
                            value={formData.expirationDate}
                            onChange={handleInputChange}
                            placeholder="Expiration date (MM/YY)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                          />
                        </div>
                        <div className="relative">
                          <input
                            type={formData.showSecurityCode ? "text" : "password"}
                            name="securityCode"
                            value={formData.securityCode}
                            onChange={handleInputChange}
                            placeholder="Security Code"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 pr-12"
                          />
                          <button
                            type="button"
                            onClick={toggleSecurityCodeVisibility}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {formData.showSecurityCode ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Cash on Delivery Option */}
                <div className="bg-gray-50 rounded-md p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                    />
                    <div className="ml-3">
                      <span className="text-gray-900 font-medium">Cash on delivery</span>
                      <p className="text-sm text-gray-600">Pay with cash upon delivery.</p>
                    </div>
                  </label>
                </div>

                {/* PayPal Option */}
                <div className="bg-gray-50 rounded-md p-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                    />
                    <div className="ml-3">
                      <span className="text-gray-900 font-medium">Paypal</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Pay Now Button */}
              <div className="mt-8">
                <button
                  onClick={handleContinue}
                  className="bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium text-lg"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white  top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        {item.name} x {item.quantity}
                      </h3>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Color:</span> {item.color}
                      </p>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ( 3 items )</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Savings</span>
                  <span className="font-semibold text-green-600">${savings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}