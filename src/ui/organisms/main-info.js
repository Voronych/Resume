import React from "react";
import styled from "styled-components";
import { Img } from "../atoms/image";
import image from "../../img/nature-forest.jpg";
import personalPhoto from "../../img/_1461.jpg";
import { Name, Position } from "../molecules/main-block-text";
import { Photo, BgPhoto } from "../molecules/main-block-photos";
import { Links } from "../molecules/main-block-link-icons";
import { Buttons } from "../molecules/main-block-buttons";
const Info = styled.div`
	@media (max-width: 1185px) {
		width: 98vw;
		margin: 5px 0 0 0;
		overflow: visible;
		max-width: 530px;
		min-width: 400px;
	}
	position: relative;
	margin: 11;
	z-index: 2;
	width: 480px;
	height: 600px;
	border-radius: 4px;
	background: #ffffff;

`;

export const MainInfo = props => (
	<Info>

			<BgPhoto>
			<Img
				src={image}
				width="100%"
				height="300px"
				radius="4px"
				index="0"
			/>
		</BgPhoto>
		<Photo>
			<Img
				src={personalPhoto}
				width="140px"
				height="140px"
				radius="100%"
				border="3px solid #ffffff"
			/>
		</Photo>
		
		<Name>Nazar Voronych</Name>
		<Position color="#2eca7f">JavaScript Developer</Position>
		<Links />
		<Buttons />
	</Info>
);
