import React, { useState, createContext } from "react";

export const ImageContext = createContext();

export const ImageProvider = (props) => {
    const [originalImage, setOriginalImage] = useState({
        imageFile: "",
        imageLink: "",
        imageName: "",
        imageSize: "",
    });

    const [compressedImage, setCompressedImage] = useState({
        imageFile: "",
        imageLink: "",
        imageName: "",
        imageSize: "",
    });
    const [activeTab, setAvtiveTab] = useState("");
    return (
        <ImageContext.Provider
            value={{
                originalImageContext: [originalImage, setOriginalImage],
                compressedImageContext: [compressedImage, setCompressedImage],
                tabContext: [activeTab, setAvtiveTab],
            }}
        >
            {props.children}
        </ImageContext.Provider>
    );
};
