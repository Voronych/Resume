import styled from 'styled-components';
import { Link } from '../atoms/link';
import React from 'react';
import { ReactComponent as Download } from '../../img/_ionicons_svg_ios-cloud-download.svg';
import { ReactComponent as Send } from '../../img/_ionicons_svg_md-chatboxes.svg';

const Container = styled.div`
	margin-top: 55px;
	position: inherit;
	display: flex;
	width: 100%;
	height: 70px;
	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 1px;
		background: radial-gradient(
			ellipse at left,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
	}
`;

export const Buttons = (props) => (
	<Container>
		<MainButton1 href="https://drive.google.com/file/d/1-JnGIJJmoPMJiy0zyquHF99huST2gVlN/view?usp=sharing">
			DOWNLOAD CV <DownloadIcon />
		</MainButton1>
		<MainButton2 href="mailto:nazarvoronych@gmail.com">
			SEND EMAIL <SendIcon />
		</MainButton2>
	</Container>
);

const MainButton1 = styled(Link)`
	width: 50%;
	transition: all 0.3s ease 0s;
	position: relative;
	height: 70px;
	line-height: 70px;
	font-size: 12px;
	color: #171717;
	font-weight: 500;
	text-align: center;
	align-items: center;
	justify-content: center;
	display: flex;
	text-decoration: none;
	&:hover {
		color: #2eca7f;
		fill: #2eca7f;
	}
	&::before {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		width: 1px;
		height: 100%;
		background: radial-gradient(
			ellipse at top,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
	}
`;
const MainButton2 = styled(Link)`
	width: 50%;
	transition: all 0.3s ease 0s;
	height: 70px;
	line-height: 70px;
	font-size: 12px;
	color: #171717;
	font-weight: 500;
	text-align: center;
	display: flex;
	justify-content: center;
	text-decoration: none;
	&:hover {
		color: #2eca7f;
		fill: #2eca7f;
	}
	align-items: center;
`;
const DownloadIcon = styled(Download)`
	width: 16px;
	height: 16px;
	margin-left: 5px;
`;
const SendIcon = styled(Send)`
	width: 16px;
	height: 16px;
	margin-left: 5px;
`;
