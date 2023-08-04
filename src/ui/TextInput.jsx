import React from "react";
import styled from "styled-components";
import { radius } from "../style";

const StyledTextarea = styled.textarea`
    width: calc(100% - 3rem);
    ${(props) => 
        props.height && `height: ${props.height}px;`
    }
    padding: 1rem;
    font-size: 1rem;
    line-height: 1rem;
    border-radius: 0.5rem;
    resize: none;
`;

function TextInput(props){
    const {value, onChange} = props;
    return <StyledTextarea height={120} value={value} onChange={onChange}/>;
}

export default TextInput;