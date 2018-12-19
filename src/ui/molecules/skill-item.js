import React from "react";
import styled from "styled-components";

const SkillItemContainer = styled.div`
	width: 100%;
	box-sizing: border-box;
	position: relative;
	height:66px;	
	padding: 20px 0;
	&::after {
		content: ${props => (props.last ? "none" : "''")};
		position: absolute;
		left: -12px;
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

export const SkillItem = props => 
<SkillItemContainer {...props}>
	<Name>{props.name}</Name>
	<Progress>
		<FilledProgress {...props}/>
	</Progress>
</SkillItemContainer>;

const Name = styled.div`
	margin: 0 0 8px 0;
	font-size: 14px;
	text-align: left;
	line-height: 14px;
	color: #626262;
`;
const Progress = styled.div`
position: relative;
display: block;
width: 100%;
height: 4px;
background: #d8dbe2;
`;
const FilledProgress = styled.div`
width: ${props=>props.progress||'0%'};
height: 100%;
background: #2eca7f;
`;