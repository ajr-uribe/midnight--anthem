import fs from "fs";
import path from "path";
import matter from "gray-matter";

const songsDirectory = path.join(process.cwd(), "songs");

export function getAllSongs() {
	const fileNames = fs.readdirSync(songsDirectory);
	const allSongs = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");
		const fullPath = path.join(songsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);

		return {
			slug,
			...data
		};
	});

	return allSongs.sort((a, b) => (a.title > b.title ? 1 : -1));
}

export function getSongBySlug(slug) {
	const fullPath = path.join(songsDirectory, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		slug,
		content,
		...data
	};
}

export function getAllGenres() {
	const songs = getAllSongs();
	const genres = [...new Set(songs.map((song) => song.genre))];
	return genres.sort();
}
