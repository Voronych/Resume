import styled from "styled-components";

export const BgPhoto = styled.div`
position: relative;
overflow: hidden;
	&::after {
		content: "";
		position: absolute;
		right: 20%;
		top: 96%;

		z-index: 1;
		width: 100%;
		height: 200px;
		background: #ffffff;
		transform: rotate(12deg);
	}

	&::before {
		content: "";
		position: absolute;
		top: 98%;
		left: 10%;
		z-index: 2;
		width: 100%;
		height: 200px;
		background: #ffffff;
		transform: rotate(-12deg);
	}
`;
export const Photo = styled.div`
	margin: -100px 0 20px 0;
	position: relative;
	z-index: 3;
	display: inline-block;
	width: 140px;
	&::before {
		content: "";
		position: absolute;
		border-radius: 100%;
		z-index: 0;
		top: 10px;
		left: -10px;
		width: 140px;
		height: 140px;
		background: linear-gradient(
			135deg,
			rgba(46, 202, 127, 0.4) 0%,
			rgba(46, 202, 127, 0.01) 100%
		);
	}
`;