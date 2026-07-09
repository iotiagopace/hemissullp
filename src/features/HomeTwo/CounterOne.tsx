import CounterUp from "@/components/elements/CounterUp";

export default function CounterOne() {
    return (
        <>
            {/*Counter One Start*/}
            <section className="counter-one">
                <div className="container">
                    <div className="row">
                        {/*Single Counter One Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="counter-one__single-icon">
                                        <span className="icon-vetted"></span>
                                    </div>

                                    <div className="counter-one__single-content">
                                        <div className="counter-one__single-counter">
                                            <h2>
                                                <CounterUp ending={700} />
                                            </h2>
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="counter-one__text">
                                            Expert Cleaners
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Single Counter One End*/}
                        {/*Single Counter One Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="counter-one__single-icon">
                                        <span className="icon-medal"></span>
                                    </div>

                                    <div className="counter-one__single-content">
                                        <div className="counter-one__single-counter">
                                            <h2>
                                                <CounterUp ending={40} />
                                            </h2>
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="counter-one__text">
                                            Winning award
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Single Counter One End*/}
                        {/*Single Counter One Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="counter-one__single-icon">
                                        <span className="icon-ai-application"></span>
                                    </div>

                                    <div className="counter-one__single-content">
                                        <div className="counter-one__single-counter">
                                            <h2>
                                                <CounterUp ending={200} />
                                            </h2>
                                            <span className="k">k</span>
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="counter-one__text">
                                            Cleaning Projects
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Single Counter One End*/}
                        {/*Single Counter One Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="counter-one__single-icon">
                                        <span className="icon-review"></span>
                                    </div>

                                    <div className="counter-one__single-content">
                                        <div className="counter-one__single-counter">
                                            <h2>
                                                <CounterUp ending={6} />
                                            </h2>
                                            <span className="k">k</span>
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="counter-one__text">
                                            Client Review
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Single Counter One End*/}
                    </div>
                </div>
            </section>
            {/*Counter One End*/}
        </>
    );
}
