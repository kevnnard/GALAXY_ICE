"use client";
import { AgregarVasoComponent } from "@/components/app/Ventas/AgregarVaso";
import { supabase } from "@/config/client";
import { useState } from "react";

const VentasPage = () => {
	const [ventas, setVentas] = useState<[]>([]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const { data, error } = await supabase
			.from("ventas")
			.insert(ventas)
			.select();
		if (error) console.log(error);
		else console.log(data);
	};

	return (
		<main className="flex-1 flex flex-col justify-center items-center w-full">
			<h1 className="text-4xl font-bold uppercase">Agregar vaso</h1>
			<AgregarVasoComponent setVentas={setVentas} />
			<br />

			{ventas.length > 0 && (
				<form
					action=""
					onSubmit={handleSubmit}
					className="flex flex-col gap-3 justify-center items-center w-full text-black">
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-md px-4 py-2 mt-5">
						Agregar
					</button>
				</form>
			)}
		</main>
	);
};

export default VentasPage;
