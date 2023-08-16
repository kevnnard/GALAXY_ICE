import { IconsCatalog } from "@/enums/icons.enum";
import { LinkSideBarComponent } from "./LinkSidebar";

const links = [
	{ name: "Reportes", href: "/dashboard", icon: IconsCatalog.STATS },
	{
		name: "Nueva venta",
		href: "/dashboard/nueva-venta",
		icon: IconsCatalog.CART,
	},
	{ name: "Gastos", href: "/dashboard/gastos", icon: IconsCatalog.MONEY },
	{
		name: "Inventario",
		href: "/dashboard/inventario",
		icon: IconsCatalog.STORE,
	},
];

export const SidebarComponet = () => {
	return (
		<aside className="flex flex-col justify-center px-5">
			<h3 className="pl-5 mb-5 text-xl font-extrabold">Menu</h3>
			<ul className="flex flex-col gap-2">
				{links.map((link, index) => (
					<LinkSideBarComponent key={index} link={link} />
				))}
			</ul>
		</aside>
	);
};
