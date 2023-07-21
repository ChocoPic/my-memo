import React, { useEffect, useState } from 'react'
import { CardListWrapper } from '../style';
import MemoForm from './memo/MemoForm';
import MemoItem from './memo/MemoItem';
import data from '../../db.json';


const MainPage = () => {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     setPosts([...examples]);
    // }, []);
    
    const memos = data;

    const [formData, setFormData] = useState({
        color: "",
        content: ""
    });
    const formHandler = (data) => {
        setFormData(data);
    };


    
    return (
        <>
            {/* 로고 */}
            <h2>Memo</h2>

            {/* 새 메모 */}
            <MemoForm formHandler={formHandler}/>
            
            {/* 메모 목록 */}
            <CardListWrapper>
                {memos.map(memo => (
                    <MemoItem item={memo} key={memo.id}/>
                ))}
            </CardListWrapper>
        </>
    )
}

export default MainPage