import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";


const ContainerInfo = styled.div`
  background-color: #26c6da;
  color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
`;

const QuoteText = styled.span`
  color: #00838f;
  font-weight:bolder;
`;

const QuoteContainer = styled.div`
  margin-top: 1rem;
  background-color: #26c6da;
  padding: 1rem;
  position: relative;
  text-align: center;
`;

const Quote = ({ quote }) => {
  return (
    <>
      {quote > 0 ? (
        <QuoteContainer>
          <TransitionGroup component="span" className="resultado">
            <CSSTransition classNames="resultado" key={quote} timeout={{enter:500, exit:500}}>
              <QuoteText>The Total is: {quote}</QuoteText>
            </CSSTransition>
          </TransitionGroup>
        </QuoteContainer>
      ) : (
        <ContainerInfo>Please select a year, a brand and a plan</ContainerInfo>
      )}
    </>
  );
};

Quote.protoTypes = {
    quote: PropTypes.number.isRequired
}

export default Quote;
