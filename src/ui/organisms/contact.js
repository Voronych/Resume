import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { ContactForm } from "../molecules/contact-form";
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
const ContactBlock = styled(Animated)`
	@media (max-width: 1185px) {
		position: relative;
		left: 0;
		top: 0;
		width: 98%;
		height: auto;
		margin: 10px 0 5px 0;
		overflow: visible;
		max-width: 530px;
		min-width: 300px;
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

export const Contact = props => (
	<ContactBlock {...props}>
		<Card>
			<ContactForm />
		</Card>
	</ContactBlock>
);
const Card = styled.div`
	width: auto;
	padding: 30px 20px 30px 20px;
	position: relative;
`;