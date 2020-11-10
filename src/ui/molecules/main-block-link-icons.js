import styled from 'styled-components';
import React from 'react';
import { ReactComponent as Linkedin } from '../../img/_ionicons_svg_logo-linkedin.svg';
import { ReactComponent as Twitter } from '../../img/_ionicons_svg_logo-twitter.svg';
import { ReactComponent as Git } from '../../img/_ionicons_svg_logo-github.svg';
import { ReactComponent as Facebook } from '../../img/_ionicons_svg_logo-facebook.svg';
const ListIcons = styled.div`
	position: inherit;
`;
const Link = styled.a`
	margin: 0 6px;
	z-index: 1;
	transition: all 0.3s ease 0s;
	position: inherit;
	&:hover {
		fill: #2eca7f;
	}
`;
export const Links = (props) => (
	<ListIcons>
		<Link href="https://twitter.com/not_a_password">
			<Twitter width="16px" height="16px" />
		</Link>
		<Link href="https://github.com/s-u-d-o-e-r">
			<Git width="16px" height="16px" />
		</Link>
		<Link href="https://www.facebook.com/nazar.voronych">
			<Facebook width="16px" height="16px" />
		</Link>
		<Link href="https://www.linkedin.com/in/%D0%BD%D0%B0%D0%B7%D0%B0%D1%80-%D0%B2-6a896a11a/">
			<Linkedin width="16px" height="16px" />
		</Link>
	</ListIcons>
);

