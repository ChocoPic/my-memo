import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import MemoForm from './memo/MemoForm';
import MemoItem from './memo/MemoItem';
import { margin, padding, radius } from '../style';
import useLocalStorage from '../store/LocalStorageHandler';
import IconButton from '../ui/IconButton';
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai';
import { toast } from 'react-toastify';
import { COLORS } from '../style';
import ColorFilter from '../ui/ColorFilter';

/* styled-components */
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
`;
const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;  
    align-items: center;
    flex-direction: row;
    background: white;
    margin-left: ${margin.S};
    margin-right: ${margin.S};
`;
const Line = styled.span`
    display: block;
    width: 100%;
    height: 0.05rem;
    background: black;
    margin-top: ${margin.M};
    margin-bottom: ${margin.M};
`;
const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 16rem;
    margin: ${margin.S};
    padding: ${padding.S};
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
    const [isFilled, setIsFilled] = useState(false);
    const [showForm, setShowForm] = useState( //새 메모 창
        JSON.parse(sessionStorage.getItem("form"||false))
    );       
    const [filter, setFilter] = useState('all'); //필터

    useEffect(()=>{ //세션 스토리지에 form이 닫히지 않게 저장
       sessionStorage.setItem("form", JSON.stringify(showForm));
    },[showForm]);

    // 로딩되었는지 체크한다.
    useEffect(() => {
        if(storedData){
            setLoaded(true);
        }else{
            setLoaded(false);
        }
        console.log('마운트시 한번만 실행')
    },[])
    
    // storedData가 업데이트될 때마다 memos도 업데이트 해주자
    useEffect(()=>{
        if(loaded){ //로딩 됐으면 세팅
            setMemos(storedData);   //필터링된 결과를 세팅해준다
            // console.log("storedData 업데이트됨")
            if(isFilled){
                toast.success('업데이트 완료!',{
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    theme: "light",
                })
         
            }
        console.log('데이터 업데이트마다 실행')
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
                    <MemoForm setIsFilled={setIsFilled}/>
                )}
            </Container>

            <Line/>

            {/* 필터 */}
            <h3>필터</h3>
            <FilterContainer>
                <ColorFilter 
                    color="#000000" 
                    bgcolor="#ffffff"
                    value="all" 
                    onClick={() => changeFilter('all')}/>
                {COLORS.map(item => (
                    <ColorFilter 
                        key={item.id}
                        color={item.color} 
                        bgcolor="#ffffff"
                        value={item.color}
                        onClick={() => changeFilter(item.color)}/>
                ))}    
            </FilterContainer>
            
            {/* 메모 목록 */}
            <CardListWrapper onClick={closeForm}>
            {loaded && 
                <ItemList items={memos} filtercolor={filter}/>
            }
            </CardListWrapper>
        </>
    )
}

export default MainPage