import React from "react";

let ValidationComponent = props => {
	let message = "";
	if (props.user_text < 5) {
		message = "Text Too Small";
	}
	if (props.user_text > 10) {
		message = "Text Too Large";
	}
	return (
		<div>
			<p>{message}</p>
		</div>
	);
};

export default ValidationComponent;
