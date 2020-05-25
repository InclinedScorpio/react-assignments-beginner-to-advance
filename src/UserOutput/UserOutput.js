import React from "react";

const UserOutput = props => {
	let style = {
		fontSize: "40px",
		color: "green"
	};
	return (
		<div className="UserOutput" style={style}>
			<p>{props.p1}</p>
			<p>{props.p2}</p>
		</div>
	);
};

export default UserOutput;
