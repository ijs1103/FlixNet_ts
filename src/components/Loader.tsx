import React from "react";
import styled from "styled-components";
import loader from "../assets/loader.gif";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: rgb(0,0,0);
`;

const Loader =  () => (
  <Container>
    <img src ={loader} alt="loading ..." />
  </Container>
);

export default Loader;