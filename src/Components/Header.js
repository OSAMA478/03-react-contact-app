import React, { useContext } from "react";
import Button from "./Button";
import Icon from "./Icon";

import phoneBook from "../icons/phonebook.png";
import { MdPersonAddAlt1 } from "react-icons/md";
import { ContactCtx } from "./ContactContext";

const Header = (props) => {
	const useReducerObj = useContext(ContactCtx);
	// const onAddHandler = () => {
	// 	// console.log(useReducerObj.contactListObj.addHandler);
	// 	useReducerObj.contactListObj.addHandler();
	// };

	return (
		<header className="fixed z-10 flex items-center justify-between w-screen h-20 bg-slate-500">
			<Icon className="p-2 sm:w-14 sm:h-14 " src={phoneBook} />
			<p className="text-4xl font-semibold text-white ">My contacts</p>
			<Button className="flex items-center justify-center p-2 m-2 text-4xl bg-green-400 rounded-full sm:w-14 sm:h-14 ">
				<MdPersonAddAlt1
					className="sm:w-14 sm:h-14"
					onClick={() => props.modalHandler(true)}
				/>
			</Button>
		</header>
	);
};

export default Header;
