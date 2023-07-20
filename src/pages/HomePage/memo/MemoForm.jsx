import React, { useState } from 'react'
import TextInput from '../../../../public/ui/TextInput';
import Button from '../../../../public/ui/Button';
import ColorPicker from '../../../../public/ui/ColorPicker';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  background: #eeeeee;
  padding: 1rem;

`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`


const MemoForm = () => {
  const [id, setId] = useState("");
  const [color, setColor] = useState("#000000");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <Container>
        <h3>새 메모</h3>
        <Button>X</Button>
      </Container>
     
      <form>
        <ColorPicker/>
        <TextInput/>
      </form>
      <button>저장</button>
    </Wrapper>
  )
}

export default MemoForm