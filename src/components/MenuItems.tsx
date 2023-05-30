import '@/styles/menu-items.scss';
import { ClassType, MenuItemsProps } from '@/types/Types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MenuItems = ({ menuItems }: MenuItemsProps) => {
    return (
        <div className='menuitem'>
            {
                menuItems.map((item: ClassType) => {   
                    return <div className='menuitem-list' key={item.id}>
                        <div className='menuitem-tile'>
                            <p className='menuitem-title'>{item.title}</p>
                            <LazyLoadImage 
                                className='menuitem-img'
                                src={item.image} 
                                alt={item.alt}
                               
                                effect="blur"
                            />
                            <ul className='menuitem-link'>
                                <li>
                                    <a href={item.link1} target="_blank" rel="noreferrer">{item.icon1}</a>
                                    <a href={item.link2} target="_blank" rel="noreferrer">{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems