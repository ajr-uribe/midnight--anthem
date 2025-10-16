import { getSongBySlug, getAllSongs } from "../../../lib/songs";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CopyButton from "../../../components/CopyButton";
import Link from "next/link";

export async function generateStaticParams() {
	const songs = getAllSongs();
	return songs.map((song) => ({
		slug: song.slug
	}));
}

export default function SongPage({ params }) {
	const song = getSongBySlug(params.slug);

	return (
		<>
			<Header />
			<main className="song-page">
				<div className="container">
					<Link
						href="/canciones"
						className="back-link">
						<i className="fas fa-arrow-left"></i>
						Volver a canciones
					</Link>

					<div className="song-header-info">
						<h1>{song.title}</h1>
						<p className="artist">
							<i className="fas fa-microphone"></i> {song.artist}
						</p>
						<div>
							<span className="genre-tag">
								<i className="fas fa-tag"></i> {song.genre}
							</span>
							<span
								style={{
									margin: "0 15px",
									color: "var(--text-secondary)"
								}}>
								•
							</span>
							<span style={{ color: "var(--text-secondary)" }}>
								<i className="far fa-calendar"></i> {song.year}
							</span>
						</div>
					</div>

					<div className="lyrics-container">
						<div className="lyrics-content">
							{song.content.split("\n").map((line, i) => {
								const timestampMatch = line.match(
									/\[(\d{2}:\d{2})\](.*)/
								);
								if (timestampMatch) {
									return (
										<div key={i}>
											<span className="timestamp">
												[{timestampMatch[1]}]
											</span>
											{timestampMatch[2]}
										</div>
									);
								}
								return <div key={i}>{line || <br />}</div>;
							})}
						</div>
					</div>

					<CopyButton lyrics={song.content} />
				</div>
			</main>
			<Footer />
		</>
	);
}
