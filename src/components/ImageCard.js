import React, { useState, useEffect, useContext } from "react";
import handleImageUpload from "../actions/compressImage";
import { ImageContext } from "../context/ImageContext";

const ImageCard = () => {
    const { originalImageContext, compressedImageContext } = useContext(
        ImageContext
    );
    const [isLoading, setIsLoading] = useState("");
    const [originalImage, setOriginalImage] = originalImageContext;
    const [compressedImage, setCompressedImage] = compressedImageContext;
    const { imageFile, imageLink, imageName, imageSize } = originalImage;

    useEffect(() => {
        if (imageLink) {
            document
                .getElementById("tabs")
                .scrollIntoView({ behavior: "smooth" });
        }
    });

    // const handleClick = async () => {
    //     setIsLoading("is-loading");
    //     const reader = new FileReader();
    //     const compressed = await handleImageUpload(imageFile);
    //     console.log(compressed);
    //     reader.readAsDataURL(compressed);
    //     reader.onload = () => {
    //         const imageLink = reader.result;
    //         setCompressedImage({
    //             imageFile: compressed,
    //             imageLink,
    //             imageName: `compressed - ${imageName}`,
    //             imageSize: (compressed.size / 1024 / 1024).toFixed(2),
    //         });
    //     };
    //     // toggleModal();
    //     setIsLoading("");
    // };
    if (imageLink) {
        return (
            <div className="columns is-mobile is-centered" id="image-card">
                <div className="column is-three-quarters-mobile is-half-tablet  is-one-quarter-desktop">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image ">
                                <img src={imageLink} alt={imageName} />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <div
                                        className="has-background-warning"
                                        style={S}
                                    >
                                        {imageSize}
                                        <br />
                                        MB
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="subtitle is-6">{imageName}</p>
                                    {/*<button
                                        className={
                                            "button is-danger is-small is-rounded is-outlined " +
                                            isLoading
                                        }
                                        onClick={handleClick}
                                    >
                                        Compress
                                    </button> */}
                                </div>
                            </div>

                            {/* <div className="content"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default ImageCard;

const S = {
    borderRadius: "20%",
    padding: "0.2rem 0.4rem",
};
