interface ColorsProp {
    textColor?: string;
    text: string;
}

const Colors = ({ text, textColor }: ColorsProp) => {
    return (
        <>{textColor && <span className={`${textColor}`}>{text} | </span>}</>
    );
};

export default Colors;
