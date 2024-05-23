import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HeaderBanner from '../Home/HeaderBanner/HeaderBanner';
import useMenu from '../../hook/useMenu';
import FoodCard from './FoodCard';

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu();

    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='max-w-6xl  mx-auto mt-12'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='max-w-md mx-auto mb-12'>
                        <TabList >
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soup</Tab>
                            <Tab>Offered</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-6'>
                            {
                                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-6'>
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-6'>
                            {
                                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-6'>
                            {
                                offered.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;