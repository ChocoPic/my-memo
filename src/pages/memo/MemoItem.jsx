import styled from "styled-components";
import ColorTag from '../../ui/ColorTag';
import IconButton from '../../ui/IconButton';
import {margin, radius, padding, theme} from '../../style';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Popup from "./Popup";
import { useState } from "react";
import useLocalStorage from "../../store/LocalStorageHandler";
import SimpleModal from "./SimpleModal";

// Card Item
const Card = styled.div`
    border-radius: ${radius};
    background: white;
    box-shadow: 0px 0px 0.25rem 0.25rem #dddddd;
`;

// Card 메모내용
const CardText = styled.p`
    white-space: pre-wrap;   //줄바꿈, 공백 그대로 출력 + 넘치면 줄바꿈
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
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDel, setIsOpenDel] = useState(false);
    
    //// 수정 모달창
    // 수정창 닫기
    const closeEdit = () => {
        setIsOpenEdit(false);
    };
    // 수정창 열기
    const openEdit = (e) => {
        setIsOpenEdit(true);// 수정창 열기
    };

    //// 삭제 모달창
    // 삭제창 열기
    const openDelete = () => {
        setIsOpenDel(true);
    }
    const closeDelete = () => {
        setIsOpenDel(false);
    }
    // 삭제하기('예' 클릭시)
    const deleteMemo = () => {
        deleteData(item.id);
        closeDelete();
        window.location.reload();
    };

  return (
    <Card >
        {/* edit 버튼 클릭시 보여줄 모달창 */}
        <Popup 
            isOpen={isOpenEdit} 
            closePopup={closeEdit} prevData={item} 
        />
        {/* delete 버튼 클릭시 보여줄 모달창 */}
        <SimpleModal
            isOpen={isOpenDel} text="삭제하시겠습니까?"
            onClose={closeDelete} onConfirm={deleteMemo}
        />

        {/* 기본 구성요소들 */}
        <ColorTag color={item.color}/>
        <CardText>{item.content}</CardText>
        <ButtonContainer>
            <IconButton onClick={openEdit} icon={<AiOutlineEdit size={24}/>}/>
            <IconButton onClick={openDelete} icon={<AiOutlineDelete size={24}/>}/>
        </ButtonContainer>
    </Card>
  )
}

export default MemoItem