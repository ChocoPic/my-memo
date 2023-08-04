import styled from 'styled-components';
import { margin } from '../style';

//아이콘 버튼
const StyledIconButton = styled.nav`
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    margin: ${margin.S};
`;

function IconButton(props){
    const {icon, onClick} = props;
    return <StyledIconButton onClick={onClick}>{icon}</StyledIconButton>
}

export default IconButton;