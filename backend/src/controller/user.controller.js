import { User } from "../models/user.model.js";
import { Message } from "../models/message.model.js";
import mongoose from "mongoose";
import { FALLBACK_USERS } from "../lib/fallbackData.js";

const isDbConnected = () => mongoose.connection.readyState === 1;

export const getAllUsers = async (req, res, next) => {
	try {
		if (!isDbConnected()) {
			return res.status(200).json(FALLBACK_USERS);
		}
		const currentUserId = req.auth?.userId;
		const users = await User.find(currentUserId ? { clerkId: { $ne: currentUserId } } : {});
		res.status(200).json(users.length > 0 ? users : FALLBACK_USERS);
	} catch (error) {
		console.warn("Database query failed in getAllUsers, returning fallback data:", error.message);
		res.status(200).json(FALLBACK_USERS);
	}
};

export const getMessages = async (req, res, next) => {
	try {
		if (!isDbConnected()) {
			return res.status(200).json([]);
		}
		const myId = req.auth?.userId;
		const { userId } = req.params;

		const messages = await Message.find({
			$or: [
				{ senderId: userId, receiverId: myId },
				{ senderId: myId, receiverId: userId },
			],
		}).sort({ createdAt: 1 });

		res.status(200).json(messages);
	} catch (error) {
		console.warn("Database query failed in getMessages, returning empty list:", error.message);
		res.status(200).json([]);
	}
};
