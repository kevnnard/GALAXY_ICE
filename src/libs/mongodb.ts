import mongoose from "mongoose";

async function connectDB() {
	try {
		mongoose.set("strictQuery", false);
		await mongoose
			.connect(process.env.MONGODB_URI || "")
			.then(() => {
				console.log("🚀 Database ready 🚀");
			})
			.catch((err) => {
				console.log(err);
				process.exit(1);
			});
	} catch (error) {
		console.log(error);
	}
}

export default connectDB;
