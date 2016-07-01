import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    reloadPage(){
    	location.reload();
    }

    render() {
        return (<div className="header">
        <div className="titles">
            <h5>Conventional Gender Attributes - What attributes most align with your sense of self?</h5>
        </div>
        <div className="menu">
            <button className="reload btn" title="Reload" onClick={this.reloadPage.bind()}><i className="fa fa-refresh"></i> Reload</button>
            <button className="help btn" title="Help Menu"><i className="fa fa-question-circle"></i> Help</button>
        </div>
    </div>
        	);
    }
}

export default Header;
