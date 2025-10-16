"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Canciones() {
	const [songs, setSongs] = useState([]);
	const [genres, setGenres] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState("all");
	const [filteredSongs, setFilteredSongs] = useState([]);

	useEffect(() => {
		// Fetch songs
		fetch("/api/songs")
			.then((res) => res.json())
			.then((data) => {
				setSongs(data);
				setFilteredSongs(data);

				// Extract unique genres
				const uniqueGenres = [
					...new Set(data.map((song) => song.genre))
				];
				setGenres(uniqueGenres.sort());
			});
	}, []);

	useEffect(() => {
		if (selectedGenre === "all") {
			setFilteredSongs(songs);
		} else {
			setFilteredSongs(
				songs.filter((song) => song.genre === selectedGenre)
			);
		}
	}, [selectedGenre, songs]);

	return (
		<>
			<Header />
			<main>
				<div className="container">
					<div className="songs-header">
						<h1>
							<i className="fas fa-list-music"></i> Todas las
							Canciones
						</h1>
						<p style={{ color: "var(--text-secondary)" }}>
							{filteredSongs.length} cancion
							{filteredSongs.length !== 1 ? "es" : ""} disponible
							{filteredSongs.length !== 1 ? "s" : ""}
						</p>
					</div>

					<div className="filter-section">
						<button
							className={`filter-button ${
								selectedGenre === "all" ? "active" : ""
							}`}
							onClick={() => setSelectedGenre("all")}>
							<i className="fas fa-music"></i> Todos
						</button>
						{genres.map((genre) => (
							<button
								key={genre}
								className={`filter-button ${
									selectedGenre === genre ? "active" : ""
								}`}
								onClick={() => setSelectedGenre(genre)}>
								{genre}
							</button>
						))}
					</div>

					<div className="songs-grid">
						{filteredSongs.map((song) => (
							<Link
								href={`/cancion/${song.slug}`}
								key={song.slug}
								style={{
									textDecoration: "none",
									color: "inherit"
								}}>
								<div className="song-card">
									<h3>{song.title}</h3>
									<div className="song-meta">
										<i className="fas fa-user"></i>{" "}
										{song.artist} • {song.year}
									</div>
									<span className="genre-tag">
										<i className="fas fa-tag"></i>{" "}
										{song.genre}
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
