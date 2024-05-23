import React from 'react';
import './Parallax.css'
import img from '../../../assets/home/banner.jpg'


const Parallax = () => {
    return (
        <div className='main'>
            <div className='pt-12'>
                <div className='text-center mb-12'>
                    <p className='text-[#D99904] pb-4'>---Check it out---</p>
                    <hr className='mx-[524px]' />
                    <h1 className='py-4 text-4xl text-white'>FROM OUR MENU</h1>
                    <hr className='mx-[524px]' />
                </div>
            </div>
            <div className='grid grid-cols-2 max-w-screen-xl mx-auto pb-40'>
                <div className='ml-20'>
                    <img className='w-[80%]' src={img} alt="" />
                </div>
                <div className='place-self-center'>
                    <p className='pr-40 text-white'>
                        March 20, 2023 <br />
                        WHERE CAN I GET SOME? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn bg-base-200 border-4 border-b-orange-400 mt-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Parallax;