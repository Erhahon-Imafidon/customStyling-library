const Intro = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-center">
                <div className="col-12-xs col-5-md">
                    <h2>
                        <div className="font-xxl">Black-Belt</div>
                        <div className="font-xxl text-secondary">
                            Your Website
                        </div>
                    </h2>
                    <p className="text-gray mt-2 mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a
                        href="#work"
                        className="btn-outlined-secondary text-secondary text-hover-white"
                    >
                        View Our Work
                    </a>
                </div>
                <div className="col-12-xs col-5-md">
                    <img src="/img/laptop.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
