const Work = () => {
    return (
        <section id="work" className="mt-5">
            <div className="container">
                <h2 className="mb-2">Some of Our Work</h2>
                <div className="row gap-2">
                    <div className="col-12-xs col-6-md col-3-lg">
                        <div className="card p-0">
                            <h3 className="card-title m-1">Mario Club</h3>
                            <img src="/img/mario.png" alt="" />
                            <p className="m-1">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Totam, hic!
                            </p>
                        </div>
                    </div>
                    <div className="col-12-xs col-6-md col-3-lg">
                        <div className="card p-0">
                            <h3 className="card-title m-1">Ninja Food</h3>
                            <img src="/img/food.png" alt="" />
                            <p className="m-1">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Totam, hic!
                            </p>
                        </div>
                    </div>
                    <div className="col-12-xs col-6-md col-3-lg">
                        <div className="card p-0">
                            <h3 className="card-title m-1">Just Add Marmite</h3>
                            <img src="/img/marmite.png" alt="" />
                            <p className="m-1">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Totam, hic!
                            </p>
                        </div>
                    </div>
                    <div className="col-12-xs col-6-md col-3-lg">
                        <div className="card p-0">
                            <h3 className="card-title m-1">Ninja Notes</h3>
                            <img src="/img/notes.png" alt="" />
                            <p className="m-1">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Totam, hic!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-center mt-2">
                    <button className="btn-secondary text-white font-md">
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Work;
