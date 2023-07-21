import styled from "styled-components";

/* 컬러피커 색상 */
export const COLORS = [
    {"id": 1, "color":"#FF0060", "state":"hidden"},
    {"id": 2, "color":"#F6FA70", "state":"hidden"},
    {"id": 3, "color":"#00DFA2", "state":"hidden"},
    {"id": 4, "color":"#0079FF", "state":"hidden"},
    {"id": 5, "color":"#9376E0", "state":"hidden"},
    {"id": 6, "color":"#999999", "state":"hidden"}
];

/* 메모 카드 */
// Cards
export const CardListWrapper = styled.section`
    width: calc(100% - 2rem);
    min-width: 10rem;
    padding: 0.5rem;
    background: white;   
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
`;



// Card Item
export const Card = styled.div`
    margin: 0.5rem;  
    border-radius: 0.5rem;
    background: #eeeeee;
`;

// 색상 태그
export const ColorTag = styled.div`
    margin-top: 0.5rem;
    width: 1.25rem;
    height: 1rem;
    background: #3eab3e;
    position: relative;
`;  

// Card 메모내용
export const CardText = styled.span`
    margin: 1rem;
    color: black;
    font-size: 1rem;
    display: block;
`;