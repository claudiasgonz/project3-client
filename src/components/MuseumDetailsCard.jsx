import React from 'react'

function MuseumDetailsCard() {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
   
    <img 
        className="object-cover w-full h-48 md:h-48 md:w-48 md:rounded-none md:rounded-l-lg" 
        src={museum.image} 
        alt="museum image">
    </img>
    <div className="flex flex-col justify-between p-4 leading-normal">
       <p>{museum.image}</p>
       <p>{museum.name}</p>
       <p>{museum.location}</p>
       <p>{museum.description}</p>
       <p>{museum.artType}</p>
       <p>{museum.website}</p>
       </div>
   </div>
  )
}

export default MuseumDetailsCard