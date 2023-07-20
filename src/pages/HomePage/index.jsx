import React, { useEffect, useState } from 'react'
import CardItem from './memo/MemoItem'
import { CardListWrapper } from '../../style';
import MemoForm from './memo/MemoForm';


const HomePage = () => {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     setPosts([...examples]);
    // }, []);
    
    const memos = [
        {
            id: 1,
            content: "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
            color: ""
        },
        {
            id: 2,
            content: "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
            color: ""
        },
        {
            id: 3,
            content: "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
            color: ""
        },
        {
            id: 4,
            content: "내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
            color: ""
        },
    ];
    
    return (
        <>
            {/* 로고 */}
            <h2>Memo</h2>

            {/* 새 메모 */}
            <MemoForm/>
            {/* 메모 목록 */}
            <CardListWrapper>
                {memos.map(memo => (
                    <CardItem item={memo} key={memo.id}/>
                ))}
            </CardListWrapper>
        </>
    )
}

export default HomePage