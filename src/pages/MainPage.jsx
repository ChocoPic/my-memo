import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import MemoForm from './memo/MemoForm';
import MemoItem from './memo/MemoItem';
import data from '../../db.json';
import { padding } from '../style';
import useLocalStorage from '../store/LocalStorageHandler';

const CardListWrapper = styled.section`
    width: 100%;
    padding: ${padding.S};   
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
`;


const MainPage = () => {
    const { storedData, addData } = useLocalStorage("memo");

    const [memos, setMemos] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState({
        color: "",
        content: ""
    });

    // storedData가 업데이트될 때마다 memos도 업데이트 해주자
    useEffect(()=>{
        if(storedData){ //로딩 됐으면 세팅
            setMemos(storedData);
            setLoaded(true);
        }else{
            setLoaded(false);
        }
        console.log('MainPage',storedData)
    },[storedData]);
   
    const formHandler = (data) => {
        setFormData(data);  // 폼 입력을 받아와서
        addData(formData); //스토리지에 내용 저장
    };

    // 데이터가 준비될때까지 로딩중
    if (!loaded){
        return `<div>로딩중...${memos}</div>`;
    }
    // 데이터가 있으면 렌더링
    return (
        <>
            {/* 로고 */}
            <h2>Memo</h2>

            {/* 새 메모 */}
            <MemoForm formHandler={formHandler}/>
            {/* <div>
                색:{formData.color} 내용:{formData.content}
                <br/>이걸 저장하고 업데이트 할 예정
            </div>
             */}
            {/* 메모 목록 */}
            <CardListWrapper>
            {loaded && (memos.map(memo => (
                <MemoItem item={memo} key={memo.id}/>
            )))}
            </CardListWrapper>
        </>
    )
}

export default MainPage