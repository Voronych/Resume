import React from "react";
import { Button } from "../atoms/button";
import { Text } from "../atoms/text";
import styled from "styled-components";

const ButtonMenu = styled(Button)`
	width: 72px;
	height: 72px;
	position: relative;
	font-size: 11px;
	fill: ${props => (props.active ? "#2eca7f" : "#171717")};
	transition: all 0.3s ease 0s;
	color: ${props => (props.active ? "#2eca7f" : "#171717")};
	&:hover {
		color: #2eca7f;
		fill: #2eca7f;
	}
	&::before {
		content: ${props => (props.last ? "none" : "''")};
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background: radial-gradient(
			ellipse at right,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
	}
`;
//<Img src={props.src} width="18px" height="19px" />
export const MenuButton = props => (
	<ButtonMenu {...props}>
		{props.children}
		<Text {...props}>{props.text}</Text>
	</ButtonMenu>
);
