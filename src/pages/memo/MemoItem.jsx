import React, { useState } from 'react'
import { Card, ColorTag, CardText} from '../../style';
import Button from '../../ui/Button';



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