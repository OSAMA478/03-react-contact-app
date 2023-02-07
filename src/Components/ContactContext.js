import React from "react";

import { createContext } from "react";
export const ContactCtx = createContext();
const ContactContext = (props) => {
	return (
		<ContactCtx.Provider value={props.value}>
			{props.children}
		</ContactCtx.Provider>
	);
};

export default ContactContext;
