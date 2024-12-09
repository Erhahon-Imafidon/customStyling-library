import { Cards, Colors } from './components/index.tsx';
import {
    colorsData,
    colorsBgData,
    colorsVarData,
    buttonsData,
} from './data.ts';

const App = () => {
    return (
        <div style={styles}>
            <Cards />
            <div style={{ marginTop: '10px' }}>
                <h2>Colors</h2>
                <Colors data={colorsData} />
                <Colors data={colorsBgData} />
                <Colors data={colorsVarData} />
            </div>

            <br />
            <div>
                <h2>Buttons</h2>
                <Colors data={buttonsData} />
            </div>
        </div>
    );
};

const styles = {
    padding: '10px',
};

export default App;
