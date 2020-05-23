import React, { useState, useEffect } from "react";
import * as serviceWorker from "../serviceWorker";
import UpdateMessage from "./UpdateMessage";

const ServiceWorkerWrapper = () => {
    const [showReload, setShowReload] = useState(false);
    const [waitingWorker, setWaitingWorker] = useState(null);

    const onSWUpdate = (registration) => {
        setShowReload(true);
        setWaitingWorker(registration.waiting);
    };

    useEffect(() => {
        serviceWorker.register({ onUpdate: onSWUpdate });
    }, []);

    const reloadPage = () => {
        if (waitingWorker) {
            waitingWorker.postMessage({ type: "SKIP_WAITING" });
            setShowReload(false);
            window.location.reload(true);
        }
    };

    return <UpdateMessage showReload={showReload} onClick={reloadPage} />;
};

export default ServiceWorkerWrapper;
