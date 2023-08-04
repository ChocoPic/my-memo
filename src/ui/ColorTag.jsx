import React from "react";
import styled from "styled-components";
import { padding, radius } from "../style";
import {AiFillTag} from "react-icons/ai";

const StyledColorTag = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1.5rem;
    background: ${(props) => props.color};
    position: relative;
    top: -0.5rem;
    left: -0.5rem;
`;  

function ColorTag(props){
    const {color} = props;
    return (
        <StyledColorTag color={color}/>
    )
}

export default ColorTag;