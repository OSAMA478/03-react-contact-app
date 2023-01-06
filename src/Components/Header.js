import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import addIcon from "../icons/add-contact.png";
import phoneBook from "../icons/phonebook.png";

const Header = () => {
	return (
		<header className="fixed flex items-center justify-between w-screen h-20 bg-slate-500">
			<Icon className="h-full p-2 m-2 fix" src={phoneBook} />
			<p className="text-4xl font-semibold text-white ">My contacts</p>
			<Button className="flex items-center justify-center w-16 h-16 p-2 m-2 text-4xl bg-green-400 rounded-full ">
				<Icon className="h-full" src={addIcon} />
			</Button>
		</header>
	);
};

export default Header;
