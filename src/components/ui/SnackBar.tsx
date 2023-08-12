"use client";
import { useAppSelector } from "@/hooks/useRedux";
import { closeSnackbar } from "@/store/slices/snackbar";
import classNames from "classnames";
import { useDispatch } from "react-redux";

const SnackBarComponent = () => {
	const cn = classNames;
	const dispatch = useDispatch();
	const snackbar = useAppSelector((state) => state.snackbar);
	const {
		actionButton,
		anchorOrigin,
		alert,
		close,
		message,
		open,
		transition,
	} = snackbar;

	const handleClose = () => {
		dispatch(closeSnackbar());
	};

	setTimeout(() => {
		handleClose();
	}, 5000);

	const classes: any = {
		snackbar: cn({
			"translate-x-0 bg-green-400": open === true && alert.color === "success",
			"translate-x-0 bg-red-400": open && alert.color === "error",
			"-translate-x-[100rem]": close === true,
		}),
	};

	return (
		<>
			{alert && (
				<div
					className={`${classes.snackbar} transition-all ease-in-out duration-500  fixed z-[500] shadow-2x bottom-0 m-5 px-16 py-4 text-white font-extrabold rounded-lg`}>
					<p className="">{message}</p>
				</div>
			)}
		</>
	);
};

export default SnackBarComponent;
