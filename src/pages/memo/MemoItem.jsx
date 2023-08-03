import styled from "styled-components";
import ColorTag from '../../ui/ColorTag';
import IconButton from '../../ui/IconButton';
import {margin, radius, padding} from '../../style';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Popup from "./Popup";
import { useState } from "react";
import useLocalStorage from "../../store/LocalStorageHandler";
import { toast } from 'react-toastify';

// Card Item
const Card = styled.div`
    margin: ${margin.M};  
    border-radius: ${radius};
    padding: ${padding.M};
    background: #ffffff;
`;

// Card 메모내용
const CardText = styled.span`
    margin-left: ${margin.S};
    margin-right: ${margin.S};
    color: black;
    font-size: 1rem;
    display: block;
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
            toast.success('삭제 성공!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "light",
            });
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