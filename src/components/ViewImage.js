import React, { useState, useEffect } from "react";

const ViewImage = ({ image, modalState, toggleModal }) => {
    const { imageFile, imageLink, imageName, imageSize, showImage } = image;
    useEffect(() => {
        if (modalState) {
            document.documentElement.classList.add("is-clipped");
        } else {
            document.documentElement.classList.remove("is-clipped");
        }
    });
    if (!modalState) {
        return null;
    }
    return (
        <div className="container">
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    {/* <div className="columns is-mobile is-centered">
                        <div className="column is-three-quarters-mobile"> */}
                    <div className="card" style={{ margin: "3rem" }}>
                        <div className="card-image">
                            <figure className="image ">
                                <img
                                    src={imageLink}
                                    alt={imageName}
                                    style={{
                                        maxHeight: "50vh",
                                    }}
                                />
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
                        <footer className="card-footer">
                            <a
                                className=" card-footer-item"
                                href={imageLink}
                                download={imageName}
                            >
                                Download
                                <i className="fas fa-download"></i>
                            </a>
                        </footer>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
                <button
                    className="modal-close is-large"
                    aria-label="close"
                    onClick={() => toggleModal()}
                ></button>
            </div>
        </div>
    );
};

export default ViewImage;

const S = {
    borderRadius: "20%",
    padding: "0.2rem 0.4rem",
};
