import React from "react";
import styled from "styled-components";
import ModalImage from "react-modal-image";

const ItemContainer = styled.div`
	weight: 100%;
	height: auto;
	display: flex;
	margin: 0 6px 15px 6px;
	flex-direction: column;
	position: relative;
	padding: 10px 0;
	font-weight: 300;
	font-size: 14px;
	line-height: 1.6;
	box-sizing: border-box;
	&::after {
		content: ${props => (props.last ? "none" : "''")};
		position: absolute;
		left: -20px;
		bottom: -10px;
		width: 100%;
		height: 1px;
		background: radial-gradient(
			ellipse at left,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
	}
`;

export const WorkItem = props => (
	<ItemContainer {...props}>
		<PhotoPlaceholder>
			<Photo
				hideDownload="true"
				hideZoom="true"
				small={props.image}
				medium={props.image}
			/>
		</PhotoPlaceholder>
		<Name>{props.name}</Name>
		<Type>{props.type}</Type>
		{props.children}
	</ItemContainer>
);

const Name = styled.div`
	font-size: 13px;
	color: #171717;
	font-weight: 10;
	font-weight: 600;
	margin: 15px 0 0 0;
`;
const Type = styled.div`
	margin: 0 0 0 0;
	font-size: 11px;
	color: #999999;
	font-weight: 300;
`;
const Photo = styled(ModalImage)`
	max-width: 100%;
	max-height: 100%;
	z-index: 20;
`;
const PhotoPlaceholder = styled.div`
	position: relative;
	&:hover {
		&::before {
			pointer-events: none;
			align-items: center;
			justify-content: center;
			display: flex;
			content: "OPEN";
			position: absolute;
			font-weight: 700;
			font-style: 15px;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			background: linear-gradient(
				135deg,
				rgba(46, 202, 127, 0.4) 0%,
				rgba(46, 202, 127, 0.01) 100%
			);
		}
	}
`;