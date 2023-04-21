import '@/styles/categories.scss';
import { CategoryProps } from '@/types/Types'; 

export const Categories = ({filter, categories}: CategoryProps) => {
    return (
        <div className='categories'>
            {
                categories.map((category, count) => {
                    return <button type='button' className='categories-btn active' onClick={() => filter(category)}  key={count}> {category} </button>
                })
            }
        </div>
    )
}

export default Categories