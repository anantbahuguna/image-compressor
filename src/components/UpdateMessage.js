import React from "react";

const UpdateMessage = ({ showReload }) => {
    if (showReload) {
        return (
            <article class="message is-dark">
                <div class="message-header has-text-centered">
                    <p>A new version is available!</p>
                    <span>RELOAD</span>
                </div>
            </article>
        );
    }
    return null;
};

export default UpdateMessage;
