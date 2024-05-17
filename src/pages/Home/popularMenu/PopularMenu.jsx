import { useEffect, useState } from "react";
import MenuItem from "../../shared/menuItem/MenuItem";



const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
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
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center"><button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button></div>
        </section>
    );
};

export default PopularMenu;