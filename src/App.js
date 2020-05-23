import React, { useState } from "react";
import Hero from "./components/Hero";
import ImageCard from "./components/ImageCard";
import ViewImage from "./components/ViewImage";
import Footer from "./components/Footer";

function App() {
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
    const [modalState, setModalState] = useState("");
    const toggleModal = () => {
        setModalState(!modalState);
    };
    return (
        <div className="App">
            <div>
                <Hero setOriginalImage={setOriginalImage} />
                <br />
                <br />
                <ImageCard
                    image={originalImage}
                    setCompressedImage={setCompressedImage}
                    toggleModal={toggleModal}
                />
                <ViewImage
                    image={compressedImage}
                    modalState={modalState}
                    toggleModal={toggleModal}
                />
            </div>
            <br />
            <br />
            <Footer />
        </div>
    );
}

export default App;
