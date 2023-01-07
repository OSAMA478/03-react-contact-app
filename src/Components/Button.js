import React from "react";

const Button = (props) => {
	const classes = `${props.className} `;
	return (
		<button type={props.type} className={classes} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
