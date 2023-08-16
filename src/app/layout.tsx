import { HeaderComponent } from "@/components/app/header";
import { SidebarComponet } from "@/components/app/sidebar";
import connectDB from "@/libs/mongodb";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderRedux from "./providerRedux";

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
	connectDB();
	return (
		<html lang="es">
			<body className={inter.className}>
				<ProviderRedux>
					<HeaderComponent />
					<div className="flex w-full h-full">
						<SidebarComponet />
						{children}
					</div>
				</ProviderRedux>
			</body>
		</html>
	);
}
