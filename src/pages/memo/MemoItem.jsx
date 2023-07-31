import styled from "styled-components";
import ColorTag from '../../ui/ColorTag';
import IconButton from '../../ui/IconButton';
import {margin, radius, padding} from '../../style';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Popup from "./Popup";
import { useState } from "react";

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

const MemoItem = ({ item, onEdit, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => {
        setIsOpen(true);
    };
    const closePopup = () => {
        setIsOpen(false);
    };

    const editMemo = (e) => {
        openPopup();
        onEdit(item);
    }
    const deleteMemo = (e) => {
        onDelete(item);
    }

  return (
    <Card>
        <Popup isOpen={isOpen} closePopup={closePopup}/>
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