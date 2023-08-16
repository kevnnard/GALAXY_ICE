"use client";
import { supabase } from "@/config/client";
import { useState } from "react";

const VentasPage = () => {
	const [ventas, setVentas] = useState();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const { data, error } = await supabase
			.from("venta")
			.insert({
				vasosIce: 6,
			})
			.select();
		if (error) console.log(error);
		else console.log(data);
	};

	return (
		<main className="flex-1 flex flex-col justify-center items-center w-full">
			<h1 className="text-4xl font-bold">Nueva Venta</h1>

			<form
				action=""
				onSubmit={handleSubmit}
				className="flex gap-3 justify-center items-center w-full text-black">
				<input
					type="text"
					placeholder="Sabor"
					className="border border-gray-300 rounded-md px-4 py-2 mt-5"
				/>

				<input
					type="text"
					placeholder="Precio"
					className="border border-gray-300 rounded-md px-4 py-2 mt-5"
				/>
				<input
					type="text"
					placeholder="Cantidad"
					className="border border-gray-300 rounded-md px-4 py-2 mt-5"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white rounded-md px-4 py-2 mt-5">
					Agregar
				</button>
			</form>
		</main>
	);
};

export default VentasPage;
