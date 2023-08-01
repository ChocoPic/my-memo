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
const MemoForm = ({ initialData }) => {
  const initialState = { color: "", content: "" };
  const { addData, editData } = useLocalStorage("memo");

  const [mode, setMode] = useState("");
  const [formData, setFormData] = useState(initialState);
  const [colorPickerResult, setColorPickerResult] = useState(formData.color);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  //최초 한번만 초기화한다. 데이터 미리 세팅
  useEffect(() => {
    if(initialData){
      setMode("EDIT");
      setFormData(initialData);
    }else{
      setMode("ADD");
    }
  }, []);
  
  /* 컬러피커 세팅 */
  const colorPickerHandler = (data) => {
    setError1("");
    setColorPickerResult(data); //컬러 피커로 전달
    setFormData({
      ...formData,
      color: data,
    });
  };

  /* 내용 세팅 */
  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      content: value,
    });
    if(value.replace(" ","") == ""){
      setError2("내용을 입력하세요");
    }else{
      setError2("");
    }
  };

  /* 저장 버튼 눌렀을 때 실행할 함수*/
  const sendData = (e) => {
    // 유효성 검사
    if(formData.color == ""){
      setError1("태그 색상을 선택하세요");
      if(formData.content == ""){
        setError2("내용을 입력하세요");      
      }
    }else{
      switch(mode){
        case "ADD":
          addData(formData);
          break;
        case "EDIT":
          editData(formData);
          break;
        default:
          addData(formData);
      }
      setFormData(initialState);  //폼 초기화
    }
  }

  return (
    <Wrapper>
      <form >
        <label>
          <LabelText>COLOR</LabelText>
          <ColorPicker
            name="color" 
            value={colorPickerResult}
            onChange={inputChangeHandler}
            onSetPickedColor={colorPickerHandler}
          />
        </label>
        <ErrorMessage>{error1}</ErrorMessage>

        <label>
          <LabelText>MEMO</LabelText>
          <TextInput
            name="content"
            value={formData.content}
            onChange={inputChangeHandler}
          />
        </label>
          <ErrorMessage>{error2}</ErrorMessage>

          <Button title='저장' onClick={sendData}></Button>
      </form>
    </Wrapper>
  )
}

export default MemoForm