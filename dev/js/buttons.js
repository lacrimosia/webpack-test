'use strict';

import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Buttons Component';
    }
    render() {
        return <div>{this.displayName}</div>;
    }
}

export default Buttons;
