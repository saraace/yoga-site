import { useState, useEffect } from "react"; 

const defaultImageState = { image: undefined, status: "loading" }

const useImage = (url) => {
    const res = useState(defaultImageState)
    const image = res[0].image;
    const status = res[0].status;

    const setState = res[1];

    useEffect(() => {
        if (!url) return;
        const img = document.createElement("img");

        function onload() {
            setState({ image: img, status: "loaded" });
        }

        function onerror() {
            setState({ image: undefined, status: "failed" });
        }

        img.addEventListener("load", onload);
        img.addEventListener("error", onerror);
        img.src = url;

        return () => {
            img.removeEventListener("load", onload);
            img.removeEventListener("error", onerror);
            setState(defaultImageState);
        };
    }, [url]);

    return [image, status];
}

export default useImage;