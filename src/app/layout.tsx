"use client";
import { supabase } from "@/config/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";

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
			<head>
				<title>Galaxy Ice </title>
			</head>
			<body>{children}</body>
		</html>
	);
}
