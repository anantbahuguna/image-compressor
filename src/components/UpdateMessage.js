import React from "react";

const UpdateMessage = ({ showReload, reloadPage }) => {
    if (showReload) {
        return (
            <article class="message is-dark">
                <div class="message-header has-text-centered">
                    <p>A new version is available!</p>
                    <span>
                        <button
                            className="button is-black"
                            onClick={reloadPage}
                        >
                            RELOAD
                        </button>
                    </span>
                </div>
            </article>
        );
    }
    return null;
};

export default UpdateMessage;
