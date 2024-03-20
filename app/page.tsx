import Hero from "@/app/components/hero";
import Socials from "@/app/components/social";
import styles from "./page.module.scss";
import Contact from "@/app/components/contact";
import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";
import { Poppins } from "next/font/google";

async function getVideo() {
	const res = await fetch(
		"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCJfMps6SFaIqE4GdkFQiB7g"
	);
	const data = await res.json();
	const id = data.items[0].guid.split(":").pop();
	return id;
}

async function send({
	name,
	email,
	message,
}: {
	name: string;
	email: string;
	message: string;
}) {
	"use server";
	try {
		const resend = new Resend(process.env.RESEND_API_KEY);

		const { data } = await resend.emails.send({
			from: "ranafonk.com <noreply@ranafonk.com>",
			to: ["ranafonk@gmail.com"],
			subject: "Mensaje de ranafonk.com",
			text: "",
			react: EmailTemplate({
				name: name,
				email: email,
				message: message,
			}),
		});
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

export default async function Home() {
	// Initiate video requests
	const videoData = getVideo();
	const video = await Promise.all([videoData]);

	return (
		<>
			<Hero video={video[0]} />
			<main>
				<section className={styles.soy_rana_fonk}>
					<div className={styles.main_title}>
						<h1>
							<span>Soy Rana Fonk</span>
						</h1>
					</div>
					<div className={styles.presentation}>
						<h2 className={styles.intro}>
							Amo el entretenimiento. Soy un emprendedor, motor y siempre estoy
							en búsqueda de proyectos retadores.
						</h2>
						<p>
							Actualmente soy productor de contenidos audiovisuales, podcast y
							creador de contenidos sobre cine, tv y música. También conduzco
							shows en vivo y soy moderador de charlas en eventos sobre
							entretenimiento.
						</p>
						<p>
							Creé en 2015{" "}
							<a
								href="https://spoilertime.com"
								target="_blank"
							>
								Spoiler Time
							</a>
							, uno de los medios sobre cine y series más importantes de
							Latinoamérica y España. Soy uno de sus directores y me encargo del
							equipo de redes sociales, las relaciones públicas y las
							operaciones diarias.
						</p>
						<p>
							En 2023 creamos{" "}
							<a
								href="https://quever.com"
								target="_blank"
							>
								QueVer.com
							</a>
							, un web app donde pueden encontrar en segundos qué película/serie
							ver y donde verla.
						</p>
						<p>
							En 2024 lancé mi propia productora llamada{" "}
							<a
								href="https://creaturavisual.com"
								target="_blank"
								style={{color: "rgb(255,0,0.9)"}}
							>
								Creatura Visual
							</a>
							, especializada en producción audiovisual, contamos con el mejor
							equipo creativo, influencers y personalidades. Desde la concepción
							hasta el material final, ofrecemos soluciones audiovisuales
							excepcionales para impulsar negocios.
						</p>
						<p>
							Desde 2010 y hasta la actualidad estoy enfocado al mundo del
							entretenimiento, especialmente cine, series de TV, streaming y
							música.
						</p>
						<p>
							Soy productor de podcast para Posta en México desde 2021. Produje
							los programas Nada que ver y Continuar Viendo, los podcast
							oficiales en español de Netflix.
						</p>
						<p>
							Estuve más de quince años trabajando en la industria de la música
							como emprendedor en diferentes empresas relacionadas con música e
							internet.
						</p>
						<p>
							Claro, también soy baterista, grabé discos, salí en MTV, giré por
							todo el continente y al día de hoy, cuando puedo sigo haciendo
							música. También dirigí un documental sobre los fans de Red Hot
							Chili Peppers alrededor del mundo. Solo me falta escribir un
							libro... pronto.
						</p>
					</div>
					<div className={styles.contact}>
						<Contact send={send} />
						<Socials />
					</div>
				</section>
			</main>
		</>
	);
}
