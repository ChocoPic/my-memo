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
        <ColorTag/>
        <CardText>{item.content}</CardText>
        <Button>수정</Button>
        <Button>삭제</Button>
        
        {/* 부모 컴포넌트로 state를 올려보자
        <div className='comment'>
            <input type="text" name="comment" onChange={handleComment}/>
        </div> */}
    </Card>
  )
}

export default MemoItem