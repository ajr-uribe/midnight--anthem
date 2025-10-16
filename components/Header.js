import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header-content">
					<Link
						href="/"
						className="logo">
					  <Image
      src="/images/logo.png"
      alt="Midnight Anthem logo"
      width={40}
      height={40}
      className="neon-orange"/>
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
