import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCaraousel from '../../components/HomeCarousel/HomeSectionCarousel/HomeSectionCaraousel';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className='space-y-10 py-20 flex flex-col justfy-center px-5 lg:px-10'>
                <HomeSectionCaraousel data={mens_kurta} sectionName={"Mens's Kurta"}/>
                <HomeSectionCaraousel data={mens_kurta} sectionName={"Mens's Shoes"}/>
                <HomeSectionCaraousel data={mens_kurta} sectionName={"Mens's Shirt"}/>
                <HomeSectionCaraousel data={mens_kurta} sectionName={"Womens's Saree"}/>
                <HomeSectionCaraousel data={mens_kurta} sectionName={"Womens's Dress"}/>
                

            </div>
        </div>
    );
};

export default HomePage;
