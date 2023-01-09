import React, { useContext, useRef } from "react";
import Button from "./Button";
import Card from "./Card";
import Heading from "./Heading";
import Input from "./Input";
import { ContactCtx } from "./ContactContext";

const EditForm = (props) => {
	// const currentObj = props.currentObj;
	const useReducerObj = useContext(ContactCtx);

	const fNameRefE = useRef();
	const lNameRefE = useRef();
	const phNumRefE = useRef();
	const eMailRefE = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const obj = {
			firstName: fNameRefE.current.value,
			lastName: lNameRefE.current.value,
			phNumber: phNumRefE.current.value,
			email: eMailRefE.current.value,
		};

		useReducerObj.contactListObj.isEditHandler(false);
		useReducerObj.contactListObj.editHandler(obj);

		console.log("edit handler runs");
	};
	const classes = `absolute w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm  ${props.className}`;
	return (
		<div
			className={classes}
			// onClick={() => useReducerObj.contactListObj.isEditHandler(false)}
		>
			<form className="z-20" onSubmit={submitHandler}>
				<Card className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
					<Heading innerText="Add contact details to update" className="py-2" />
					<div className="bg-slate-300 ">
						<Input
							// onChange={() => {
							// 	console.log(fNameRefE.current.value);
							// }}
							// val={currentObj.firstName}
							ref={fNameRefE}
							for="fName"
							label="First Name :"
							className="p-2 "
						/>
						<Input
							// val={currentObj.lastName}
							ref={lNameRefE}
							for="lName"
							label="Last Name :"
							className="p-2"
						/>
						<Input
							// val={currentObj.phNumber}
							ref={phNumRefE}
							for="phNum"
							label="Phone Number :"
							className="p-2"
						/>
						<Input
							// val={currentObj.email}
							ref={eMailRefE}
							for="eMail"
							label="E-mail address :"
							className="p-2"
						/>
						<div className="flex pb-4 justify-evenly">
							<Button
								type="button"
								onClick={() =>
									useReducerObj.contactListObj.isEditHandler(false)
								}
								className="w-20 h-12 bg-red-200 rounded"
							>
								Cancel
							</Button>
							<Button type="submit" className="w-20 h-12 bg-green-200 rounded">
								Update
							</Button>
						</div>
					</div>
				</Card>
			</form>
		</div>
	);
};

export default EditForm;
