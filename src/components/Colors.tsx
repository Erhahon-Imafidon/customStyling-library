interface ColorsProp {
    data: { textColor?: string; text: string; bgColor?: string }[];
}

const Colors = ({ data }: ColorsProp) => {
    return (
        <ul style={styles}>
            {data.map((item, index) => {
                const { textColor, bgColor, text } = item;
                return (
                    <li key={index}>
                        {textColor && !bgColor && (
                            <span className={`${textColor}`}>{text} | </span>
                        )}
                        {textColor && bgColor && (
                            <span className={`${textColor} ${bgColor}`}>
                                {text}
                            </span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

const styles = {
    display: 'flex',
    gap: '10px',
    padding: '10px',
};

export default Colors;
