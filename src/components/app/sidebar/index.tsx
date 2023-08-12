import { IconsCatalog } from "@/enums/icons.enum";
import { LinkSideBarComponent } from "./LinkSidebar";

const links = [
	{ name: "Reportes", href: "/", icon: IconsCatalog.STATS },
	{ name: "Ventas", href: "/ventas", icon: IconsCatalog.CART },
	{ name: "Gastos", href: "/gastos", icon: IconsCatalog.MONEY },
	{ name: "Inventario", href: "/inventario", icon: IconsCatalog.STORE },
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
