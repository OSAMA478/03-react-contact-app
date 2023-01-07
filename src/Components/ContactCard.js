import React, { useContext } from "react";

import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { ContactCtx } from "./ContactContext";

const ContactCard = (props) => {
	const reducerObj = useContext(ContactCtx);

	const classes = `${props.className} grid grid-cols-[2fr_2fr_3fr_1fr] place-items-center  h-24 p-2 mb-2 `;

	const onDelete = (ContactObj) => {
		return reducerObj.contactListObj.deleteHandler(ContactObj);
	};
	const onEdit = ({ id }) => {
		console.log(`edit handler runs`);
		console.log(id);
		reducerObj.contactListObj.isEditHandler(true);

		return reducerObj.contactListObj.editHandlerFindId(id);
	};
	return reducerObj.contactListObj.contactList.map((contact) => {
		const firstName = contact.firstName;
		const lastName = contact.lastName;
		const email = contact.email;
		const phNumber = contact.phNumber;
		const phNumber_href = `tel:+${contact.phNumber}`;
		const whatsApp_href = `https://wa.me/${contact.phNumber}`;
		const email_href = `mailto:${contact.email}`;
		return (
			<div key={contact.id} className={classes}>
				<CgProfile className="w-8 h-8 sm:w-16 sm:h-16 sm:mx-2 " />
				<div>
					<p className="flex flex-col ">
						{firstName} {lastName}
					</p>
					<p className="">{email}</p>
					<p className="">{phNumber}</p>
				</div>
				<div className="flex">
					<a href={phNumber_href}>
						<IoMdCall className="w-8 h-8 sm:mx-2 " />
					</a>
					<a href={whatsApp_href}>
						<BsWhatsapp className="w-8 h-8 sm:mx-2" />
					</a>

					<a href={email_href}>
						<MdOutlineMailOutline className="w-8 h-8 sm:mx-2" />
					</a>
				</div>
				<div className="">
					<FiEdit
						onClick={() => {
							onEdit(contact);
						}}
						className="w-6 h-6 sm:my-2"
					/>
					<MdDelete
						onClick={() => onDelete(contact)}
						className="w-6 h-6 sm:my-2"
					/>
				</div>
			</div>
		);
	});
};

export default ContactCard;
