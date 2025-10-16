import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<section className="hero">
					<div className="container">
						<h1>
							<i className="fas fa-guitar"></i> Midnight Anthem
						</h1>
						<p>
							Descubre y comparte tus letras favoritas con marcas
							de tiempo precisas. La mejor colección de letras
							sincronizadas.
						</p>
						<Link
							href="/canciones"
							className="cta-button">
							<i className="fas fa-music"></i> Explorar Canciones
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
