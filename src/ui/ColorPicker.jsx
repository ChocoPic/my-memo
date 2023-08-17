import React, { useState } from 'react'
import { styled } from 'styled-components'
import { COLORS } from '../style.js'

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
    border: 0.15rem solid black;
    border-radius: 50%;
    visibility: ${(props) => props.visible};
`

const ColorPicker = ({ onSetPickedColor, value})=>{

    // 선택된 버튼에만 표시하는 함수
    const setVisiblity = (picked) => {
        let copy = [...COLORS];
        for (let i=0; i<copy.length; i++){
            if(copy[i].color_name === picked){
                copy[i].state = 'visible';
            }else{
                copy[i].state = 'hidden';
            }
        }
        return copy;
    }


    const [colors, setColors] = useState(setVisiblity(value));   //색상 목록 배열
   
    const onRadioButton = (e) => {
        setColors(setVisiblity(e.target.value)) //선택된 값 저장
        onSetPickedColor(e.target.value); //부모 컴포넌트로 전달
    };

    return (
        <ColorContainer>
            {colors.map(color => (
                <StyledLabel key={color.color_name} bgcolor={color.color_code}>
                    <StyledInput
                        type='radio'
                        className='radio-input'
                        id={color.color_name}
                        name="radio-button"
                        value={color.color_name}
                        onChange={onRadioButton}
                        checked={false}
                    />
                    <Circle visible={color.state}></Circle>
                </StyledLabel>
                )
            )}
        </ColorContainer>
  )
}


export default ColorPicker