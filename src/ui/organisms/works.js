import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { MyWorks } from "../molecules/works-myworks";
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
const WorkBlock = styled(Animated)`
	@media (max-width: 1185px) {
		position: relative;
		left: 0;
		top: 0;
		margin: 10px 0 0 0;
		height: auto;
		width: 98vw;
		overflow: visible;
		max-width: 530px;
		min-width: 400px;
z-index: 2;

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

export const Work = props => (
	<WorkBlock {...props}>
		<Card>
			<MyWorks />
		</Card>
	</WorkBlock>
);
const Card = styled.div`
	@media (max-width: 1185px) {
		overflow: visible;
	}
	overflow: auto;
	width: auto;
	height: 570px;
	padding: 30px 20px 30px 20px;
	position: relative;
	overflow-x: hidden;
	height: 100%;
`;