import React from 'react';
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
const ChefRecommends = () => {
    
    return (
        <div>
            <div className='text-center mb-12'>
                <p className='text-[#D99904] pb-4'>---Should Try---</p>
                <hr />
                <h1 className='py-4 text-4xl'>CHEF RECOMMENDS</h1>
                <hr />
            </div>
            <div className='grid grid-cols-3 gap-20'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className='h-[300px] w-[424px]' src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-base-200 border-4 border-b-orange-400">Add To Card</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className='h-[300px] w-[424px]' src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-base-200 border-4 border-b-orange-400">Add To Card</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className='h-[300px] w-[424px]' src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-base-200 border-4 border-b-orange-400">Add To Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;