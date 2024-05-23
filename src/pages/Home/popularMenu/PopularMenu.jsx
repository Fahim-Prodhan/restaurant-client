import { useEffect, useState } from "react";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hook/useMenu";



const PopularMenu = () => {
    const [menu] = useMenu();
    const [index, setIndex] = useState(6)
    const handleFullMenu = (x) =>{
        setIndex(x)
    } 
    return (
        <section >
            <div className='text-center mb-12'>
                <p className='text-[#D99904] pb-4'>---Check it out---</p>
                <hr />
                <h1 className='py-4 text-4xl'>FROM OUR MENU</h1>
                <hr />
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.slice(0,index).map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center"><button onClick={()=>handleFullMenu(menu.length-1)} className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button></div>
        </section>
    );
};

export default PopularMenu;