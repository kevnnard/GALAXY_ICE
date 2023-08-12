import { HeaderComponent } from "@/components/app/header";
import { SidebarComponet } from "@/components/app/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Galaxy Ice ",
	description: "Created by @Kevnnard",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<HeaderComponent />
				<div className="flex w-full h-full">
					<SidebarComponet />
					{children}
				</div>
			</body>
		</html>
	);
}
