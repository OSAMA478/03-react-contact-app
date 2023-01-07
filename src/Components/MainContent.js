import React from "react";

const MainContent = (props) => {
	const classes = `${props.className} p-2 h-screen `;
	return <main className={classes}>{props.children}</main>;
};

export default MainContent;
