import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 3rem);
    min-height: 3rem;
    ${(props) => 
        props.height && `height: ${props.height}px;`
    }
    padding: 1rem;
    font-size: 1rem;
    line-height: 1rem;
    border-radius: 0.5rem;
    resize: vertical;
`;
const CountText = styled.span`
    font-size: 0.75rem;
    color: grey;
`
function TextInput(props){
    const {value, height, max, onChange} = props;

    const handleText = (e) => {
        const newValue = e.target.value;
        if(value.length < max){
            onChange(newValue);
        }
    };

    return (
        <>
            <StyledTextarea 
                height={height} 
                value={value} 
                onChange={handleText}
            />
            <CountText onChange={onChange}>{value.length}/{max}</CountText>
        </>
    );
}

export default TextInput;