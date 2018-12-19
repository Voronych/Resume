import styled from 'styled-components'

export const Img = styled.img`
   z-index: ${props => props.index || '1'};
   position: ${props => props.pos || 'inherit'};
   border-radius:${props => props.radius || '0px'};
   border:${props => props.border || 'none'};

`