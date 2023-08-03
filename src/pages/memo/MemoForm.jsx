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
const MemoForm = ({ initialData, setIsFilled }) => {
  const initialState = { color: "", content: "" };
  const { addData, editData } = useLocalStorage("memo");

  const [mode, setMode] = useState("");
  const [formData, setFormData] = useState(initialState);
  const [error1, setError1] = useState("태그 색상을 선택하세요");
  const [error2, setError2] = useState("내용을 입력하세요");
  const [button, setButton] = useState(false);

  //최초 한번만 초기화한다. 데이터 미리 세팅
  useEffect(() => {
    if(initialData){
      setMode("EDIT");
      setFormData(initialData);
      setError1("");
      setError2("");
    }else{
      setMode("ADD");
    }
  }, []);
 
  /* 컬러피커 세팅 */
  const colorPickerHandler = (pickedColor) => {
    setError1("");
    setFormData({
      ...formData,
      color: pickedColor,
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

  /* 유효성 체크 함수 */
  const isFormValid = () => {
    if(error1=="" && error2==""){
      return true;
    }
  }

  /* 저장 버튼 눌렀을 때 실행할 함수*/
  const sendData = (e) => {
    switch(mode){
      case "ADD":
        addData(formData);
        break;
      case "EDIT":
        editData(formData);
        break;
    }
    setIsFilled(true);
    setFormData(initialState);  //폼 초기화
  }

  return (
    <Wrapper>
      <form >
        <label>
          <LabelText>COLOR</LabelText>
          <ColorPicker
            name="color"
            onChange={inputChangeHandler}
            value={formData.color}
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

          <Button title='저장' onClick={sendData} disabled={!isFormValid()}></Button>
      </form>
    </Wrapper>
  )
}

export default MemoForm