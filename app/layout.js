import "./styles/globals.css";

export const metadata = {
	title: "Midnight Anthem - Tu colección de letras",
	description: "Explora letras de canciones con marcas de tiempo",
	"icons": {
	  "icon": [
	    {
	      "url": "/images/favicon.ico",
	      "href": "images/favicon.ico"
	    }
	    ]
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
