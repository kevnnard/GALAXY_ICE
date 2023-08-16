"use client";
import { supabase } from "@/config/client";
import { useState } from "react";

export const NuevoItemComponent = ({ getData }: any) => {
	const [item, setItem] = useState<any>({
		sabor: "",
		cantidad: Number,
		precio: Number,
	});

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const { error } = await supabase.from("inventario").insert(item).select();
		if (error) console.log(error);
		else {
			setItem({ sabor: "", cantidad: Number, precio: Number });
			getData();
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			action=""
			className="flex gap-3 justify-center items-center w-full text-black">
			<input
				type="text"
				placeholder="Sabor"
				className="border border-gray-300 rounded-md px-4 py-2 mt-5"
				value={item.sabor}
				onChange={(e) => setItem({ ...item, sabor: e.target.value })}
			/>
			<input
				type="number"
				placeholder="Cantidad"
				className="border border-gray-300 rounded-md px-4 py-2 mt-5"
				value={item.cantidad}
				onChange={(e) => setItem({ ...item, cantidad: e.target.value })}
			/>
			<input
				type="number"
				placeholder="Precio"
				className="border border-gray-300 rounded-md px-4 py-2 mt-5"
				value={item.precio}
				onChange={(e) => setItem({ ...item, precio: e.target.value })}
			/>

			{item.sabor && item.cantidad && item.precio && (
				<button
					type="submit"
					className="bg-green-500 text-white rounded-md px-4 py-2 mt-5">
					Agregar
				</button>
			)}
		</form>
	);
};
