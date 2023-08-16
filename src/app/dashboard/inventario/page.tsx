"use client";
import { ActualizarItemComponent } from "@/components/app/Inventario/ActualizarItem";
import { NuevoItemComponent } from "@/components/app/Inventario/nuevoItem";
import { supabase } from "@/config/client";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const tableHeaders = [
	{ name: "Id", prop: "id" },
	{ name: "Sabor", prop: "sabor" },
	{ name: "Cantidad", prop: "cantidad" },
	{ name: "Precio", prop: "precio" },
	{ name: "Actualizar Cantidad", prop: "acciones" },
];

const InventarioPage = () => {
	const router = useRouter();
	const [ventas, setVentas] = useState<[]>([]);

	const getData = async () => {
		let { data: inventario, error } = await supabase
			.from("inventario")
			.select("*");

		if (error) console.log(error);
		else {
			setVentas(inventario);
		}
	};

	useMemo(() => {
		getData();
	}, []);

	return (
		<main className="flex-1 flex flex-col justify-center items-center w-full">
			<NuevoItemComponent router={router} getData={getData} />
			<section className="w-full my-10">
				<table className="text-center w-[90%] mx-auto">
					<thead className="w-full bg-neutral-900 rounded-lg ">
						<tr className="border border-neutral-700">
							{tableHeaders.map((header) => (
								<th className="px-4 py-2" key={header.name}>
									{header.name}
								</th>
							))}
						</tr>
					</thead>
					{ventas && (
						<tbody className="">
							{ventas.map((row: any) => (
								<tr key={row.id} className="border border-neutral-700">
									<td className="py-2">{row.id}</td>
									<td className="py-2 font-extrabold">{row.sabor}</td>
									<td className="py-2">x {row.cantidad}</td>
									<td className="py-2">
										${" "}
										{Intl.NumberFormat("es-ES", {
											style: "currency",
											currency: "COP",
											minimumFractionDigits: 0,
										}).format(row.precio)}
									</td>
									<td className="py-2">
										<ActualizarItemComponent row={row} getData={getData} />
									</td>
								</tr>
							))}
						</tbody>
					)}
				</table>
			</section>
		</main>
	);
};

export default InventarioPage;
