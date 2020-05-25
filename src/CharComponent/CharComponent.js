import React from "react";
import "./CharComponent.css";

let CharComponent = props => {
	return (
		<span className="charDesign" onClick={props.charClicked}>
			{props.my_char}
		</span>
	);
};

export default CharComponent;
