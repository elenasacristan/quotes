import React from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem;
`;

const FormContainer = styled.div`
  background-color: #fff;
`;

function App() {
  return (
    <Container>
      <Header title="Tiulo" />
      <FormContainer></FormContainer>
    </Container>
  );
}

export default App;
