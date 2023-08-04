import styled from 'styled-components';
import { fontSize, margin, padding, radius, theme } from '../style';

//아이콘 버튼
const ButtonContainer = styled.button`
    width: 4rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;     //아이템 사이의 간격 지정
    background-color: ${theme.white};
    padding: ${padding.S};
    border-radius: 1.5rem;
    cursor: pointer;
`;

const Text = styled.span`
  font-size: 0.5rem;
  font-weight: bold;
`;

function TitledIconButton(props){
    const {icon, title, onClick} = props;
    return(
        <ButtonContainer onClick={onClick}>
            {icon}
            <Text>{title}</Text>
        </ButtonContainer>
    )
}

export default TitledIconButton;