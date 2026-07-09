import VideoOneBg from "@/assets/images/backgrounds/video-one-bg.jpg";
import YoutubeFrem from "@/components/elements/YoutubeFrem";
import JarallaxSection from "@/components/elements/JarallaxSection";

export default function VideoOne() {
    return (
        <>
            {/*Video One Start*/}
            <section className="video-one">
                <div className="container">
                    <div className="video-one__inner">
                        <div className="video-one__bg-box">
                            <div className="video-one__video-link">
                                <YoutubeFrem video="rbFoRH2deeY" className="video-popup">
                                    <div className="video-one__video-icon">
                                        <span className="fa fa-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </YoutubeFrem>
                            </div>
                            <JarallaxSection
                                bgOnly
                                className="video-one__bg"
                                imgSrc={VideoOneBg.src}
                                speed={0.2}
                                imgPosition="50% 0%"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/*Video One End*/}
        </>
    );
}
