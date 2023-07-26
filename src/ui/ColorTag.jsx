import React from "react";
import styled from "styled-components";
import { padding, radius } from "../style";

const StyledColorTag = styled.div`
    --move-out: 0.25rem;

    width: 1.5rem;
    height: 1.5rem;
    border-radius: ${radius} 0 ${radius} 0;
    background: ${(props) => props.color};
    position: relative;
    top: calc(-${padding.M} - var(--move-out));
    left: calc(-${padding.M} - var(--move-out));
`;  

function ColorTag(props){
    const {color} = props;
    return <StyledColorTag color={color}/>;
}

export default ColorTag;