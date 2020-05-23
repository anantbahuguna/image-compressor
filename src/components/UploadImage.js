import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";
import handleImageUpload from "../actions/compressImage";

const UploadImage = () => {
    const {
        originalImageContext,
        compressedImageContext,
        tabContext,
    } = useContext(ImageContext);
    const [originalImage, setOriginalImage] = originalImageContext;
    const [compressedImage, setCompressedImage] = compressedImageContext;
    const [activeTab, setActiveTab] = tabContext;
    const handleChange = async (e) => {
        const reader = new FileReader();
        const imageFile = e.target.files[0];

        if (imageFile) {
            reader.onload = () => {
                const imageLink = reader.result;
                setOriginalImage({
                    imageFile,
                    imageLink,
                    imageName: imageFile.name,
                    imageSize: (imageFile.size / 1024 / 1024).toFixed(2),
                });
            };
            console.log(imageFile.size);

            reader.readAsDataURL(imageFile);
            setActiveTab("original");

            const reader2 = new FileReader();
            const compressed = await handleImageUpload(imageFile);
            console.log(compressed);
            reader2.readAsDataURL(compressed);
            reader2.onload = () => {
                const imageLink = reader2.result;
                setCompressedImage({
                    imageFile: compressed,
                    imageLink,
                    imageName: `${imageFile.name}`,
                    imageSize: (compressed.size / 1024 / 1024).toFixed(2),
                });
            };
        }
    };
    return (
        <div className="columns is-centered">
            <div className="column has-text-centered">
                <div className="field">
                    <div className="file is-primary">
                        <label className="file-label">
                            <input
                                className="file-input"
                                type="file"
                                name="originalImage"
                                accept="image/*"
                                onChange={handleChange}
                            />
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">Upload Image</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadImage;
