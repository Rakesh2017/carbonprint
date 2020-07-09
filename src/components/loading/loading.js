import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";
import React from 'react';

/* can use props for styling */
const LoadingIndicator = ({ styling }) => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress && <div
            style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
        <Loader type="ThreeDots" color="white" height="100" width="100" />
        </div>
    );
}
export default LoadingIndicator;
