import '@/styles/title.scss'
import { TitleProps } from '@/types/Types';

const Title = ({title}: TitleProps) =>  {
    return (
        <div className='title'>
            <h3>{title}</h3>
        </div>
    )
}

export default Title