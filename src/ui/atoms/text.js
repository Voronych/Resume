import styled from "styled-components"

export const Text = styled.div`
	z-index: 1;
		font-weight: 600;
	color:${props => props.color || ''};
`