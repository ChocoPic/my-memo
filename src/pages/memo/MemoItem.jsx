import React, { useState } from 'react'
import styled from "styled-components";
import Button from '../../ui/Button';
import ColorTag from '../../ui/ColorTag';
import {margin, radius, padding} from '../../style';

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

const MemoItem = ({ item }) => {
    // const [comments, setComments] = useState();
    // const handleComment = event => {
    //     props.onChange(event.target.value);
    // }

  return (
    <Card>
        <ColorTag color={item.color}/>
        <CardText>{item.content}</CardText>
        <Button title="수정아이콘"></Button>
        <Button title="삭제아이콘"></Button>
        
        {/* 부모 컴포넌트로 state를 올려보자
        <div className='comment'>
            <input type="text" name="comment" onChange={handleComment}/>
        </div> */}
    </Card>
  )
}

export default MemoItem