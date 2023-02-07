import React, { useContext, useRef } from "react";
import Button from "./Button";
import Card from "./Card";
import Heading from "./Heading";
import Input from "./Input";
import { ContactCtx } from "./ContactContext";

const ModalForm = (props) => {
	const useReducerObj = useContext(ContactCtx);

	const fNameRef = useRef();
	const lNameRef = useRef();
	const phNumRef = useRef();
	const eMailRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const obj = {
			id: Math.random(),
			firstName: fNameRef.current.value,
			lastName: lNameRef.current.value,
			phNumber: phNumRef.current.value,
			email: eMailRef.current.value,
		};
		props.modalHandler(false);
		useReducerObj.contactListObj.addHandler(obj);

		console.log("submit handler runs");
	};
	const classes = `absolute w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm ${props.className}`;
	return (
		<div
			className={classes}
			// onClick={() => props.modalHandler(false)	}
		>
			<form onSubmit={submitHandler}>
				<Card className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
					<Heading innerText="Add contact details" className="py-2" />
					<div className="bg-slate-300 ">
						<Input
							ref={fNameRef}
							for="fName"
							label="First Name :"
							className="p-2 "
						/>
						<Input
							ref={lNameRef}
							fro="lName"
							label="Last Name :"
							className="p-2"
						/>
						<Input
							ref={phNumRef}
							fro="phNum"
							label="Phone Number :"
							className="p-2"
						/>
						<Input
							ref={eMailRef}
							fro="eMail"
							label="E-mail address :"
							className="p-2"
						/>
						<div className="flex pb-4 justify-evenly">
							<Button
								type="button"
								onClick={() => props.modalHandler(false)}
								className="w-20 h-12 bg-red-200 rounded"
							>
								Cancel
							</Button>
							<Button type="submit" className="w-20 h-12 bg-green-200 rounded">
								Add
							</Button>
						</div>
					</div>
				</Card>
			</form>
		</div>
	);
};

export default ModalForm;
