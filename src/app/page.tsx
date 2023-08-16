"use client";
import { supabase } from "@/config/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		if (error) console.log(error);
		else router.replace("/dashboard");
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center w-full h-full">
				<form
					action=""
					onSubmit={handleSubmit}
					className="flex flex-col gap-3 justify-center items-center w-full text-black">
					<input
						type="email"
						placeholder="Correo"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="border border-gray-300 rounded-md px-4 py-2 mt-5"
					/>
					<input
						type="password"
						placeholder="Contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="border border-gray-300 rounded-md px-4 py-2 mt-5"
					/>

					<button
						type="submit"
						className="bg-blue-500 text-white rounded-md px-4 py-2 mt-5">
						Iniciar sesión
					</button>
				</form>
			</div>
		</>
	);
};

export default LoginPage;
