import { Poppins } from "next/font/google";

export const poppins_init = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
    style: ["normal", "italic"],
});

export const poppins = poppins_init.variable;