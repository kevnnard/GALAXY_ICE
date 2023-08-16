"use client";
import { supabase } from "@/config/client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
	const router = useRouter();
	useEffect(() => {
		supabase.auth.onAuthStateChange((event: any, session: any) => {
			if (!session) router.replace("/");
			else router.replace("/dashboard");
		});
	}, [router]);

	return (
		<html lang="es">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
