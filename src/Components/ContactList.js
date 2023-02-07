import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
	const classes = `${props.className} `;

	return (
		<div className={classes}>
			<ContactCard className="bg-slate-400"></ContactCard>
		</div>
	);
};

export default ContactList;
