import '@/styles/categories.scss';

interface CategoryProps {
    filter: (category: string) => void;
    categories: string[]
}

const Categories = ({filter, categories}: CategoryProps) => {
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