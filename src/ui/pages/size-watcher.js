import React, { Component } from "react";
import { ParticlesBg } from "../organisms/particles";
import styled from "styled-components";
import UiContainer from "./desktop";
import MobileUiContainer from "./mobile";

class ScreenSizeWatcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: ""
    };
  }
  componentDidMount() {
    window.addEventListener("resize", bind(Checker, this));
    bind(Checker, this)();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", bind(Checker, this));
  }

  render() {
    return <UiSwitcher {...this.state} />;
  }
}

export default ScreenSizeWatcher;
const Container = styled.div`
  height: 100%;
  justify-content: center;

  display: flex;
`;

function UiSwitcher(state) {
  if (state.render === "mobile") {
    return (
      <Container>
        <MobileUiContainer />
      </Container>
    );
  } else if (state.render === "desktop") {
    return (
      <Container>
        <UiContainer />
        <ParticlesBg />
      </Container>
    );
  } else if (state.render === "tablet") {
    return (
      <Container>
        <MobileUiContainer />
        <ParticlesBg value="80" />
      </Container>
    );
  } else {
    return null;
  }
}

function Checker() {
  if (
    window.matchMedia("(max-width: 1185px)").matches &&
    window.matchMedia("(min-width: 600px)").matches &&
    this.state.render !== "tablet"
  ) {
    this.setState({ render: "tablet" });
  } else if (
    window.matchMedia("(max-width: 600px)").matches &&
    this.state.render !== "mobile"
  ) {
    this.setState({ render: "mobile" });
  } else if (
    !window.matchMedia("(max-width: 1185px)").matches &&
    this.state.render !== "desktop"
  ) {
    this.setState({ render: "desktop" });
  }
}

function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}