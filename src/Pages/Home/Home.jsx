import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from '../../Components/Cards/HomeCard';
import SearchForm from '../../Components/Forms/SearchForm';

const Home = () => {
const [loading, setLoading] = useState(false)
const [alExp, setAlExp] = useState([])
useEffect(()=>{
    setLoading(true)
    fetch('expdata.json')
    .then(res => res.json())
    .then(data => {
        setAlExp(data)
        console.log(data);
        setLoading(false)
    })
}, [])
    return (
        <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
        <div className='mt-4'>
          <SearchForm />
        </div>
  
        <div className='flex-1'>
          <div>
            <div className='flex justify-between px-4 mt-10'>
              <p className='text-xl font-bold'>Homes</p>
              <Link to='/coming-soon'>
                <p>See All</p>
              </Link>
            </div>
            <div className='container pb-8 pt-2 mx-auto'>
              <div className='flex flex-wrap'>
                {[...Array(3)].map((_, i) => (
                  <HomeCard key={i} />
                ))}
              </div>
            </div>
          </div>
          
            <div>
              <div className='flex justify-between px-4'>
                <p className='text-xl font-bold'>Experiences</p>
                <Link to='/coming-soon'>
                  <p>See All</p>
                </Link>
              </div>
              <div className='container pb-8 pt-2 mx-auto'>
                <div className='flex flex-wrap'>
                  {/* {alExp.slice(0, 4).map((exp, i) => (
                    <ExpCard key={i} exp={exp} />
                  ))} */}
                </div>
              </div>
            </div>
        
        </div>
      </div>
    );
};

export default Home;