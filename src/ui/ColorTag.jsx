import React from "react";
import styled from "styled-components";
import { radius } from "../style";

const StyledColorTag = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: ${radius} 0 ${radius} 0;
    background: ${(props) => props.color};
    position: relative;
    top: -0.25rem;
    left: -0.55rem;
`;  

function ColorTag(props){
    const {color} = props;
    return <StyledColorTag color={color}/>;
}

export default ColorTag;