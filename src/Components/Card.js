import React from "react";

const Card = (props) => {
	const classes = `rounded-xl ${props.className}`;
	return <div className={classes}></div>;
};

export default Card;
