import { useState } from 'react';
import { Play } from 'lucide-react';
import model1 from "../images/model2.png"

export default function ProductDescriptionSection() {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description', count: null },
    { id: 'comments', label: 'User comments', count: 21 },
    { id: 'qa', label: 'Question & Answer', count: 4 }
  ];

  const productDetails = [
    { category: 'Fabric', value: 'Bio-washed Cotton' },
    { category: 'Pattern', value: 'Printed' },
    { category: 'Fit', value: 'Regular-fit' },
    { category: 'Neck', value: 'Round Neck' },
    { category: 'Sleeve', value: 'Half-sleeves' },
    { category: 'Style', value: 'Casual Wear' }
  ];

  return (
    <section className="max-w-screen mx-24 px-4 py-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="w-1 h-8 bg-purple-600 mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800">Product Description</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Tabs and Content */}
        <div>
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 mr-8 font-medium text-sm relative ${
                  activeTab === tab.id
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew 
                  neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, 
                  anywhere. Infinite range of matte-finish HD prints.
                </p>

                {/* Product Details Table */}
                <div className="grid grid-cols-3 bg-[#f6f6f6] ">
                  {productDetails.map((detail, index) => (
                    <div key={index} className="border border-gray-200 p-4 ">
                      <div className="text-sm text-gray-500 mb-2">{detail.category}</div>
                      <div className="font-medium text-gray-900">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'comments' && (
              <div className="text-gray-600">
                <p>User comments section would go here...</p>
              </div>
            )}

            {activeTab === 'qa' && (
              <div className="text-gray-600">
                <p>Question & Answer section would go here...</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Video Preview */}
        <div className="lg:flex lg:justify-center">
          <div className="relative bg-gray-400 rounded-[24px] overflow-hidden w-[532px] h-[328px]">

            <img src={model1} className='w-full object-cover' alt="" />
            {/* Video Thumbnail */}
            <div className="relative">
             
            <button className="bg-white absolute top-32 left-52 rounded-full p-4  hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                </button>

              {/* Duration */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                1:00 M
              </div>
            </div>

            {/* Video Title */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl font-semibold">
                Raven Hoodie with black colored design
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}