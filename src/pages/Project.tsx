import { useState, Suspense } from 'react';
import '@/styles/project.scss'
import Data from '@/assets/ProjectData'
import Header from '@/components/Header'
import Categories from '@/components/Categories'
import MenuItems from '@/components/MenuItems'
import '@/styles/menu-items.scss';
import Spinner from '@/components/Spinner';

const allCategories: string[] = ['All', ...new Set(Data.map(item => item.category))];

export const Project = () =>  {

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
                <Suspense fallback={<Spinner />}>
                    <MenuItems menuItems={menuItems} />
                </Suspense>
            </div>
        </div>
    )
}