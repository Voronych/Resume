import Particles from "react-particles-js";
import React from "react";
import styled from "styled-components";
export const ParticlesBg = props => (
  <StyledParticles
    params={{
      particles: {
        number: {
          value: props.value||300
        },
        size: {
          value: 3
        }
      },

      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          }
        }
      }
    }}
  />
);
const StyledParticles = styled(Particles)`
  width: 100vw;
  position: relative;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 1185px) {
    position: fixed;
        left: 0;
    top: 0;

  }
`;