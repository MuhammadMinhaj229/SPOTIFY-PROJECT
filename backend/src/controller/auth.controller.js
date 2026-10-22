import { User } from "../models/user.model.js";
import mongoose from "mongoose";

const isDbConnected = () => mongoose.connection.readyState === 1;

export const authCallback = async (req, res, next) => {
	try {
		const { id, firstName, lastName, imageUrl } = req.body;

		if (!isDbConnected()) {
			return res.status(200).json({ success: true, offline: true });
		}

		const user = await User.findOne({ clerkId: id });

		if (!user) {
			await User.create({
				clerkId: id,
				fullName: `${firstName || ""} ${lastName || ""}`.trim(),
				imageUrl,
			});
		}

		res.status(200).json({ success: true });
	} catch (error) {
		console.log("Error in auth callback:", error.message);
		res.status(200).json({ success: true, offline: true });
	}
};
