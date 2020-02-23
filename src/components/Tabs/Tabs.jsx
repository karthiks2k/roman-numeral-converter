import React from 'react';
import "./Tabs.css";
import classNames from "classnames";
import { ROMAN2NUMBER, NUMBER2ROMAN } from "../../constants";

function Tabs(props) {
	return (
		<div className="tabs">
			<div className={classNames({'selected': props.selected === ROMAN2NUMBER})} onClick={() => props.onTabSelect(ROMAN2NUMBER)}>
				<span>
					Roman -> Number <span className="instructions">(Click here)</span>
					</span>
			</div>
			<div className={classNames({'selected': props.selected === NUMBER2ROMAN})} onClick={() => props.onTabSelect(NUMBER2ROMAN)}>
				<span>
					Number -> Roman <span className="instructions">(Click here)</span>
					</span>
			</div>
		</div>
	);
}


export default Tabs;