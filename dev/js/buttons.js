'use strict';

import React from 'react';
require("../scss/app.scss");
var data = require("../data/data.json");
var $ = require('jquery');


class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Buttons Component';
        this.title = data.title;
    }
    render() {
        return (<div>
        			<h1>{this.title}</h1>
        		</div>
        	);
    }
}

export default Buttons;
