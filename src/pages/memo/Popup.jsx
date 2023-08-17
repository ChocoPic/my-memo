import React from 'react'
import MemoForm from './MemoForm'
import styled from 'styled-components';
import { padding, radius } from '../../style';
import IconButton from '../../ui/IconButton';
import { AiOutlineClose } from 'react-icons/ai';

const StyledPopup = styled.div`
  width: 20rem;
  background: white;
  border-radius: ${radius};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  padding: ${padding.M};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  z-index: 101;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`

const Popup = ({isOpen, closePopup, prevData}) => {
  const preventOutsideClick = (e) => {
    // console.log('외부')
    e.stopPropagation();
  }

  return (
    <>
      {isOpen && (
        <Overlay onClick={preventOutsideClick}>
          <StyledPopup>
              <IconButton icon={<AiOutlineClose/>} onClick={closePopup}/>
              <MemoForm initialData={prevData} />
          </StyledPopup>    
        </Overlay>
      )}
    </>
  )
}

export default Popup