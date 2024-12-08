import { Cards, Colors } from './components/index.tsx';
import { colorsData } from './data.ts';

const App = () => {
    return (
        <>
            <Cards />
            {colorsData.map((color, index) => (
                <Colors
                    textColor={color.textColor}
                    text={color.text}
                    key={index}
                />
            ))}
        </>
    );
};

export default App;
