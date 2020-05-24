import React, { useContext } from "react";
import ImageCard from "./ImageCard";
import ViewImage from "./ViewImage";
import Tab from "./Tab";
import { ImageContext } from "../context/ImageContext";

const TabImages = () => {
    const { tabContext } = useContext(ImageContext);
    const [activeTab, setActiveTab] = tabContext;
    switch (activeTab) {
        case "original":
            return (
                <>
                    <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
                    <br />
                    <ImageCard />
                </>
            );
        case "compressed":
            return (
                <>
                    <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
                    <br />
                    <ViewImage />
                </>
            );
        default:
            return null;
    }
};

export default TabImages;
