import React from 'react'
import { styled } from 'styled-components'
import { margin, theme } from '../style'

const Container = styled.div`
    display: block;
    position: relative;
    width: fit-content;
    height: fit-content;
    background:${theme.white};
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: ${margin.L};
`
const Tail = styled.div`
    border-width: 1rem;
    border-style: solid;
    border-color: transparent transparent ${theme.white} transparent;

    position:absolute;
    bottom: 100%;
    left: 1rem;
`
const SpeechBubble = ({children}) => {
  return (
    <Container>
        <Tail/>
        {children}
    </Container>
  )
}

export default SpeechBubble