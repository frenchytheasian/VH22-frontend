import React, { useState, useEffect } from "react";

function Data() {
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000")
            .then(res => res.json())
            .then(
                (result) => {
                    setLoaded(true);
                    setData(result);
                    console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setLoaded(true);
                    setError(error);
                    console.error(error);
                }
            )
    }, [])

    if (!loaded) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return (
            <div>
                {data.message}
            </div>
        );
    }
}

export default Data;