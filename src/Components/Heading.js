import React from "react";

const Heading = (props) => {
	const classes = `bg-black text-white text-center font-bold ${props.className}`;
	return <div className={classes}>{props.innerText}</div>;
};

export default Heading;
