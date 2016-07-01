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
        this.masculine = 0; // gather all masculine selected traits
        this.feminine = 0; // gather all feminine traits
        this.ctx = document.getElementById("graph");
		this.selected = false;
		// keyboard shortcuts for accessibility
		this.current = 0; // set the current to first slide
		this.enabled = false; // hide intro screen
		this.disableKey = true; // disable keyboard until intro screen is hidden
		this.userSelect = []; // this pushes the selected traits
		this.current = 0;
    }

    getIdSelection(Id){
    	this.current = 0;
         _.forEach(this.shuffleArray, function(value, key) {
                if (key == Id) {
                    this.current = Id;
                }
            });
            this.shuffleArray[current].selected = !this.shuffleArray[current].selected;
            console.log("when clicked", this.shuffleArray[current].name + ': ' + this.shuffleArray[current].selected);
            // toggle classes on click
            this.traitToggle(this.shuffleArray[current].selected, Id, this.shuffleArray[current].type, this.shuffleArray[current].name);

            // checks if any traits are selected or not
            if (this.masculine == 0 && this.feminine == 0) {
                this.selected = false;
            } else {
                this.selected = true;
            }

            return this.current;
    }

    traitToggle(selection, ob, trait, name) {
            // selection - the current selected key
            // True - element selected, False - element not selected
            // ob - the selected element       
            // if selected add class green, if button is unselcted add class red
            if (selection == true) {
                $('#' + ob).addClass('green'); // add class green
                $('#' + ob).html('<i class="fa fa-check-circle"></i>');
                this.selectedTraits(trait);

                // push user selected traits to show later
                this.userSelect.push({
                    choice: name,
                    type: trait
                });
                //  console.log('userSelect', userSelect);

                if ($('#' + ob).hasClass('red')) {
                    $('#' + ob).removeClass('red'); // remove class red if already added
                }

            } else {
                $('#' + ob).addClass('red'); // add class red
                $('#' + ob).html('<i class="fa fa-times-circle"></i>');
                this.unselectedTraits(trait);
                // find unselected trait and remove from list
                // var findRemoveTrait = _.findIndex(userSelect, {'choice': name, 'type': trait});

                var removeElement = _.reject(userSelect, { 'choice': name, 'type': trait });
                // var sortedListSelected = _.orderBy(removeElement, ['choice', name]);
                //  console.log('removeElement', removeElement);
                this.userSelect = removeElement;

                console.log('removed userSelect', this.userSelect);

                if ($('#' + ob).hasClass('green')) {
                    $('#' + ob).removeClass('green'); // remove class green if already added
                }
                return this.userSelect;
            }
        }

    selectedTraits(trait) {
            // check type of trait selected and push into proper array
            if (trait === 'masculine') {
                this.masculine += 1;
                console.log('masculine', this.masculine);
                return this.masculine;
            } else if (trait === 'feminine') {
                this.feminine += 1;
            } else {
                console.log("no trait type");
            }
        }

      unselectedTraits(trait) {
            // check type of trait selected and push into proper array
            if (trait === 'masculine' && masculine > 0) {
                this.masculine -= 1;
                console.log('masculine', this.masculine);
                return masculine;
            } else if (trait === 'feminine' && this.feminine > 0) {
                this.feminine -= 1;
            } else {
                console.log("no trait type");
            }
        }

getID(item, e){
	//this.getIdSelection.bind(this, this.props.id)
	console.log(item.id);
}

    render() {
        return (<div className="traits">

        	{this.shuffleArray.map((key, value) => {
        		let id = this.getID.bind(this, value);
        			return <div className={"sele "+(value+parseInt(1))} key={value}><button onClick={this.getID.bind(this)}className={"traitsButton " + this.shuffleArray[value].type} id={value} tabindex={value + 1}><FontAwesome className='xmark' name='times-circle'/></button><span for={value}>{this.shuffleArray[value].name}</span></div>
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
