import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SoftSkills } from '../../img/skill.svg';
import { ReactComponent as Coding } from '../../img/code-tags.svg';
import { SkillItem } from './skill-item';
const MySkillsContainer = styled.div`
	margin: 0 0 60px 0;
	position: relative;
`;

export const MySkills = (props) => (
	<MySkillsContainer>
		<Title>Skills</Title>
		<Row>
			<Column>
				<ColumnTiile>
					<SoftSkillsComponent />
					SOFT SKILLS
				</ColumnTiile>
				<SkillItem name="English" progress="70%" />
				<SkillItem name="Interest in learning" progress="100%" />
				<SkillItem name="Sociability" progress="90%" />
				<SkillItem name="Flexibility" progress="80%" />
				<SkillItem last name="Design" progress="10%" />
			</Column>

			<Column>
				<ColumnTiile>
					<CodingComponent />
					CODING
				</ColumnTiile>
				<SkillItem name="React" progress="85%" />
				<SkillItem last name="React Native" progress="80%" />
				<SkillItem name="Redux" progress="95%" />
				<SkillItem name="HTML/CSS" progress="90%" />
				<SkillItem name="Redux Saga" progress="80%" />
			</Column>
		</Row>
	</MySkillsContainer>
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
	display: flex;
`;
const Column = styled.div`
	padding: 8px 15px;
	position: relative;
	display: inline-block;
	vertical-align: top;
	font-size: 14px;
	width: 50%;
	box-sizing: border-box;
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
const ColumnTiile = styled.div`
	align-items: center;
	display: flex;
	position: relative;
	letter-spacing: 0em;
	fill: #2eca7f;
	font-weight: 400;
	padding: 0 0 10px 0;
	font-size: 14px;
	&::after {
		content: '';
		position: absolute;
		left: -15px;
		bottom: 0;
		top: 48px;
		width: 100%;
		height: 1px;
		background: radial-gradient(
			ellipse at left,
			rgba(197, 202, 213, 0.7) 0%,
			rgba(255, 255, 255, 0) 70%
		);
	}
`;
const CodingComponent = styled(Coding)`
	width: 30px;
	height: 30px;
	margin: 5px;
`;
const SoftSkillsComponent = styled(SoftSkills)`
	width: 30px;
	height: 30px;
	margin: 5px;
`;
