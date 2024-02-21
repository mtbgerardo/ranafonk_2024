export default function contact() {
	return (
		<div className="contact_container">
			<form>
				<input type="text" name="name" required />
				<input type="email" name="email" required />
				<input type="text" name="subject" required />
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}
