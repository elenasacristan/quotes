import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DetailsContainer = styled.div`
  background-color: #00838f;
  margin-top: 1rem;
  padding: 1rem;
  color: #fff;
  text-align: center;
`;

const Details = ({ quoteDetails }) => {
  const { year, brand, plan } = quoteDetails;
  return (
    <DetailsContainer>
      <h1>Details of your quote</h1>
      <ul>
        <li>Year: {year}</li>
        <li>Brand: {brand}</li>
        <li>Plan: {plan}</li>
      </ul>
    </DetailsContainer>
  );
};

Details.propTypes = {
    quoteDetails: PropTypes.object.isRequired
}

export default Details;
