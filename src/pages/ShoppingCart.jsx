import React, { useState } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Blue Flower Print Crop Top",
      color: "Yellow",
      size: "M",
      price: 29.00,
      quantity: 1,
      shipping: 0,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Lavender Hoodie",
      color: "Lavender",
      size: "XXL",
      price: 119.00,
      quantity: 2,
      shipping: 0,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Black Sweatshirt",
      color: "Black",
      size: "XXL",
      price: 123.00,
      quantity: 2,
      shipping: 5.00,
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=100&h=100&fit=crop&crop=center"
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalShipping = cartItems.reduce((sum, item) => sum + item.shipping, 0);
  const grandTotal = subtotal + totalShipping;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <span>Home</span>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Add To Cart</span>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <p className="text-gray-600 mb-1">
            Please fill in the fields below and click place order to complete your purchase!
          </p>
          <p className="text-gray-600">
            Already registered? <button className="text-purple-600 hover:underline">Please login here</button>
          </p>
        </div>

        {/* Cart Table Header */}
        <div className="bg-gray-700  text-white px-6 py-4 grid grid-cols-7 gap-4 text-sm font-medium">
          <div className="col-span-2">PRODUCT DETAILS</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>SHIPPING</div>
          <div>SUBTOTAL</div>
          <div>ACTION</div>
        </div>

        {/* Cart Items */}
        <div className="bg-white ">
          {cartItems.map((item, index) => (
            <div key={item.id} className={`px-6 py-6 grid grid-cols-7 gap-4 items-center ${index < cartItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
              {/* Product Details */}
              <div className="col-span-2 flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                </div>
              </div>

              {/* Price */}
              <div className="text-gray-900 font-medium">
                ${item.price.toFixed(2)}
              </div>

              {/* Quantity */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Shipping */}
              <div className="text-gray-600">
                {item.shipping === 0 ? 'FREE' : `$${item.shipping.toFixed(2)}`}
              </div>

              {/* Subtotal */}
              <div className="text-gray-900 font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Action */}
              <div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-purple-600 hover:text-purple-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Discount Codes */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Discount Codes</h3>
            <p className="text-gray-600 text-sm mb-4">Enter your coupon code if you have one</p>
            <div className="flex space-x-4">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Coupon code"
              />
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Apply Coupon
              </button>
            </div>
            <button className="mt-4 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Continue Shopping
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Sub Total</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${totalShipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-medium">
                  <span>Grand Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}