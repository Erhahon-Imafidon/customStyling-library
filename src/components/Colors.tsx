interface ColorsProp {
    data: {
        textColor?: string;
        text: string;
        bgColor?: string;
        variations?: string;
    }[];
}

const Colors = ({ data }: ColorsProp) => {
    return (
        <ul style={styles}>
            {data.map((item, index) => {
                const { textColor, bgColor, text, variations } = item;
                return (
                    <li key={index}>
                        {textColor && !bgColor && !variations && (
                            <span className={`${textColor}`}>{text} </span>
                        )}
                        {textColor && bgColor && !variations && (
                            <span className={`${textColor} ${bgColor}`}>
                                {text}
                            </span>
                        )}

                        {variations && (
                            <span className={`${textColor} ${variations}`}>
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
