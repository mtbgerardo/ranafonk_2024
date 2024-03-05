"use client"

import { useState } from "react";
import Image from "next/image";
import styles from "./contact.module.scss";

export default function Contact({ send }: { send: any}) {
	
	const [openClose, setOpenClose] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [legend, setLegend] = useState("Escribe tu mensaje...")

	const isOpen = openClose ? `${styles.open}` : `${styles.close}`;
  
	const handleOpen = () => {
	  setOpenClose(!openClose);
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
					<p>Contáctame</p>
					<Image
						src="/message-icon.svg"
						alt="Close"
						width={25}
						height={25}
						className={styles.message_icon}
						onClick={handleClose}
					/>
			</div>
			<div className={`${styles.contact_form} ${isOpen}`}>
				<form onSubmit={handleSubmit}>
					<legend><p>{legend}</p></legend>
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
					<button  className={styles.btn} type="submit">Enviar</button>
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
