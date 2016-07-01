'use strict';

/*const $ = require('jquery');
let t = 50;
$('.box').text(t); */

import React from 'react';
import {render} from 'react-dom';
import Buttons from './buttons';
import Footer from './footer';
import Header from './Header';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
        			<Header />
        			<Buttons position={Buttons.id}/>
        			<Footer />
        	   </div>
    }
}

render(<App />, document.getElementById("App"));
export default App;
