interface ColorsProp {
    textColor?: string;
    text: string;
    bgColor?: string;
}

const Colors = ({ text, textColor, bgColor }: ColorsProp) => {
    return (
        <>
            {textColor && <span className={`${textColor}`}>{text} | </span>}
            {textColor && bgColor && (
                <span className={`${textColor} ${bgColor}`}>{text}</span>
            )}
        </>
    );
};

export default Colors;
