import React, { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Details from "./components/Details";
import Quote from "./components/Quote";
import Spiner from "./components/Spiner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const { quote, quoteDetails } = details;

  return (
    <Container>
      <Header title="Quotes" />
      <FormContainer>
        <Form setDetails={setDetails} setLoading={setLoading} />
        {loading && <Spiner />}
        {quote && !loading && <Details quoteDetails={quoteDetails} />}
        {!loading && <Quote quote={quote} />}
      </FormContainer>
    </Container>
  );
}

export default App;
