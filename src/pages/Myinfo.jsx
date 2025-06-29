import React from 'react'

const Myinfo = () => {
    const addresses = [
    {
      id: 1,
      name: 'Jhanvi shah',
      phone: '8980252445',
      address: '1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road',
      tags: ['Home', 'Default billing address'],
      isDefault: true
    },
    {
      id: 2,
      name: 'Jhanvi shah',
      phone: '8980252445',
      address: '1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road',
      tags: ['Home', 'Default shipping address'],
      isDefault: false
    },
    {
      id: 3,
      name: 'Jhanvi shah',
      phone: '8980252445',
      address: '1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road',
      tags: ['Office'],
      isDefault: false
    },
    {
      id: 4,
      name: 'Jhanvi shah',
      phone: '8980252445',
      address: '1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road',
      tags: ['Home2'],
      isDefault: false
    }
  ];
  return (
    <div className="flex-1 p-8">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">My Info</h2>

            {/* Contact Details Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <p className="text-gray-900">Jhanvi Shah</p>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">Change</button>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <p className="text-gray-900">Jhanvi@gmail.com</p>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">Change</button>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <p className="text-gray-900">8980252445</p>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">Change</button>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <p className="text-gray-900">••••••••</p>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">Change</button>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Address</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <div key={address.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-900">{address.name}</h4>
                      <p className="text-gray-600 text-sm">{address.phone}</p>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {address.address}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {address.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex gap-3">
                        <button className="text-gray-600 hover:text-gray-800">Remove</button>
                        <button className="text-gray-600 hover:text-gray-800">Edit</button>
                        {!address.isDefault && (
                          <button className="text-gray-600 hover:text-gray-800">Set as default</button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  )
}

export default Myinfo
