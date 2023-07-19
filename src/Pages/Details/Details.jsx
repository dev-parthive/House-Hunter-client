import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import HomeDetails from './HomeDetails';
import DetailsCart from './DetailsCart';

const Details = () => {
//   const homeData = useLoaderData()
const homeData = {
    bathrooms : 1, 
    bedrooms: 1, 
    description: " A beautifull house", 
    host: {name: 'Jhankar Mahbub', image:"https://i.ibb.co/fHg2whG/png-clipart-user-icon-foreigners-avatar-child-face.png", email: "wopiyad408@favilu.com" }, 
    image:  "https://i.ibb.co/2dw6qBd/furniture-g7bf5c52a8-640.jpg", 
    price: 35, 
    location: "Chattogram", 
    title : "Awesome big apartment beside qatar stadium", 
    to: "2023-05-30T04:08:24.000Z", 
    from: "2023-05-27T04:08:24.897Z", 
    _id: "647183d1128c55d581a561d5"
}
  console.log('dynamicData',homeData);
    return (
        <div>
        {/* Header */}
        <div className='flex flex-wrap h-[400px]'>
          <div className='w-1/2 h-full overflow-hidden'>
            <img
              alt='feature'
              className='object-cover object-start h-full w-full'
              src='https://i.ibb.co/YPXktqs/Home1.jpg'
            />
          </div>
          <div className='w-1/2 h-full overflow-hidden'>
            <img
              alt='feature'
              className='object-cover object-start h-full w-full'
              src='https://i.ibb.co/DCzG2cp/christine-roy-ir5-MHI6r-Pg0-unsplash-1.jpg'
            />
          </div>
        </div>
  
        {/* Main Content */}
        <div className='md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12 gap-3'>
          {/* Details */}
          <HomeDetails homeData={homeData}></HomeDetails>
  
          {/* Cart */}
         <DetailsCart homeData={homeData}></DetailsCart>
        </div>
      </div>
    );
};

export default Details;