import React, { useReducer, useState } from "react";
import ContactContext from "./Components/ContactContext";

import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

import ModalForm from "./Components/ModalForm";

const reducer = (state, action) => {
	switch (action.type) {
		case "DELETE":
			return state.filter((obj) => obj.id !== action.obj.id);
		case "ADD":
			console.log(action.obj);

			return [action.obj, ...state];
		default:
			return state;
	}
};

const App = () => {
	const DUMMY_LIST = [
		{
			id: Math.random(),
			firstName: "osama",
			lastName: "shaikh",
			phNumber: 918976748334,
			email: "shaikhosama478@gmail.com",
		},
		{
			id: Math.random(),
			firstName: "azhar",
			lastName: "shaikh",
			phNumber: 919004488013,
			email: "shaikhjazhar72@gmail.com",
		},
		{
			id: Math.random(),
			firstName: "mansoor",
			lastName: "khan",
			phNumber: 918828674110,
			email: "khanman12345soor@gmail.com",
		},
	];
	const [isModal, setIsModal] = useState(false);
	const [contactList, dispatch] = useReducer(reducer, DUMMY_LIST);
	const contactListObj = {
		contactList: contactList,
		addHandler: (obj) => {
			useReducerObj.dispatch({
				type: "ADD",
				obj: obj,
			});
		},
		deleteHandler: (obj) => {
			useReducerObj.dispatch({
				type: "DELETE",
				obj: obj,
			});
		},
		modalHandler: (boolean) => setIsModal(boolean),
	};
	const useReducerObj = { contactListObj, dispatch };
	return (
		<div className="relative h-screen">
			<ContactContext value={useReducerObj}>
				<Header modalHandler={setIsModal} />
				{isModal && <ModalForm modalHandler={setIsModal} />}
				<MainContent className="max-w-4xl pt-20 mx-auto my-0 ">
					<ContactList className="h-full p-2 rounded-lg" />
				</MainContent>
			</ContactContext>
		</div>
	);
};

export default App;
