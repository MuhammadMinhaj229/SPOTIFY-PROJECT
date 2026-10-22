import mongoose from "mongoose";

// Disable command buffering so queries fail or fallback immediately without 10-second hang
mongoose.set("bufferCommands", false);

export const connectDB = async () => {
	try {
		if (!process.env.MONGODB_URI) {
			console.warn("MONGODB_URI environment variable is not defined. Running in resilient preview mode with seed catalog.");
			return;
		}
		const conn = await mongoose.connect(process.env.MONGODB_URI, {
			serverSelectionTimeoutMS: 5000,
			connectTimeoutMS: 5000,
		});
		console.log(`Connected to MongoDB: ${conn.connection.host}`);
	} catch (error) {
		console.error("Failed to connect to MongoDB:", error.message);
		console.warn("Backend continuing in resilient preview mode with seed catalog.");
	}
};
