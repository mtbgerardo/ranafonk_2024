"use client"

import { useState } from "react";
import Image from "next/image";
import styles from "./contact.module.scss";

export default function Contact({ send }: { send: any }) {
	
	const [openClose, setOpenClose] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [legend, setLegend] = useState("")

	const isOpen = openClose ? `${styles.open}` : `${styles.close}`;
	let isSend = legend === "¡Mensaje enviado, gracias!" ? `${styles.close}` : `${styles.open}`;
	
  
	const handleOpen = () => {
	  setOpenClose(!openClose);
	  setLegend("Escribe tu mensaje...");
	};
  
	const handleClose = () => {
	  setOpenClose(!openClose);
	};

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		if(subject !== "") return;
		send({name, email, message});
		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
		setLegend("¡Mensaje enviado, gracias!");
	}
  
	return (
		<div className={styles.contact}>
			<div
				className={styles.btn_contact} 
				onClick={handleOpen}>
					<div className={styles.message_container}>
						<Image
							src="/message-icon.svg"
							alt="Contáctame"
							title="Contáctame"
							width={15}
							height={15}
							className={styles.message_icon}
							onClick={handleClose}
						/>
					</div>
			</div>
			<div className={`${styles.contact_form} ${isOpen}`}>
				<form id="ranafonkform" onSubmit={handleSubmit}>
					<legend><p>{legend}</p></legend>
					<div className={`${styles.contact_fields} ${isSend}`}>
						<input 
							type="text" 
							name="name" 
							placeholder="Nombre:"
							onChange={event => setName(event.target.value)}
							value={name}
							maxLength={35}
							required 
						/>
						<input 
							type="email" 
							name="email" 
							placeholder="Email:"
							onChange={event => setEmail(event.target.value)}
							value={email}
							required />
						<input 
							type="hidden" 
							name="subject" 
							placeholder="subject:"
							onChange={event => setSubject(event.target.value)}
							value={subject}
							maxLength={35}
							/>
						<textarea 
							name="message" 
							placeholder="Mensaje"
							onChange={event => setMessage(event.target.value)}
							maxLength={200}
							value={message} 
							required>
						</textarea>
						<button  
						className={styles.btn}
						type="submit">
							Enviar
						</button>
					</div>
					<div className={styles.close_icon}>
					<Image
						src="/close.svg"
						alt="Close"
						width={25}
						height={25}
						className={styles.close_icon_img}
						onClick={handleClose}
					/>
				</div>
				</form>
			</div>
		</div>
	);
}
