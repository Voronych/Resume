import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
	weight: 100%;
	display: flex;
	margin: 0 6px;
	flex-direction: column;
	position: relative;
	padding: 10px 0;
	font-weight: 300;
	font-size: 14px;
	line-height: 1.6;
	box-sizing: border-box;
	text-align: left;
	&::after {
		content: ${props => (props.last ? "none" : "''")};
		position: absolute;
		left: -20px;
		bottom: 0;
		width: 100%;
		height: 1px;
		background: radial-gradient(
			ellipse at left,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
	}
`;

export const ResumeItem = props => (
	<ItemContainer {...props}>
		<Data {...props}>{props.data}</Data>
		<Name>{props.name}</Name>
		<Company>{props.company}</Company>
		{props.children}
	</ItemContainer>
);
const Data = styled.div`
	color: ${props => (props.active ? "#2eca7f" : "#d8dbe2")};
	margin: 0 0 10px 0;
	padding: 0;
	position: relative;
	display: inline-block;
	font-size: 11px;
	line-height: 18px;
	font-weight: 600;
	&::before {
		content: "";
		position: absolute;
		left: -25px;
		top: 4px;
		width: 9px;
		height: 9px;
		background: ${props => (props.active ? "#2eca7f" : "#d8dbe2")};
		border-radius: 9px;
	}
`;
const Name = styled.div`
	font-size: 13px;
	color: #171717;
	font-weight: 10;
	font-weight: 600;
	margin: 0;
`;
const Company = styled.div`
	margin: 0 0 6px 0;
	font-size: 11px;
	color: #999999;
	font-weight: 300;
`;