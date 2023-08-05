import styled from 'styled-components';
import { margin } from '../style';

//아이콘 버튼
const StyledIconButton = styled.nav`
    width: ${props => props.size || 2.25}rem;
    height: ${props => props.size || 2.25}rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.size/3 || 0.75}rem;
    margin: ${margin.S};
    background-color: ${props => props.bgcolor || '#ffffff00'};  
`;

function IconButton(props){
    const {icon, onClick, bgcolor, size} = props;
    return(
        <StyledIconButton 
            onClick={onClick} 
            bgcolor={bgcolor}
            size={size}
        >{icon}
        </StyledIconButton>
    ) 
}

export default IconButton;