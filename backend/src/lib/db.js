import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		if (!process.env.MONGODB_URI) {
			console.warn("MONGODB_URI environment variable is not defined. Running in offline/preview mode.");
			return;
		}
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`Connected to MongoDB: ${conn.connection.host}`);
	} catch (error) {
		console.error("Failed to connect to MongoDB:", error.message);
	}
};
