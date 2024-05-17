import React from 'react';
import Category from '../category/Category';
import PopularMenu from '../popularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
          <div className='mt-[100px]'><Category></Category></div>
          <div className='mt-[100px]'><PopularMenu></PopularMenu></div>
        </div>
    );
};

export default Home;