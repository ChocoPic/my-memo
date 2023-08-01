import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import MemoForm from './memo/MemoForm';
import MemoItem from './memo/MemoItem';
import { margin, padding, radius } from '../style';
import useLocalStorage from '../store/LocalStorageHandler';
import IconButton from '../ui/IconButton';
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai';

const CardListWrapper = styled.section`
    width: 100%;
    padding: ${padding.S};   
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start-end;
    flex-direction: column;
    background: white;
    border-radius: ${radius};
    padding-left: ${padding.M};
    padding-right: ${padding.M};
`
const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;  
    align-items: center;
    flex-direction: row;
    background: white;
    margin-left: ${margin.S};
    margin-right: ${margin.S};
`

const MainPage = () => {
    const { storedData, addData, editData, deleteData } = useLocalStorage("memo");
    const [memos, setMemos] = useState([]); //메모 아이템 내용들
    const [loaded, setLoaded] = useState(false);    //로딩 여부
    const [showForm, setShowForm] = useState(false);    //새 메모 창


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

    // 새 메모 토글 버튼
    const toggleForm = () =>{
        setShowForm(!showForm);
    }
    // ADD MEMO //
    const formHandler = (data) => {
        addData(data); //스토리지에 새 데이터 저장
    };
    // EDIT MEMO //
    const editHandler = (data) => {
        //data: 누른 메모의 id, color, content
        //메모 작성 폼 팝업 띄워줌
        //팝업으로 뜬 폼에 기존 data 세팅
        editData(data); //저장 누르면 내용 수정
    }
    // DELETE MEMO //
    const deleteHandler = (data) => {
        deleteData(data.id);    //스토리지에서 해당 데이터 삭제
    }
 
    // 데이터가 준비될때까지 로딩중
    if (!loaded){
        return `<div>로딩중...${memos}</div>`;
    }
    // 데이터가 있으면 렌더링
    return (
        <>
            {/* 로고 */}
            <h2>Memo</h2>

            {/* 새 메모 폼*/}
            <Container>
                <ContainerHeader>
                    <h3>새 메모</h3>
                    <IconButton 
                        onClick={toggleForm} 
                        icon={showForm? <AiOutlineClose/> : <AiOutlinePlus/>}
                    />
                </ContainerHeader>
                {showForm && (
                    <MemoForm formHandler={formHandler}/>
                )}
            </Container>

            -----------------  구분선?  -------------------
          
            {/* 메모 목록 */}
            <CardListWrapper>
            {loaded && (memos.map(memo => (
                <MemoItem key={memo.id} 
                    item={memo} 
                    onEdit={editHandler}
                    onDelete={deleteHandler}
                />
            )))}
            </CardListWrapper>
        </>
    )
}

export default MainPage