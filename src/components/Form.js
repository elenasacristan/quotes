import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  differenceYears,
  incrementByBrand,
  incrementByPlan,
} from "../helpers.js";
import PropTypes from "prop-types";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

/* -webkit-appearance remove the usual select styles and let us add out styles */
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

/* this is how we do hover using styled components */
const Submit = styled.input`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.8s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
  tex-align: center;
`;

const Form = ({ setDetails, setLoading }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);

  // extract the values
  const { brand, year, plan } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validate
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }

    // remove previous error messages
    setError(false);

    // calculate quote
    let quote = 2000;

    // obtain the year difference for each year -3%
    quote = quote - quote * 0.03 * differenceYears(year);

    // American 15%, Asiatic 5%, European 30%
    quote *= incrementByBrand(brand);

    // Basic +20% Complete +50%
    quote *= incrementByPlan(plan);

    //Total
    setLoading(true);

    setTimeout(() => {
      setDetails({ quote: parseFloat(quote).toFixed(2), quoteDetails: data });
      setLoading(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error>All the fields need to be filled</Error>}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={handleChange}>
          <option>-- Select --</option>
          <option value="European">European</option>
          <option value="American">American</option>
          <option value="Asiatic">Asiatic</option>
        </Select>
      </Field>
      <Field>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={handleChange}>
          <option>-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          onChange={handleChange}
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
        />
        Basic
        <InputRadio
          onChange={handleChange}
          type="radio"
          name="plan"
          value="complete"
          checked={plan === "complete"}
        />
        Complete
      </Field>
      <Submit type="submit" value="Get Quote" />
    </form>
  );
};

Form.propTypes = {
  setDetails: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Form;
