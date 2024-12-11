import {
    Cards,
    Colors,
    FontSize,
    GridLayout,
    Navbar,
    Separator,
} from '../components';
import {
    buttonsData,
    colorsBgData,
    colorsData,
    colorsVarData,
} from '../data.ts';

const SassyPlayGround = () => {
    return (
        <>
            <Navbar />
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
                    <div className="row gap-2 justify-center">
                        <GridLayout />
                        <GridLayout />
                        <GridLayout />
                        <GridLayout />
                    </div>
                </div>
                {/*Container Query*/}
                <div className="container-type">
                    <div className="containQuery">
                        <h1>Container Query</h1>
                        <p>
                            This container changes its background color based on
                            its width.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SassyPlayGround;
