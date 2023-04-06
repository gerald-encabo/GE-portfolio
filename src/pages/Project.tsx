import React, { useState } from 'react'
import '@/styles/project.scss'
import Data from '@/assets/data/Data'
import Header from '@/components/Header'
import Categories from '@/components/Categories'
import MenuItems from '@/components/MenuItems'
import '@/styles/menu-items.scss';
import { ClassType } from '@/assets/types/Types'

const allCategories: string[] = ['All', ...new Set(Data.map(item => item.category))];

const Project = () =>  {

    const [categories, ] = useState<string[]>(allCategories);
    const [menuItems, setMenuItems] = useState<typeof Data>(Data);

    const filter = (category: string) => {

        if(category === 'All'){
            return setMenuItems(Data);
        } 

        const filteredData = Data.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className='project'>
            <div className='project-wrapper container'>
                <Header title={'Project'} desc={'My Project'} />
            </div>
            <div className='project-container container'>
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItems={menuItems} />
            </div>
        </div>
    )

}

export default Project