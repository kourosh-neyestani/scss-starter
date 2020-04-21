import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";

const Root = () => {
    return (
        <div>
            <h1>Welcome!</h1>
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();