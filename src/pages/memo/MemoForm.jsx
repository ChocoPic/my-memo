import React, { useState } from 'react'

import { styled } from 'styled-components';
import Button from '../../ui/Button';
import ColorPicker from '../../ui/ColorPicker';
import TextInput from '../../ui/TextInput';

const Wrapper = styled.div`
  background: white;
  padding: 1rem;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const onChange = () => {

}


const MemoForm = () => {
  const [id, setId] = useState("");
  const [color, setColor] = useState("#000000");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <Container>
        <h3>새 메모</h3>
        <Button title="X"></Button>
      </Container>
     
      <form>
        <ColorPicker/>
        <TextInput
          value={content}
          height={40}
          onChange={onChange}
        />
      </form>
      <button>저장</button>
    </Wrapper>
  )
}

export default MemoForm