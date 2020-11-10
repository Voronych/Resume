import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';
import { TextArea } from '../atoms/text-area';
import { ReactComponent as Arrow } from '../../img/arrow-right.svg';

const ContactFormContainer = styled.div`
	position: relative;
	width: 100%;
	display: inline-block;
	vertical-align: top;
	font-size: 14px;
`;

export const ContactForm = (props) => (
	<ContactFormContainer>
		<Title>Contact Me</Title>
		<Row>
			<Form action="https://formspree.io/f/meqpzqnn" method="POST">
				<Input type="text" name="name" placeholder="Full Name" />
				<Input type="email" name="email" placeholder="Email Address" />
				<TextArea type="text" name="message" placeholder="Your Message" />

				<SendButton type="submit">
					SEND MESSAGE <ArrowIcon />
				</SendButton>
			</Form>
		</Row>
	</ContactFormContainer>
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
		content: '';
		position: absolute;
		left: -12px;
		top: 0;
		width: 30px;
		height: 30px;
		z-index: 1;
		border-radius: 30px;
		background: linear-gradient(135deg, rgba(46, 202, 127, 0.4) 0%, rgba(46, 202, 127, 0.01) 100%);
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
	padding: 20px;
	position: relative;
	width: 99%;
	height: auto;
	display: inline-block;
	vertical-align: top;
	box-sizing: border-box;
	text-align: left;
	font-size: 14px;
	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 1px;
		height: 100%;
		background: -moz-radial-gradient(
			top,
			ellipse cover,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
		background: -webkit-radial-gradient(
			top,
			ellipse cover,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
		background: radial-gradient(
			ellipse at top,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
	}
`;

const SendButton = styled(Button)`
	display: flex;
	margin: 30px 0 0 0;
	align-items: center;
	width: 140px;
	height: 50px;
	text-align: left;
	box-sizing: border-box;
	font-size: 14px;
	&:hover {
		color: #2eca7f;
		fill: #2eca7f;
	}
`;
const ArrowIcon = styled(Arrow)`
	width: 20px;
	height: 16px;
`;
const Form = styled.form`
	flex-wrap: wrap;
	justify-content: space-between;
	display: flex;
`;

