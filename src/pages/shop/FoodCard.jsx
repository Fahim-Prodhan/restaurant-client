import React from 'react';
import useAuth from '../../hook/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { axiosSecure } from '../../hook/useAxiosSecure';

const FoodCard = ({item}) => {
    const {name, image, recipe} = item;
    const {user} = useAuth()
    const navigate = useNavigate()

    const handleCard = (item)=>{
        if(user && user?.email){
            const cartItem = {
                menuId: item._id,
                email: user.email,
                name:item.name,
                image:item.image,
                price:item.price
            }
            console.log(cartItem);
        axiosSecure.post('/carts', cartItem)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                alert("Item add to card")
            }
        })
        }else{
            Swal.fire({
                title: "Please Login to save card",
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
              });
        }
    }

    return (
        <div>
            <div className="card h-[550px]  bg-base-100 shadow-xl">
                <figure><img className='h-[300px] w-[424px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={()=>handleCard(item)} className="btn bg-base-200 border-4 border-b-orange-400">Add To Card</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;