import { Cards, Colors } from './components/index.tsx';
import { colorsData, colorsBgData } from './data.ts';

const App = () => {
    return (
        <>
            <Cards />
            <div style={{ marginTop: '10px' }}>
                <h2>Colors</h2>
                {colorsData.map((color, index) => (
                    <Colors
                        textColor={color.textColor}
                        text={color.text}
                        key={index}
                    />
                ))}
                <br /> <br />
                <div>
                    {colorsBgData.map((color, index) => (
                        <Colors
                            textColor={color.textColor}
                            text={color.text}
                            bgColor={color.bgColor}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default App;
