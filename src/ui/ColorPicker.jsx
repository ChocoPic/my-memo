import React from 'react'
import { styled } from 'styled-components'

const colors = [
    {"id": 1, "color":"#FF0060"},
    {"id": 2, "color":"#F6FA70"},
    {"id": 3, "color":"#00DFA2"},
    {"id": 4, "color":"#0079FF"},
    {"id": 5, "color":"#9376E0"},
    {"id": 6, "color":"#303841"}
]

const ColorContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Circle = styled.div`
    display: block;
    margin: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background : ${(props) => props.bgcolor || 'white'};

    cursor: pointer;
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.25);
    }
`

function ColorPicker() {
  return (
    <div>
        <ColorContainer>
            {colors.map(color => 
                <Circle 
                    key={color.id} 
                    bgcolor={color.color}
                />
            )}
        </ColorContainer>
    </div>
  )
}


export default ColorPicker