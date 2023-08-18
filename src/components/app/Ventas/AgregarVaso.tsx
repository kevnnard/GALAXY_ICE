import SkeletonLoader from "@/components/ui/skeleton";
import { supabase } from "@/config/client";
import { useMemo, useState } from "react";

export const AgregarVasoComponent = ({ setVentas }: any) => {
	const [sabores, setSabores] = useState<[]>([]);
	const [saborSelected, setSaborSelected] = useState<any>({
		sabor: "",
		precio: 0,
		cantidad: 0,
		vaso: 0,
	});

	console.log(saborSelected);

	const getData = async () => {
		let { data: inventario, error } = await supabase
			.from("inventario")
			.select("*");

		if (error) console.log(error);
		else {
			setSabores(inventario);
		}
	};

	useMemo(() => {
		getData();
	}, []);

	const handleClick = async (e: any) => {
		e.preventDefault();
		setVentas((ventas: any) => [
			...ventas,
			{
				sabor: saborSelected.sabor,
				precio: saborSelected.precio,
				cantidad: 1,
				vaso: saborSelected.id,
			},
		]);
	};

	if (!sabores) return <SkeletonLoader />;
	return (
		<div className="flex gap-3 justify-center items-center w-full text-black">
			<select
				value={saborSelected}
				placeholder="Sabor"
				className="border border-gray-300 rounded-md px-4 py-2 mt-5 cursor-pointer">
				{sabores.map((item: { sabor: string; id: number; precio: number }) => (
					<option
						key={item.id}
						onChange={(e) =>
							setSaborSelected({
								sabor: item.sabor,
								precio: item.precio,
								cantidad: 1,
								vaso: item.id,
							})
						}
						className="cursor-pointer">
						{item.sabor}
					</option>
				))}
			</select>
			<button
				onClick={handleClick}
				type="submit"
				className="bg-green-500 text-white rounded-md px-4 py-2 mt-5">
				Agregar
			</button>
		</div>
	);
};
