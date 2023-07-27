import React, { useState } from 'react'

import { styled } from 'styled-components';
import Button from '../../ui/Button';
import ColorPicker from '../../ui/ColorPicker';
import {padding, radius} from '../../style';
import TextInput from '../../ui/TextInput';
import useLocalStorage from '../../store/LocalStorageHandler';

const Wrapper = styled.div`
  background: white;
  padding-left: ${padding.L};
  padding-right: ${padding.L};
  border-radius: ${radius};
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
`

const MemoForm = ({formHandler}) => {
  const initialState = { color: "", content: "" };
  const [colorPickerResult, setColorPickerResult] = useState('');
  const [formData, setFormData] = useState(initialState);
  const [showForm, setShowForm] = useState(false);

  const { addData } = useLocalStorage("memo"); 
 
  /* 새 메모 토글 */
  const toggleForm = () =>{
    setShowForm(!showForm);
  }
  /* 컬러피커 세팅 */
  const colorPickerHandler = (data) => {
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
  };
  
  const submitHandler = (e) => {
    e.preventDefault(); //폼 submit 이벤트 막음
    formHandler(formData);  //상위컴포넌트(MainPage)로 전달
    addData(formData); //스토리지에 내용 저장
    setFormData(initialState);  //폼 초기화
  };


  return (
    <Wrapper>
      <Container>
        <h3>새 메모</h3>
        <Button title={showForm? 'x': '+'} onClick={toggleForm}>
          
        </Button>
      </Container>
     
      {showForm && (
         <form onSubmit={submitHandler}>
         <label>컬러태그 색상
           <ColorPicker
           name="color" 
           value={colorPickerResult}
           onChange={inputChangeHandler}
           onSetPickedColor={colorPickerHandler}
         />
         </label>
         <label>메모 내용
           <TextInput
             name="content"
             value={formData.content}
             onChange={inputChangeHandler}
           />
         </label>
         <button type='submit'>저장</button>
       </form>
      )}
     
    </Wrapper>
  )
}

export default MemoForm