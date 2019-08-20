import React from 'react';

const getHelloAsync = () => {
    import {HelloAsync} from "./Hello-async";

    return HelloAsync;
};

const getInfoAsync = () => {
    import {InfoAsync} from "./Info-async";

    return InfoAsync;
};

const App = () => {
    const InfoAsync = getInfoAsync();
    const HelloAsync = getHelloAsync();
    return (
        <div>
            <h1>Welcome to Meteor!</h1>
            <HelloAsync />
            <InfoAsync />
        </div>
    );
};

export default App;
