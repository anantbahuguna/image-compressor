import React from "react";
import UploadImage from "./UploadImage";
import compressImg from "../images/compress2.png";

const Hero = () => {
    return (
        <section className="hero is-medium is-light is-bold" style={S}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-mobile">
                        <div className="column title">
                            <h1 style={{ fontWeight: 500 }}>
                                Image Compressor
                            </h1>
                        </div>
                        <div className="column title is-one-quarter-mobile is-three-quarters-desktop is-one-half-tablet">
                            <figure className="image is-64x64 is-desktop">
                                <img src={compressImg}></img>
                            </figure>
                        </div>
                    </div>
                    <h2 className="subtitle">✔ Download Option</h2>
                    <h2 className="subtitle">✔ Offline Support</h2>
                    <h2 className="subtitle">✔ Install Option</h2>
                    <br />
                    <UploadImage />
                </div>
            </div>
        </section>
    );
};

export default Hero;

const S = {
    fontFamily: "'Montserrat', sans-serif",
};
