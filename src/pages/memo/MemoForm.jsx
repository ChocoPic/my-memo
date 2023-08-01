import React, { useEffect, useState } from 'react'

import { styled } from 'styled-components';
import { padding } from '../../style';

import Button from '../../ui/Button';
import ColorPicker from '../../ui/ColorPicker';
import TextInput from '../../ui/TextInput';
import useLocalStorage from '../../store/LocalStorageHandler';

const Wrapper = styled.div`
  padding-left: ${padding.L};
  padding-right: ${padding.L};
  padding-bottom: ${padding.M};
  padding-top: ${padding.M};
`

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.75rem;
  padding-top: 0;
  padding-bottom: ${padding.M};
  padding-left: ${padding.S};
`
const LabelText = styled.span`
  font-size: 0.75rem;
  font-weight: bold;

`
const MemoForm = ({ handleShow, initialData }) => {
  const { addData, editData } = useLocalStorage("memo");

  const [mode, setMode] = useState("ADD");
  const [color, setColor] = useState("");
  const [content, setContent] = useState("");
  const [validColor, setValidColor] = useState(false);
  const [validContent, setValidContent] = useState(false);

  //최초 한번만 초기화한다. 데이터 미리 세팅
  useEffect(() => {
    if(initialData){
      setMode("EDIT");
      setColor(initialData.color);
      setValidColor(true);
      setContent(initialData.content);
      setValidContent(true);
    }else{
      setMode("ADD");;
    }
  }, []);

  // 컬러피커 세팅
  const onSetColor = (dataFromColorpicker) => {
    setColor(dataFromColorpicker);
    if(color === ""){
      setValidColor(false)
    }else{
      setValidColor(true);
    }
  };

  // 내용 세팅
  const onSetContent = (e) => {
    const val = e.target.value;
    setContent(val);
    if(val.replace(" ","").length == 0){
      setValidContent(false)
    }else{
      setValidContent(true);
    }
  };

  // 저장 버튼 눌렀을 때 실행할 함수
  const sendData = (e) => {
    // 다른 이벤트 막기
    e.preventDefault();

    //유효하면 저장
    if(validColor && validContent){
      switch(mode){
        case "ADD":
          addData({ color: color, content: content })
          break;
        case "EDIT":
          editData({ id: initialData.id, color: color, content: content })
          break;
        default:
          addData({ color: color, content: content })
      }
      setColor("");  //초기화
      setContent("");  //초기화
      window.location.reload();  //화면갱신
      handleShow(); //폼 닫기
    }else{
      console.log('저장실패', mode)
    }
  }

  return (
    <Wrapper>
      <form>
        <label>
          <LabelText>COLOR</LabelText>
          <ColorPicker
            name="color" 
            value={color}
            curColor={initialData? initialData.color:""}
            onChange={onSetColor}
          />
        </label>
        {!validColor && <ErrorMessage>색상을 선택하세요</ErrorMessage>}

        <label>
          <LabelText>MEMO</LabelText>
          <TextInput
            name="content"
            value={content}
            onChange={onSetContent}
          />
        </label>
        {!validContent && <ErrorMessage>내용을 입력하세요</ErrorMessage>}

        <Button title='저장' onClick={sendData}></Button>
      </form>
    </Wrapper>
  )
}

export default MemoForm