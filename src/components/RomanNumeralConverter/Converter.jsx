import React from 'react';
import "./Converter.css";
import Tabs from "../Tabs/Tabs";
import Input from "../Input/Input";
import Results from "../Results/Results";
import { ROMAN2NUMBER, NUMBER2ROMAN } from "../../constants";
import {toRoman, fromRoman, isInputValid} from "../../utils";

export default class Converter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: ROMAN2NUMBER,
			input: "",
			results: [],
			total: "",
			error: false	
		};

		this.tabSelectHandler = name => {
			this.setState(prevState => ({...prevState, selected: name, input: "", results: [], total: "", error: false}));
		};

		this.changeHandler = e => {
			const {value} = e.target;
			this.setState(prevState => ({...prevState, results: [], input: value.toString().toUpperCase() || "", error: false}));
		}

		this.submitHandler = e => {
			e.preventDefault();
			if (this.state.selected === NUMBER2ROMAN || isInputValid(this.state.input)) {
				const {results, total} = this.state.selected === ROMAN2NUMBER ? fromRoman(this.state.input) : toRoman(this.state.input);
				this.setState(prevState => ({...prevState, results, total}));
			}	else {
				this.setState(prevState => ({...prevState, error: true}));
			}		
		};
	}	

	render() {
    return(
			<div className="converter">
				<Tabs selected={this.state.selected} onTabSelect={this.tabSelectHandler} />
				<Input input={this.state.input} onChange={this.changeHandler} selected={this.state.selected} onSubmit={this.submitHandler} />
				{!!(this.state.results || []).length ? 
					<Results selected={this.state.selected} results={this.state.results} input={this.state.input} output={this.state.total} />
					: null}	
				{this.state.error ? <span className="error">Invalid Input</span> : null}			
			</div>
		);
  }
}
