import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, recipe} = item;

    return (
        <div>
            <div className="card h-[550px]  bg-base-100 shadow-xl">
                <figure><img className='h-[300px] w-[424px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn bg-base-200 border-4 border-b-orange-400">Add To Card</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;