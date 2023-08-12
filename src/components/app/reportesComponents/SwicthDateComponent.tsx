"use client";
import { useState } from "react";
import { ButtonDataComponent } from "./ButtonData";

const buttonData = [
	{
		id: 0,
		name: "Dia",
		value: "day",
	},
	{
		id: 1,
		name: "Mes",
		value: "month",
	},
];

export const SwicthDateComponent = () => {
	const [activeButton, setActiveButton] = useState<number>(0);

	return (
		<section className="flex justify-around items-center	w-full">
			<h1 className="font-extrabold text-3xl">
				Total Venta: <span className="text-red-400">${100}</span>
			</h1>
			<div className="bg-neutral-800 p-2 rounded-lg flex gap-3">
				{buttonData.map((button, index) => (
					<ButtonDataComponent
						key={index}
						button={button}
						activeButton={activeButton}
						setActiveButton={setActiveButton}
					/>
				))}
			</div>
		</section>
	);
};
