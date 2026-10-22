import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";
import { FALLBACK_STATS } from "../lib/fallbackData.js";

const isDbConnected = () => mongoose.connection.readyState === 1;

export const getStats = async (req, res, next) => {
	try {
		if (!isDbConnected()) {
			return res.status(200).json(FALLBACK_STATS);
		}

		const [totalSongs, totalAlbums, totalUsers, uniqueArtists] = await Promise.all([
			Song.countDocuments(),
			Album.countDocuments(),
			User.countDocuments(),

			Song.aggregate([
				{
					$unionWith: {
						coll: "albums",
						pipeline: [],
					},
				},
				{
					$group: {
						_id: "$artist",
					},
				},
				{
					$count: "count",
				},
			]),
		]);

		res.status(200).json({
			totalAlbums,
			totalSongs,
			totalUsers,
			totalArtists: uniqueArtists[0]?.count || 0,
		});
	} catch (error) {
		console.warn("Database query failed in getStats, returning fallback data:", error.message);
		res.status(200).json(FALLBACK_STATS);
	}
};
