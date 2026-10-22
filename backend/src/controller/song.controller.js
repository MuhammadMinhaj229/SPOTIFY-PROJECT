import { Song } from "../models/song.model.js";
import mongoose from "mongoose";
import { FALLBACK_SONGS } from "../lib/fallbackData.js";

const isDbConnected = () => mongoose.connection.readyState === 1;

export const getAllSongs = async (req, res, next) => {
	try {
		if (!isDbConnected()) {
			return res.status(200).json(FALLBACK_SONGS);
		}
		const songs = await Song.find().sort({ createdAt: -1 });
		res.status(200).json(songs.length > 0 ? songs : FALLBACK_SONGS);
	} catch (error) {
		console.warn("Database query failed in getAllSongs, returning fallback data:", error.message);
		res.status(200).json(FALLBACK_SONGS);
	}
};

export const getFeaturedSongs = async (req, res, next) => {
	try {
		if (!isDbConnected()) {
			return res.status(200).json(FALLBACK_SONGS.slice(0, 6));
		}
		const songs = await Song.aggregate([
			{ $sample: { size: 6 } },
			{
				$project: {
					_id: 1,
					title: 1,
					artist: 1,
					imageUrl: 1,
					audioUrl: 1,
				},
			},
		]);
		res.status(200).json(songs.length > 0 ? songs : FALLBACK_SONGS.slice(0, 6));
	} catch (error) {
		console.warn("Database query failed in getFeaturedSongs, returning fallback data:", error.message);
		res.status(200).json(FALLBACK_SONGS.slice(0, 6));
	}
};

export const getMadeForYouSongs = async (req, res, next) => {
	try {
		if (!isDbConnected()) {
			return res.status(200).json(FALLBACK_SONGS.slice(3, 7));
		}
		const songs = await Song.aggregate([
			{ $sample: { size: 4 } },
			{
				$project: {
					_id: 1,
					title: 1,
					artist: 1,
					imageUrl: 1,
					audioUrl: 1,
				},
			},
		]);
		res.status(200).json(songs.length > 0 ? songs : FALLBACK_SONGS.slice(3, 7));
	} catch (error) {
		console.warn("Database query failed in getMadeForYouSongs, returning fallback data:", error.message);
		res.status(200).json(FALLBACK_SONGS.slice(3, 7));
	}
};

export const getTrendingSongs = async (req, res, next) => {
	try {
		if (!isDbConnected()) {
			return res.status(200).json(FALLBACK_SONGS.slice(7, 11));
		}
		const songs = await Song.aggregate([
			{ $sample: { size: 4 } },
			{
				$project: {
					_id: 1,
					title: 1,
					artist: 1,
					imageUrl: 1,
					audioUrl: 1,
				},
			},
		]);
		res.status(200).json(songs.length > 0 ? songs : FALLBACK_SONGS.slice(7, 11));
	} catch (error) {
		console.warn("Database query failed in getTrendingSongs, returning fallback data:", error.message);
		res.status(200).json(FALLBACK_SONGS.slice(7, 11));
	}
};
