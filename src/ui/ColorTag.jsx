import React from "react";
import styled from "styled-components";
import { padding, radius } from "../style";

const StyledColorTag = styled.div`
    --move-out: 0.75rem;

    width: 1.5rem;
    height: 1.5rem;
    border-radius: ${radius} ${radius} 0 ${radius};
    background: ${(props) => props.color};
    border: 2px solid white;

    position: relative;
    top: calc(-${padding.M} - var(--move-out));
    left: calc(-${padding.M} - var(--move-out));

    transform: rotate(45deg);
`;  

function ColorTag(props){
    const {color} = props;
    return <StyledColorTag color={color}/>;
}

export default ColorTag;