import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { toast } from 'react-toastify';
import useLocalStorage from '../store/LocalStorageHandler';

import MemoForm from './memo/MemoForm';
import MemoItem from './memo/MemoItem';
import IconButton from '../ui/IconButton';
import ColorFilter from '../ui/ColorFilter';
import SpeechBubble from '../ui/SpeechBubble';

import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai';
import { COLORS, theme, padding, radius, margin } from '../style';

/* styled-components */
const Header = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
`
const LogoText = styled.h3`
    color: ${theme.primaryLight};
`
const ButtonContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    width: 100%;
    height: fit-content;
`
const CardListContainer = styled.section`
    width: 100%;
    min-width: 15rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, minmax(13rem, 1fr));
    grid-template-rows: auto;
    
    border-radius: ${radius};
    background: ${theme.white};
    padding: ${padding.L};
    margin-top: ${margin.L};
`;

/* 메모 목록 컴포넌트*/
const ItemList = ({items, filtercolor}) => {
    return(
        <>
        {/* 필터값이 all이면 모두 출력, 색상값이면 그 색상만 출력*/}
        {items
            .filter((item) => filtercolor==='all' ? true : item.color === filtercolor)
            .map((item) => (
                <MemoItem 
                    key={item.id} 
                    item={item} 
                />
            ))
        }
       </>
    )
};

const MainPage = () => {
    const { storedData } = useLocalStorage("memo");
    const [memos, setMemos] = useState([]); //메모 아이템 내용들
    const [loaded, setLoaded] = useState(false);    //로딩 여부
    const [filter, setFilter] = useState(
        JSON.parse(sessionStorage.getItem("filter")) ||"all"); //필터
    const [showForm, setShowForm] = useState( //새 메모 창
        JSON.parse(sessionStorage.getItem("form")) ||false);   

    useEffect(()=>{ //세션 스토리지에 form이 닫히지 않게 저장
       sessionStorage.setItem("form", JSON.stringify(showForm));
    },[showForm]);
    useEffect(()=>{
       sessionStorage.setItem("filter", JSON.stringify(filter));
    },[filter]);

    // 로딩되었는지 체크한다.
    useEffect(() => {
        if(storedData){
            setLoaded(true);
        }else{
            setLoaded(false);
        }
        // console.log('마운트시 한번만 실행')
    },[])
    
    // storedData가 업데이트될 때마다 memos도 업데이트 해주자
    useEffect(()=>{
        if(loaded){ //로딩 됐으면 세팅
            setMemos(storedData);   //필터링된 결과를 세팅해준다
            // console.log("storedData 업데이트됨");
            // 저장되었을때
            toast.success('업데이트 완료!',{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "light",
            })
           closeForm();
        }
    },[storedData]);

    // 필터 세팅하는 이벤트
    const changeFilter = (value) => {
        setFilter(value);
        // console.log(value);
    }
    // 외부 클릭시 새 메모 닫기
    const closeForm = () => {
       setShowForm(false);
    };

    // 새 메모 토글 버튼
    const toggleForm = () =>{
        setShowForm(!showForm);
    };
    
    // 데이터가 준비될때까지 로딩중
    if (!loaded){
        return `<div>로딩중...</div>`;
    }
    // 데이터가 있으면 렌더링
    return (
        <>
        {/* 헤더 */}
        <Header>
            {/* 로고 */}
            <LogoText>mymemo</LogoText>
            <ButtonContainer>
                {/* 새 메모 버튼 */}
                <IconButton
                    onClick={toggleForm} 
                    icon={showForm? <AiOutlineClose size={24}/> : <AiOutlinePlus size={24}/>}
                    bgcolor={theme.white}
                    size={3}
                />
                {/* 필터 */}
                <ColorFilter color="전체" 
                    value="all" 
                    onClick={() => changeFilter('all')}
                    isChecked={filter=="all"? true : false}/>
                {COLORS.map((item) => (
                    <ColorFilter key={item.color_name} 
                        color={item.color_name} 
                        value={item.color_name} 
                        onClick={() => changeFilter(item.color_name)}
                        isChecked={filter==item.color_name? true : false}/>
                ))}    
            </ButtonContainer>
        </Header>

        {/* 새 메모 폼*/}
        {showForm && (
            <SpeechBubble>
                <MemoForm/>
            </SpeechBubble>
        )}
        
        {/* 메모 목록 */}
        <CardListContainer onClick={closeForm}>
        {loaded && 
            <ItemList items={memos} filtercolor={filter}/>
        }
        </CardListContainer>
        </>
    )
}

export default MainPage