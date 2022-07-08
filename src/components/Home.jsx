import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Bruno Lisboa</h1>
        <h2>i´m a Web developer</h2>
        <p> I am a web developer with, a person who enjoys coding, and who thanks this IT world for the opportunity it gives him to live doing what he likes!
            Characteristics such as motivation, companionship, and a strong conviction that you have to constantly update yourself, are what you will find in me! Soft skills such as Time management, communication, adaptability, problem-solving, and teamwork are very important!
            Have a good life!
            We are in contact
        </p>
        <div>
          <button>View Work <HiArrowNarrowRight /></button>
        </div>
      </div>
    </div>
  );
}

export default Home;