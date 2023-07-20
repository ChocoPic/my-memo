import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 0.25rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
`;

function Button(props){
    const {title, onClick} = props;
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
}

export default Button;