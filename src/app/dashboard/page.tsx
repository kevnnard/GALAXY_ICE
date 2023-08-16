import { DataTableReportComponent } from "@/components/app/reportesComponents";
import { SwicthDateComponent } from "@/components/app/reportesComponents/SwicthDateComponent";

export default function HomePage() {
	return (
		<main className="flex-1 flex flex-col justify-center items-center w-full">
			{/* BUTTON DATE COMPONENT HERE (src\components\app\reportesComponents\buttonDate.tsx) */}
			<SwicthDateComponent />

			{/* COMPONENT DATA TABLE HERE (src\components\app\reportesComponents\DataTableReportComponent.tsx) */}
			<DataTableReportComponent />
		</main>
	);
}
