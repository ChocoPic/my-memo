import React, { useState } from 'react'
import styled from "styled-components";
import ColorTag from '../../ui/ColorTag';
import IconButton from '../../ui/IconButton';
import {margin, radius, padding} from '../../style';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

// Card Item
const Card = styled.div`
    margin: ${margin.M};  
    border-radius: ${radius};
    padding: ${padding.M};
    background: #ffffff;
`;

// Card 메모내용
const CardText = styled.span`
    margin-left: ${margin.S};
    margin-right: ${margin.S};
    color: black;
    font-size: 1rem;
    display: block;
`;

// 버튼 영역
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const MemoItem = ({ item }) => {
    // const [comments, setComments] = useState();
    // const handleComment = event => {
    //     props.onChange(event.target.value);
    // }

    const editMemo = () => {

    }
    const deleteMemo = () => {

    }

  return (
    <Card>
        <ColorTag color={item.color}/>
        <CardText>{item.content}</CardText>
        <ButtonContainer>
            <IconButton onClick={editMemo} icon={<AiOutlineEdit size={28}/>}/>
            <IconButton onClick={deleteMemo} icon={<AiOutlineDelete size={28}/>}/>
        </ButtonContainer>
    
        {/* 부모 컴포넌트로 state를 올려보자
        <div className='comment'>
            <input type="text" name="comment" onChange={handleComment}/>
        </div> */}
    </Card>
  )
}

export default MemoItem