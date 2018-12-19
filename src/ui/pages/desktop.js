import React, { Component } from "react";
import styled from "styled-components";
import { Menu } from "../organisms/menu";
import { MainInfo } from "../organisms/main-info";
import { About } from "../organisms/about";
import { Resume } from "../organisms/resume";
import { Work } from "../organisms/works";
import { Contact } from "../organisms/contact";
import { PoseGroup } from "react-pose";
const Container = styled.div`
	position: absolute;
	justify-content: flex-start;
	margin: 0 auto;
	display: flex;
	width: 1100px;
	z-index: 10;
		
`;

function CardSwitсher(card) {
	switch (card) {
		case "about":
			return <About key="about" />;
		case "resume":
			return <Resume key="resume" />;
		case "works":
			return <Work key="work" />;
		case "contact":
			return <Contact key="contact" />;
		default:
			return "";
	}
}
class UiContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: ""
		};
	}
	componentDidMount() {
		this.setState({
			active: "about"
		});
	}
	render() {
		return (
			<Portolio>
				<Container>
					<Menu
						active={this.state.active || "about"}
						onClick={card =>
							this.setState({
								active: card
							})
						}
					/>

					<MainInfo />
					<PoseGroup>{CardSwitсher(this.state.active)}</PoseGroup>
				</Container>

			</Portolio>
		);
	}
}

export default UiContainer;
const Portolio = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	justify-content: center;
	display: flex;
	align-items: center;
	
`;