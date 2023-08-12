import Image from "next/image";
import Link from "next/link";

export const HeaderComponent = () => {
	return (
		<header className="flex-1 fixed top-20 flex justify-center items-center w-full">
			<Link href="/">
				<Image
					src="/next.svg"
					alt="Galaxy Ice"
					width={150}
					height={150}
					className="text-white"
					priority={false}
				/>
			</Link>
		</header>
	);
};
