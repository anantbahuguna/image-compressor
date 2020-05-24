import React from "react";

const Tab = ({ activeTab, setActiveTab }) => {
    return (
        <div>
            <div className="tabs is-centered" id="tabs">
                <ul>
                    <li className={activeTab === "original" ? "is-active" : ""}>
                        <a onClick={() => setActiveTab("original")}>
                            <span className="icon is-small">
                                <i
                                    className="fas fa-image"
                                    aria-hidden="true"
                                ></i>
                            </span>
                            <span>Original</span>
                        </a>
                    </li>
                    <li
                        className={
                            activeTab === "compressed" ? "is-active" : ""
                        }
                    >
                        <a onClick={() => setActiveTab("compressed")}>
                            <span className="icon is-small">
                                <i
                                    className="fas fa-compress"
                                    aria-hidden="true"
                                ></i>
                            </span>
                            <span>Compressed</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Tab;
