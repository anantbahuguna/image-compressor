import React, { useEffect, useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const ViewImage = () => {
    const { compressedImageContext } = useContext(ImageContext);
    const [compressedImage, setCompressedImage] = compressedImageContext;
    const {
        imageFile,
        imageLink,
        imageName,
        imageSize,
        showImage,
    } = compressedImage;
    useEffect(() => {
        if (imageLink) {
            document
                .getElementById("tabs")
                .scrollIntoView({ behavior: "smooth" });
        }
    });
    if (!imageLink) {
        return <button className="button is-loading"></button>;
    }
    return (
        <div className="columns is-mobile is-centered">
            <div className="column is-three-quarters-mobile is-half-tablet  is-one-quarter-desktop">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-3by3">
                            <img src={imageLink} alt={imageName} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <div
                                    className="has-background-primary has-text-white"
                                    style={S}
                                >
                                    {imageSize}
                                    <br />
                                    MB
                                </div>
                            </div>
                            <div className="content">
                                <p className="subtitle is-6">{imageName}</p>
                                {/* <div className="columns is-centered">
                                        <div className="column">
                                            <a
                                                className="button is-fullwidth is-small is-danger is-rounded is-outlined"
                                                href={imageLink}
                                                download={imageName}
                                            >
                                                <i className="fas fa-download"></i>
                                            </a>
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                        {/* <div className="content"></div> */}
                    </div>
                    {/* <footer className="card-footer">
                        <a
                            className=" card-footer-item"
                            href={imageLink}
                            download={imageName}
                        >
                            Download
                            <i className="fas fa-download"></i>
                        </a>
                    </footer> */}
                </div>
            </div>
        </div>
    );
};

export default ViewImage;

const S = {
    borderRadius: "20%",
    padding: "0.2rem 0.4rem",
};
