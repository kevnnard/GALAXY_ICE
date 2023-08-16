import classNames from "classnames";
import Link from "next/link";

export const ButtonDataComponent = ({
	activeButton,
	setActiveButton,
	button,
}: {
	activeButton: number;
	setActiveButton: React.Dispatch<React.SetStateAction<number>>;
	button: { id: number; value: string; name: string };
}) => {
	const cn = classNames;
	const clases = cn({
		"bg-white text-black": activeButton === button.id,
	});

	return (
		<Link
			href={{
				pathname: "/dashboard",
				query: { date: button.value },
			}}
			onClick={() => setActiveButton(button.id)}
			className={`${clases} py-1 px-5 rounded-lg font-extrabold`}>
			{button.name}
		</Link>
	);
};
