import type { Metadata } from "next";
import { poppins } from "@/app/utils/fonts";
import "./globals.css";
import Head from "next/head";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
	title: "Rana Fonk",
	description: "Amo el entretenimiento. Soy un emprendedor, motor y siempre estoy en búsqueda de proyectos retadores.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" sizes="any" type="image/svg+xml" />
			</head>
			<body className={`${poppins}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
