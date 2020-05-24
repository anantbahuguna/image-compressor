import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const Footer = () => {
    const { compressedImageContext } = useContext(ImageContext);
    const [compressedImage, setCompressedImage] = compressedImageContext;
    const { imageLink, imageName } = compressedImage;
    return (
        <footer className="footr-wrapper" style={{ marginBottom: 10 }}>
            {imageLink ? (
                <>
                    <div className="has-text-centered">
                        <a
                            href={imageLink}
                            download={imageName}
                            className="button is-danger"
                        >
                            <span className="icon">
                                <i className="fas fa-download"></i>
                            </span>
                            <span>Download</span>
                        </a>
                    </div>
                    <br />
                </>
            ) : null}
            <div className="content has-text-centered">
                <a
                    href="https://github.com/anant-bahuguna/image-compressor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                >
                    <span className="icon">
                        <i className="fab fa-github"></i>
                    </span>
                    <span>Open Sourced on GitHub</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
