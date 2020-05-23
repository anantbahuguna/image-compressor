import React, { useState } from "react";

const UploadImage = ({ setOriginalImage }) => {
    const handleChange = (e) => {
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
