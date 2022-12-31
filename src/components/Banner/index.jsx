import React from "react";
import style from "./banner.module.css";

export default function Banner() {
	return (
		<>
			<div id="topo" className="anchor_offset"></div>
			<div className={style.banner}>
				<picture>
					<source type="image/webp" srcSet="banner/Capa.webp" />
					<source type="image/png" srcSet="banner/Capa.png" />
					<img
						src="banner/Capa.png"
						alt="Mascote da Seleção Brasileira com a logo da IDE"
					/>
				</picture>

				<h1>Seleção Brasileira de Futebol</h1>
			</div>
		</>
	);
}
