import React from 'react';
import "./Input.css";
import { ROMAN2NUMBER } from "../../constants";

function Input(props) {
	return (
		<form className="input" onSubmit={props.onSubmit}>
			<input 
				name="roman"
				onChange={props.onChange}
				value={props.input}
				type={`${props.selected === ROMAN2NUMBER ? 'text' : 'number'}`} 
				placeholder={`${props.selected === ROMAN2NUMBER ? 'Enter roman numerals' : 'Enter number'}`}
				min="1" 
				max="4999" />
			<button type="submit">Convert</button>		
		</form>
	);
}


export default Input;