import React from 'react';
import "./Results.css";
import { ROMAN2NUMBER } from "../../constants";

function Results(props) {
	return (
		<>
			<div className="results">
				<div>
					{props.input}
				</div>
				<div>
					=
				</div>
				<div>
					{props.output}
				</div>
			</div>		
			<div className="results__header">
				<div>
					{props.selected === ROMAN2NUMBER ? 'Roman numeral' : 'Number'}
				</div>
				<div>
					{props.selected === ROMAN2NUMBER ? 'Number' : 'Roman Letter'}
				</div>
			</div>
			{props.results.map((result, i) => 
				<div className="results__content" key={i}>
					<div>
						{result.symbol}
					</div>
					<div>
						{result.value}
					</div>
				</div>			
			)}
		</>
	);
}

export default Results;