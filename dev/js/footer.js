import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="menuButtonBottom">
             	<p className="selTraitEmerge"></p>
        		<button className="finish btn">
           	 		Finish <i className="fa fa-arrow-right"></i>
        		</button>
    		</div>
        	);
    }
}

export default Footer;
