import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Coffee } from '../../img/coffee-outline.svg';
import { ReactComponent as Linux } from '../../img/linux.svg';
import { ReactComponent as Music } from '../../img/music.svg';
import { ReactComponent as Game } from '../../img/google-controller.svg';

const Facts = styled.div`
	margin: 0 0 60px 0;
	position: relative;
`;

export const FanFact = (props) => (
	<Facts>
		<Title>What I like</Title>
		<Row>
			<Item>
				<Coffee width="30px" height="30px" />
				Cup of coffee
			</Item>
			<Item>
				<Linux width="30px" height="30px" />
				System: MacOS
			</Item>
			<Item>
				<Music width="30px" height="30px" />
				Music: Rock
			</Item>
			<Item>
				<Game width="30px" height="30px" />
				Good games
			</Item>
		</Row>
	</Facts>
);

const Title = styled.div`
	margin: 0 0 15px 20px;
	padding: 0 0 5px 0;
	position: relative;
	font-size: 17px;
	color: #171717;
	text-align: left;
	line-height: 21px;
	font-weight: 600;
	&::before {
		background: linear-gradient(135deg, rgba(46, 202, 127, 0.4) 0%, rgba(46, 202, 127, 0.01) 100%);
		content: '';
		position: absolute;
		left: -12px;
		top: 0;
		width: 30px;
		height: 30px;
		background: linear-gradient(135deg, rgba(46, 202, 127, 0.4) 0%, rgba(46, 202, 127, 0.01) 100%);
		z-index: 1;
		border-radius: 30px;
	}
	&::after {
		content: '';
		position: absolute;
		left: -40px;
		bottom: -15px;
		width: 95%;
		height: 1px;

		background: radial-gradient(
			ellipse at left,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
	}
`;

const Row = styled.div`
	margin: 0 0px;
	display: flex;
	position: relative;
	flex-direction: row;
`;
const Item = styled.div`
	box-sizing: border-box;
	padding: 20px;
	width: 25%;
	height: 140px;
	position: relative;
	font-size: 14px;
	margin: 0 auto;
	flex-direction: column;
	display: flex;
	fill: #2eca7f;
	align-items: center;

	&::before {
		content: '';
		position: absolute;
		left: 0;
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
