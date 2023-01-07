import React from "react";

const Icon = (props) => {
	const classes = `w-10 h-10 p-1 ${props.className}`;
	return <img className={classes} src={props.src} alt={props.alt} />;
};

export default Icon;
