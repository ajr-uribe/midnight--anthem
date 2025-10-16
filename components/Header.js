import Link from "next/link";

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header-content">
					<Link
						href="/"
						className="logo">
						<i className="fas fa-music"></i>
						Midnight Anthem
					</Link>
					<nav className="nav">
						<Link href="/">Inicio</Link>
						<Link href="/canciones">Canciones</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
