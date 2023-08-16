"use client";
import { supabase } from "@/config/client";
import { useState } from "react";

export const ActualizarItemComponent = ({ row, router }: any) => {
	const [cantidad, setCantidad] = useState<any>();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const { data, error } = await supabase
			.from("inventario")
			.update({ cantidad: cantidad })
			.eq("id", row.id)
			.select();

		if (error) console.log(error);
		else {
			setCantidad(Number);
			setTimeout(() => {
				router.refresh("/dashboard/inventario");
			}, 3000);
		}
	};

	return (
		<form className="flex justify-center gap-2" onSubmit={handleSubmit}>
			<input
				type="number"
				min={0}
				max={100}
				className="border border-gray-300 rounded-md px-4 py-2 text-black w-30"
				value={cantidad}
				onChange={(e) => setCantidad(e.target.value)}
			/>

			<button
				type="submit"
				className="bg-red-500 text-white rounded-lg px-1 py-1 text-xs hover:bg-red-700">
				Actualizar
			</button>
		</form>
	);
};
