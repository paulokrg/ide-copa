import styles from "./style.module.css";
import React from "react";

export default function Header() {
	return (
		<div className={styles.container}>
			<ul>
				<li className={styles.itemLista}>
					<a href="#topo">HOME</a>
				</li>
				<li className={styles.itemLista}>
					<a href="#sobre_a_selecao">SOBRE</a>
				</li>
				<li className={styles.itemLista}>
					<a href="#jogadores">JOGADORES</a>
				</li>
				<li className={styles.itemLista}>
					<a href="#proximos_jogos">JOGOS</a>
				</li>
			</ul>
		</div>
	);
}
