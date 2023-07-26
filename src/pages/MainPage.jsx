import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import MemoForm from './memo/MemoForm';
import MemoItem from './memo/MemoItem';
import data from '../../db.json';
import { padding } from '../style';

const CardListWrapper = styled.section`
    width: 100%;
    padding: ${padding.S};   
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
`;


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
            <div>
                색:{formData.color} 내용:{formData.content}
                <br/>이걸 저장하고 업데이트 할 예정
            </div>
            
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