import React from "react";
import styled from "styled-components";
import { AboutMe } from "../molecules/about-aboutme";
import { FanFact } from "../molecules/about-fanfact";
import posed from "react-pose";
const Animated = posed.div({
	enter: {
		x: 0,
		opacity: 1,
		delay: 400,
		transition: { duration: 400 }
	},

	exit: {
		x: -440,
		opacity: 0,
		transition: { duration: 400 }
	}
});
const AboutBlock = styled(Animated)`
	@media (max-width: 1185px) {
		position: relative;
		left: 0;
		top: 0;
		margin: 10px 0 0 0;
		width: 98vw;
		height: auto;
		overflow: visible;
		max-width: 530px;
		min-width: 400px;
z-index: 1;
		
	}
	position: absolute;
	width: 576px;
	top: 15px;
	left: 558px;
	height: 570px;
	border-radius: 4px;
	background: #ffffff;
	overflow: hidden;

`;

export const About = props => (
	<AboutBlock {...props}>
		<Card>
			<AboutMe />
			<FanFact />
		</Card>
	</AboutBlock>
);
const Card = styled.div`

	overflow: auto;
	width: auto;
	height: 570px;
	padding: 30px 30px 30px 20px;
	position: relative;
	overflow-x: hidden;
	height: 100%;
`;