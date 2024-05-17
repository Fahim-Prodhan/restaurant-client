import React from 'react';
import Category from '../category/Category';
import PopularMenu from '../popularMenu/PopularMenu';
import ChefRecommends from '../chefRecommends/ChefRecommends';

const Home = () => {
    return (
        <div>
          <div className='mt-[100px] max-w-screen-xl mx-auto'><Category></Category></div>
          <div className='mt-[100px] max-w-screen-xl mx-auto'><PopularMenu></PopularMenu></div>
          <div className='mt-[100px] max-w-screen-xl mx-auto'><ChefRecommends></ChefRecommends></div>
        </div>
    );
};

export default Home;