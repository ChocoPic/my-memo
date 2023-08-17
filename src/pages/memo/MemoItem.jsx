import styled from "styled-components";
import ColorTag from '../../ui/ColorTag';
import IconButton from '../../ui/IconButton';
import {margin, radius, padding, theme} from '../../style';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Popup from "./Popup";
import { useState } from "react";
import useLocalStorage from "../../store/LocalStorageHandler";

// Card Item
const Card = styled.div`
    border-radius: ${radius};
    background: white;
    box-shadow: 0px 0px 0.25rem 0.25rem #dddddd;
`;

// Card 메모내용
const CardText = styled.p`
    white-space: pre;   //줄바꿈, 공백 그대로 출력
    word-break: break-all;
    height: 10rem;
    overflow: auto;

    margin-left: ${margin.M};
    margin-right: ${margin.M};
    margin-top: ${margin.S};
    padding: ${padding.M};
    color: ${theme.black};
    font-size: 1rem;
    display: block;

    &::-webkit-scrollbar{   //스크롤 전체
        width: 0.5rem;
        height: 0.5rem;
    }
    &::-webkit-scrollbar-track{ //스크롤 외부
       background-color: ${theme.white};
    }
    &::-webkit-scrollbar-thumb{ //스크롤 막대
        background-color: ${theme.gray};
        border-radius: 0.5rem;
    }
`;

// 버튼 영역
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const MemoItem = ({ item }) => {
    const {deleteData} = useLocalStorage("memo");
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };
    const closePopup = () => {
        setIsOpen(false);
    };
    const editMemo = (e) => {
        openPopup(); // 수정 팝업창 띄우기
    };
    const deleteMemo = (e) => {
        const doDelete = window.confirm('정말로 삭제하시겠습니까?'); // 삭제 확인 메시지 띄우기
        if(doDelete){
            deleteData(item.id);
            window.location.reload();
        }
    };

  return (
    <Card >
        {/* edit버튼 클릭시 보여줄 팝업창 */}
        <Popup 
            isOpen={isOpen} 
            closePopup={closePopup} prevData={item} 
        />

        {/* 기본 구성요소들 */}
        <ColorTag color={item.color}/>
        <CardText>{item.content}</CardText>
        <ButtonContainer>
            <IconButton onClick={editMemo} icon={<AiOutlineEdit size={24}/>}/>
            <IconButton onClick={deleteMemo} icon={<AiOutlineDelete size={24}/>}/>
        </ButtonContainer>
    </Card>
  )
}

export default MemoItem