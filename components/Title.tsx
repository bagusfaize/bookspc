interface TitleProps {
    text: string,
}

const Title = ({ text }: TitleProps) => {
    return (
        <div>
            <h1 style={{ fontSize: '20px' }}>{text}</h1>
        </div>
    )
}

export default Title;