import React from "react";
import styles from "./style.module.css";

export default function Subtitle({ children, id }) {
	if (!children || !id) {
		alert("O id e o texto precisa ser preenchido nos Subtitles!!");
	}
	const newText = children.toUpperCase();

	return (
		<>
			<div id={id} className="anchor_offset"></div>
			<h2 className={styles.title}>{newText}</h2>
		</>
	);
}
