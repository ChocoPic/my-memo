import React, { useState } from 'react'
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

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Popup = ({isOpen, closePopup}) => {
  return (
    <>
        {isOpen && (
            <StyledPopup>
                <IconButton icon={<AiOutlineClose/>} onClick={closePopup}/>
                <MemoForm/>
            </StyledPopup>
        )}
    </>
  )
}

export default Popup