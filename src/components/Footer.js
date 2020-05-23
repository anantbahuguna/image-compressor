import React from "react";

const Footer = () => {
    return (
        <footer className="footr-wrapper" style={{ marginBottom: 10 }}>
            <div className="content has-text-centered">
                <button className="button">
                    <span className="icon">
                        <i className="fab fa-github"></i>
                    </span>
                    <span>Open Sourced on GitHub</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
