import React, { useState } from "react";
import Hero from "./components/Hero";
import TabImages from "./components/TabImages";
import Footer from "./components/Footer";
import { ImageProvider } from "./context/ImageContext";
import ServiceWorkerWrapper from "./components/ServiceWorkerWrapper";

function App() {
    return (
        <ImageProvider>
            <div className="App">
                <ServiceWorkerWrapper />
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
