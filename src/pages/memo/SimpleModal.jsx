import React from 'react'
import { keyframes, styled } from 'styled-components'
import Button from '../../ui/Button'
import { margin, theme } from '../../style'

const slideDown = keyframes`
    to{
        opacity: 1;
        transform: translateY(0);
    }
`;

const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${margin.M};

    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;

    width: 100%;
    height: 5rem;
    background: ${theme.white};

    opacity: 0;
    transform: translateY(-5rem);
    animation: ${slideDown} 0.3s ease-in-out forwards;
`
const StyledText = styled.span `
    font-size: 1.25rem;
`

const SimpleModal = ({isOpen, onClose, onConfirm, text}) => {
    if (!isOpen) return null;

    return (
        <ModalContainer>
            <StyledText>{text}</StyledText>
            <Button title={"예"} onClick={onConfirm} value='Y'></Button>
            <Button title={"아니오"} onClick={onClose} value='N'></Button>
        </ModalContainer>
    )
}

export default SimpleModal;