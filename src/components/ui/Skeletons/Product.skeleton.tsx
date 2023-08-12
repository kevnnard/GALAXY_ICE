const ProductSkeletonComponent = () => {
	return (
		// SKELETON FOR SINGLE PRODUCT=
		<div className="flex h-[80vh] flex-col lg:flex-row p-10">
			{/* IMAGES COMPONENT FOR SINGLE PRODUCT */}
			<div className="w-full lg:w-1/2 flex justify-center items-center">
				<div className="animate-pulse">
					<div className="flex flex-col items-center">
						<div className="w-80 h-80 bg-gray-200 rounded-full"></div>
						<div className="mt-2 h-4 w-80 bg-gray-200 rounded"></div>
					</div>
				</div>
			</div>

			{/* INFO COMPONENT FOR SINGLE PRODUCT */}
			<div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
				<div className="animate-pulse">
					<div className="flex flex-col items-center">
						<div className="w-80 h-4 bg-gray-200 rounded"></div>
						<div className="mt-2 h-4 w-80 bg-gray-200 rounded"></div>
						<div className="mt-2 h-4 w-80 bg-gray-200 rounded"></div>
						<div className="mt-2 h-4 w-80 bg-gray-200 rounded"></div>
						<div className="mt-2 h-4 w-80 bg-gray-200 rounded"></div>
						<div className="mt-2 h-4 w-80 bg-gray-200 rounded"></div>
						<div className="mt-2 h-4 w-80 bg-gray-200 rounded"></div>
						<div className="mt-2 h-4 w-80 bg-gray-200 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductSkeletonComponent;
