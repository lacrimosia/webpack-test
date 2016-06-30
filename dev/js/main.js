'use strict';

/*const $ = require('jquery');
let t = 50;
$('.box').text(t); */

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Angelo Carpenter';
    }
    render() {
        return <div>{this.displayName}</div>;
    }
}

render(<App />, document.getElementById("App"));
export default App;
