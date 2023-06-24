
import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <>
    <NavBar />
    <div className='grid grid-cols-2 gap-2 mt-16 ml-32'>
        <div>
        <h4 className='mb-8 mt-4 text-5xl'>At Your Own Comfort Zone</h4>
        <p className='pr-32 text-lg mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
        <button className='mt-12 bg-blue-600 rounded-full p-2 text-lg text-white'>Shop Now</button>
        </div>
        <img src='https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-11/modern-living-room-interior-with-sofa-green-plants-lamp-table-dark-wall-background.jpg' className='w-100 h-100 pr-16'></img>
    </div>
    <div>
        <h4 className='mt-16 text-center text-5xl'>Featured Products</h4>
        <div className='w-16 h-2 bg-blue-400 mx-auto mt-6'></div>
    </div>
    </>
  )
}

export default Home