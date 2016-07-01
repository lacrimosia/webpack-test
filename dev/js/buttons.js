'use strict';

import React from 'react';
require("../scss/app.scss");
var data = require("../data/data.json");
var $ = require('jquery');
var _ = require('lodash');
var FontAwesome = require('react-fontawesome');
var classNames = require('classnames');


class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.traits = data.traits;
        this.shuffleArray = _.shuffle(this.traits);
    }
    render() {
        return (<div className="traits">
        	{this.shuffleArray.map(function(key, value){
        			return <div className={"sele "+(value+parseInt(1))} key={value}><button className={"traitsButton " + this.shuffleArray[value].type} id={value} tabindex={value + 1}><FontAwesome className='xmark' name='times-circle' size='lg'/></button><span for={value}>{this.shuffleArray[value].name}</span></div>
        		}, this)}
        	<div className="final animated fadeIn">
            <canvas id="graph" width="300" height="300"></canvas>
            <div className="tally">
            <h3></h3>
            <p></p>
        	</div>
        	<div className="percentage"></div>
            <div className="theTraits"></div>
        	   </div>
        	</div>
        	);
    }
}

export default Buttons;
