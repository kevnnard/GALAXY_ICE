const tableHeaders = [
	{ name: "Id", prop: "id" },
	{ name: "Sabor", prop: "flavor" },
	{ name: "Metodo De Pago", prop: "method" },
	{ name: "Cantidad", prop: "quantity" },
	{ name: "Precio", prop: "total" },
];

const data = [
	{
		id: 1,
		flavor: "Fresa",
		method: "Efectivo",
		quantity: 2,
		total: 100,
	},
	{
		id: 2,
		flavor: "Fresa",
		method: "Efectivo",
		quantity: 2,
		total: 100,
	},
	{
		id: 3,
		flavor: "Fresa",
		method: "Efectivo",
		quantity: 2,
		total: 100,
	},
];

export const DataTableReportComponent = () => {
	return (
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
				<tbody className="">
					{data.map((row) => (
						<tr key={row.id} className="border border-neutral-700">
							{tableHeaders.map((header) => (
								<td className="py-2" key={header.name}>
									{row[header.prop]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};
