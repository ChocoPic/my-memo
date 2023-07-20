import React, { useState } from 'react'
import { styled } from 'styled-components'


const COLORS = [
    {"id": 1, "color":"#FF0060", "state":"hidden"},
    {"id": 2, "color":"#F6FA70", "state":"hidden"},
    {"id": 3, "color":"#00DFA2", "state":"hidden"},
    {"id": 4, "color":"#0079FF", "state":"hidden"},
    {"id": 5, "color":"#9376E0", "state":"hidden"},
    {"id": 6, "color":"#999999", "state":"hidden"}
]

const ColorContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const StyledLabel = styled.label`
    margin: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    border-radius: 50%;
    background : ${(props) => props.bgcolor};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.25);
    }
  
`

const StyledInput = styled.input`
    visibility: hidden;
`

const Circle = styled.span`
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.01rem solid black;
    border-radius: 50%;
    visibility: ${(props) => props.visible};
`



function ColorPicker() {
    const [pickedValue, setPickedValue] = useState("");
    const [colors, setColors] = useState(COLORS);
   
    const onRadioButton = (e) => {
        setPickedValue(e.target.value);
        let copy = [...colors]
        for (let i=0; i<copy.length; i++){
            if(copy[i].color === e.target.value){
                copy[i].state = 'visible';
            }else{
                copy[i].state = 'hidden';
            }
        }
        setColors(copy)
        // console.log(isColors)
        // console.log('picked: ', e.target)
        // console.log(pickedValue)
    };

    return (
    <div>
        <ColorContainer>
            {colors.map(color => (
                <StyledLabel key={color.id} bgcolor={color.color}>
                    <StyledInput
                        type='radio'
                        className='radio-input'
                        id={color.id}
                        name="radio-button"
                        value={color.color}
                        onChange={onRadioButton}
                        checked={false}
                    />
                    <Circle visible={color.state}></Circle>
                </StyledLabel>
                )
            )}
        </ColorContainer>
    </div>
  )
}


export default ColorPicker