import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 4rem);
    ${(props) => 
        props.height && `height: ${props.height}px;`
    }
    padding: 1rem;
    font-size: 1rem;
    line-height: 1rem;
`;

function TextInput(props){
    const {height, value, onChange} = props;
    return <StyledTextarea height={height} value={value} onChange={onChange}/>;
}

export default TextInput;