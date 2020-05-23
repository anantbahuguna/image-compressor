import React, { useState } from "react";
import Hero from "./components/Hero";
import TabImages from "./components/TabImages";
import Footer from "./components/Footer";
import { ImageProvider } from "./context/ImageContext";

function App() {
    return (
        <ImageProvider>
            <div className="App">
                <div>
                    <Hero />
                    <br />
                    <TabImages />
                </div>
                <br />
                <br />
                <Footer />
            </div>
        </ImageProvider>
    );
}

export default App;
