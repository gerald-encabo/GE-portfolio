import '@/styles/title.scss'

interface TitleProps {
    title: string;
}

const Title = ({title}: TitleProps) =>  {
    return (
        <div className='title'>
            <h3>{title}</h3>
        </div>
    )
}

export default Title