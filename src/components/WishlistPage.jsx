import React, { useState } from 'react';
import { Heart, Package, User, LogOut, X, ShoppingCart } from 'lucide-react';

export default function WishlistPage() {
  const [activeSection, setActiveSection] = useState('Wishlist');
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Blue Flower Print Crop Top',
      color: 'Yellow',
      quantity: 1,
      price: 29.00,
      image: 'blue-crop-top'
    },
    {
      id: 2,
      name: 'Yellow Flower Print Dress',
      color: 'Yellow',
      quantity: 1,
      price: 78.00,
      image: 'yellow-dress'
    },
    {
      id: 3,
      name: 'White Hoodie long sleeve',
      color: 'White',
      quantity: 1,
      price: 134.00,
      image: 'white-hoodie'
    },
    {
      id: 4,
      name: 'Brown men\'s long sleeve T-shirt',
      color: 'Brown',
      quantity: 1,
      price: 93.00,
      image: 'brown-tshirt'
    }
  ]);

  const sidebarItems = [
    { icon: Package, label: 'My orders', active: false },
    { icon: Heart, label: 'Wishlist', active: true },
    { icon: User, label: 'My info', active: false },
    { icon: LogOut, label: 'Sign out', active: false }
  ];

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    // Handle add to cart functionality
    console.log('Added to cart:', item);
  };

  const getProductImage = (imageType) => {
    const imageConfigs = {
      'blue-crop-top': {
        bgColor: 'bg-gradient-to-br from-yellow-200 to-yellow-300',
        content: (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-20 bg-blue-400 rounded-lg relative">
              <div className="absolute inset-2 bg-white rounded opacity-30"></div>
            </div>
          </div>
        )
      },
      'yellow-dress': {
        bgColor: 'bg-gradient-to-br from-purple-200 to-purple-300',
        content: (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-16 bg-yellow-400 rounded-lg relative">
              <div className="absolute top-1 left-1 right-1 h-4 bg-yellow-500 rounded-t-lg"></div>
            </div>
          </div>
        )
      },
      'white-hoodie': {
        bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
        content: (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-14 h-18 bg-white rounded-lg border-2 border-gray-300 relative">
              <div className="absolute top-1 left-2 right-2 h-2 bg-black rounded"></div>
            </div>
          </div>
        )
      },
      'brown-tshirt': {
        bgColor: 'bg-gradient-to-br from-teal-200 to-teal-300',
        content: (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-14 h-16 bg-red-900 rounded-lg relative">
              <div className="absolute top-2 left-2 right-2 h-8 bg-red-800 rounded"></div>
            </div>
          </div>
        )
      }
    };
    return imageConfigs[imageType] || imageConfigs['blue-crop-top'];
  };

  return (
    <div className="container min-h-screen">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Wishlist</h2>

            {/* Wishlist Items */}
            <div className="space-y-6">
              {wishlistItems.map((item) => {
                const imageConfig = getProductImage(item.image);
                return (
                  <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600 mr-4"
                      >
                        <X className="w-5 h-5" />
                      </button>

                      {/* Product Image */}
                      <div className={`w-20 h-24 rounded-lg mr-6 flex items-center justify-center overflow-hidden ${imageConfig.bgColor}`}>
                        {imageConfig.content}
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-1">
                          <span className="font-medium">Color : </span>
                          <span>{item.color}</span>
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Quantity : </span>
                          <span>{item.quantity}</span>
                        </p>
                      </div>

                      {/* Price */}
                      <div className="text-right mr-6">
                        <p className="text-xl font-bold text-gray-900">${item.price.toFixed(2)}</p>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {wishlistItems.length === 0 && (
              <div className="text-center py-16">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
                <p className="text-gray-600">Add items you love to your wishlist for easy access later.</p>
              </div>
            )}
          </div>
  );
}