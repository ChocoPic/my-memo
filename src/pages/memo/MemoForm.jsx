import React, { useState } from 'react'

import { styled } from 'styled-components';
import {padding} from '../../style';

import Button from '../../ui/Button';
import ColorPicker from '../../ui/ColorPicker';
import TextInput from '../../ui/TextInput';

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
const MemoForm = ({formHandler, initialData}) => {
  const initialState = { color: "", content: "" };
  const [formData, setFormData] = useState(initialData || initialState);
  const [colorPickerResult, setColorPickerResult] = useState(formData.color);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

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

  const sendData = (e) => {
    if(formData.color == ""){
      setError1("태그 색상을 선택하세요");
      if(formData.content == ""){
        setError2("내용을 입력하세요");      
      }
    }else{
      formHandler(formData);  //상위컴포넌트(MainPage)로 전달
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
      <ErrorMessage>{error1}</ErrorMessage>
      </label>
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