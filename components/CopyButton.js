"use client";
import { useState } from "react";

export default function CopyButton({ lyrics }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		// Remover las marcas de tiempo y el markdown
		const plainText = lyrics
			.replace(/\[[\d:]+\]\s*/g, "") // Remover timestamps
			.replace(/[#*_~`]/g, "") // Remover markdown básico
			.trim();

		navigator.clipboard.writeText(plainText);
		setCopied(true);

		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<button
			className={`copy-button ${copied ? "copied" : ""}`}
			onClick={handleCopy}>
			<i className={copied ? "fas fa-check" : "far fa-copy"}></i>
			{copied ? "Copiado!" : "Copiar Letra"}
		</button>
	);
}
