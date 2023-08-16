import { HeaderComponent } from "@/components/app/header";
import { SidebarComponet } from "@/components/app/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Galaxy Ice - dashboard",
	description: "Created by @Kevnnard",
};

export default function DashcboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<HeaderComponent />
			<div className="flex w-full h-full">
				<SidebarComponet />
				{children}
			</div>
		</>
	);
}
