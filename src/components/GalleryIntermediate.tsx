import React, { useState } from 'react';

const ComponentName = () => {        
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
            <h2 className="text-lg font-bold text-gray-900">Your media files</h2>
            <p className="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-10 sm:grid-cols-3 lg:grid-cols-4">
            <div>
                <div className="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/2/media-01.png" alt="" />
                </div>
                <p className="mt-4 text-sm font-bold text-gray-900">Interior_904.png</p>
                <p className="mt-1 text-sm font-medium text-gray-500">1.04 MB</p>
            </div>
        </div>
    </div>
  )
}
export default ComponentName;