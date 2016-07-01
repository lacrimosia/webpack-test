'use strict';

import React from 'react';
require("../scss/app.scss");

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Buttons Component';
    }
    render() {
        return (<div>
        			<p>{this.displayName}</p>
        		</div>
        	);
    }
}

export default Buttons;
