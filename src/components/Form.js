import React, {useState} from 'react';
import styled from '@emotion/styled';

const Field = styled.div`
display: flex;
    margin-bottom: 1rem;
    align-items: center;`;

const Label = styled.label`
flex: 0 0 100px;
`;

const Select = styled.select`
 display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    /* -webkit-appearance remove the usual select styles and let us add out styles */
    -webkit-appearance: none;
`;


const InputRadio = styled.input`
margin: 0 1rem`;

const Submit = styled.input`
 background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
   /* this is how we do hover using styled components */
    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Form = () => {

    const [data, setData] = useState({
        brand:'',
        year:'',
        plan:''
    })

    // extract the values
    const {brand, year, plan} = data;

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value})
    }

    console.log(data)

    return (  
        <form>
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
                <InputRadio onChange={handleChange} type="radio" name="plan" value="basic" checked={plan === "basic"}/>Basic
                <InputRadio onChange={handleChange} type="radio" name="plan" value="complete" checked={plan === "complete"}/>Complete
            </Field>
            <Submit type="submit" value="Get Quote"/>
        </form>
    );
}
 
export default Form;