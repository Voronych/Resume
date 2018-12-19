import React from "react";
import styled from "styled-components";
import { MenuButton } from "../molecules/menu-button";
import { ReactComponent as AboutImg } from "../../img/_ionicons_svg_ios-person.svg";
import { ReactComponent as ResumeImg } from "../../img/_ionicons_svg_md-list-box.svg";
import { ReactComponent as WorksImg } from "../../img/_ionicons_svg_ios-brush.svg";
import { ReactComponent as ContactImg } from "../../img/_ionicons_svg_ios-at.svg";

const MenuBlock = styled.div`
	height: 297px;
	width: 72px;
	background: #ffffff;
	border-radius: 4px;
	margin-top: 16px;
	margin-right: 8px;
`;
export const Menu = props => (
	<MenuBlock>
		<MenuButton active={props.active === "about"} text="ABOUT" onClick={()=>props.onClick('about')}>
			<AboutImg width="22px" height="22px" />
		</MenuButton>
		<MenuButton active={props.active === "resume"} text="RESUME" onClick={()=>props.onClick('resume')}>
			<ResumeImg width="22px" height="22px" />
		</MenuButton>
		<MenuButton active={props.active === "works"} text="WORKS" onClick={()=>props.onClick('works')}>
			<WorksImg width="22px" height="22px" />
		</MenuButton>
		<MenuButton active={props.active === "contact"} last text="CONTACT EMAIL" onClick={()=>props.onClick('contact')}>
			<ContactImg width="22px" height="22px" />
		</MenuButton>
	</MenuBlock>
);