import { Album } from "../models/album.model.js";
import mongoose from "mongoose";
import { FALLBACK_ALBUMS } from "../lib/fallbackData.js";

const isDbConnected = () => mongoose.connection.readyState === 1;

export const getAllAlbums = async (req, res, next) => {
	try {
		if (!isDbConnected()) {
			return res.status(200).json(FALLBACK_ALBUMS);
		}
		const albums = await Album.find();
		res.status(200).json(albums.length > 0 ? albums : FALLBACK_ALBUMS);
	} catch (error) {
		console.warn("Database query failed in getAllAlbums, returning fallback data:", error.message);
		res.status(200).json(FALLBACK_ALBUMS);
	}
};

export const getAlbumById = async (req, res, next) => {
	try {
		const { albumId } = req.params;

		if (!isDbConnected()) {
			const fallbackAlbum = FALLBACK_ALBUMS.find((a) => a._id === albumId) || FALLBACK_ALBUMS[0];
			return res.status(200).json(fallbackAlbum);
		}

		const album = await Album.findById(albumId).populate("songs");

		if (!album) {
			const fallbackAlbum = FALLBACK_ALBUMS.find((a) => a._id === albumId);
			if (fallbackAlbum) return res.status(200).json(fallbackAlbum);
			return res.status(404).json({ message: "Album not found" });
		}

		res.status(200).json(album);
	} catch (error) {
		console.warn("Database query failed in getAlbumById, returning fallback data:", error.message);
		const fallbackAlbum = FALLBACK_ALBUMS.find((a) => a._id === req.params.albumId) || FALLBACK_ALBUMS[0];
		res.status(200).json(fallbackAlbum);
	}
};
