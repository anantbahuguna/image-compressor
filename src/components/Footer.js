import React from "react";

const Footer = () => {
    return (
        <footer className="footr-wrapper" style={{ marginBottom: 10 }}>
            <div className="content has-text-centered">
                <a
                    href="https://github.com/anant-bahuguna/image-compressor"
                    target="_blank"
                    className="button"
                >
                    <span className="icon">
                        <i className="fab fa-github"></i>
                    </span>
                    <span>Open Sourced on GitHub</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
