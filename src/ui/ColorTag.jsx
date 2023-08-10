import React from "react";
import styled from "styled-components";
import {COLORS} from "../style";

const StyledColorTag = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1.5rem;
    background: ${(props) => props.color};
    position: relative;
    top: 0.5rem;
    left: 0.5rem;
`;  

function ColorTag(props){
    const {color} = props;
    const tagColor =  color ? COLORS.find(c => c.color_name==color).color_code : "";
    
    return (
        <StyledColorTag color={tagColor}/>
    )
}

export default ColorTag;