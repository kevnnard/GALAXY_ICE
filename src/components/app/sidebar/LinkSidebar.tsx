"use client";
import IconSVGComponent from "@/components/ui/iconSVG";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const LinkSideBarComponent = ({
	link,
}: {
	link: { href: string; icon: string; name: string };
}) => {
	const params = usePathname();
	const cn = classNames;
	const [active, setActive] = useState(false);
	const [activeLink, setActiveLink] = useState("");

	useEffect(() => {
		const handleChangeLink = () => {
			setActive((state) => !state);
			setActiveLink(link.href);
		};
		handleChangeLink();
	}, [activeLink, link.href, params]);

	const classes = cn({
		"bg-neutral-700": params === link.href,
	});

	return (
		<Link href={link.href}>
			<li
				className={`${classes} py-[.28rem] pl-5 pr-20 rounded-md font-bold  cursor-pointer transition ease-in-out duration-400 hover:scale-[.95] hover:bg-neutral-600 flex gap-4`}>
				<IconSVGComponent
					icon={link.icon}
					fill="#fff"
					strokeWidth={2.5}
					className="w-5"
				/>
				{link.name}
			</li>
		</Link>
	);
};
