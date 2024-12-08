import { Cards, Colors } from './components/index.tsx';
import { colorsData, colorsBgData } from './data.ts';

const App = () => {
    return (
        <>
            <Cards />
            <div style={{ marginTop: '10px' }}>
                <h2>Colors</h2>
                <Colors data={colorsData} />
                <Colors data={colorsBgData} />
            </div>
        </>
    );
};

export default App;
