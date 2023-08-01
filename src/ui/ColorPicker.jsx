import React, { useEffect, useState } from 'react'
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

const ColorPicker = ({ onChange, curColor })=>{
    const [colors, setColors] = useState(COLORS);   //색상 목록 배열

    const checkingColor = (pickedColor) => {
        // 선택된 버튼 강조(span visible)
        let copy = [...colors];
        for(let i=0; i<copy.length; i++){
            if(pickedColor === copy[i].color){
                copy[i].state = 'visible';
            }else{
                copy[i].state = 'hidden';
            }
        }
        return copy;
    }

    useEffect(() => {
        if(curColor){
            setColors(checkingColor(curColor));    //선택된 색 있으면 표시
            onChange(curColor); //부모 컴포넌트로 전달
        }
    },[])
   
    const onRadioButton = (e) => {
        setColors(checkingColor(e.target.value)) //선택된 값 저장
        onChange(e.target.value); //부모 컴포넌트로 전달
    };

    return (
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
  )
}


export default ColorPicker