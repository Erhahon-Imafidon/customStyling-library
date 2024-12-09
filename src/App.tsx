import {
    Cards,
    Colors,
    FontSize,
    Separator,
    GridLayout,
} from './components/index.tsx';
import {
    colorsData,
    colorsBgData,
    colorsVarData,
    buttonsData,
} from './data.ts';

const App = () => {
    return (
        <main className="container">
            <Cards />
            <Separator />

            <div style={{ marginTop: '10px' }}>
                <h2>Colors</h2>
                <Colors data={colorsData} />
                <Colors data={colorsBgData} />
                <Colors data={colorsVarData} />
            </div>

            <Separator />
            <div>
                <h2>Buttons</h2>
                <Colors data={buttonsData} />
                <a href="#" className="btn-complement-purple">
                    Complement btn
                </a>{' '}
                <a href="#" className="btn-complement-primary">
                    Complement
                </a>
            </div>

            <Separator />

            <div>
                <h2 className="mt-2 mb-1">Font Size</h2>
                <FontSize />
            </div>

            <Separator />

            <p className="responsive-test font-lg">
                Testing Responsive Breakpoint
            </p>

            <Separator />

            <div>
                <h2 className="mt-2 mb-1">Responsive Grid System</h2>
                <div className="row gap-2">
                    <GridLayout />
                    <GridLayout />
                    <GridLayout />
                    <GridLayout />
                </div>
            </div>
        </main>
    );
};

export default App;
