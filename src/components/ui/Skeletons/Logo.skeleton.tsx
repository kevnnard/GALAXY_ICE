export default function LogoSkeletonComponent() {
	return (
		<div className="flex justify-center items-center">
			<div className="animate-pulse">
				<div className="flex flex-col items-center">
					<div className="w-20 h-20 bg-gray-200 rounded-full"></div>
					<div className="mt-2 h-4 w-20 bg-gray-200 rounded"></div>
				</div>
			</div>
		</div>
	);
}
