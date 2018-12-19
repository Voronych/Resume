import React, { Component } from "react";
import styled from "styled-components";
import { MainInfo } from "../organisms/main-info";
import { About } from "../organisms/about";
import { Resume } from "../organisms/resume";
import { Work } from "../organisms/works";
import { Contact } from "../organisms/contact";

class MobileUiContainer extends Component {
	render() {
		return (
			<Portolio>
				<MainInfo />
				<About />
				<Resume />
				<Work />
				<Contact />
			</Portolio>
		);
	}
}

export default MobileUiContainer;
const Portolio = styled.div`
@media (min-width: 700px) {
	width: 530px;
	}

	flex-direction: column;
	align-items: center;
	display: flex;


`;