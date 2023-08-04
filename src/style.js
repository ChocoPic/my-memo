import { createGlobalStyle } from 'styled-components';

/* 테마 색상 */
export const theme = {
    primaryDefault: '#222222',
    primaryLight: '#767586',
    secondaryDefault: '#22A39F',
    secondaryLight: '#F3EFE0',
    white: '#ffffff',
    black: '#000000', 
}

/* 글로벌 스타일 */
export const GlobalStyle = createGlobalStyle`
  html{
    display: flex;
    min-height: 100%;
    min-width: 100%;
  }

  body{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: start;    /*세로 중앙 정렬*/
    background: ${theme.primaryDefault};
  }

  #root{
    width: 70%;
    height: 100%;
    min-width: 20rem;
    max-width: 50rem;
  }

  // 화면 좁을 때
  @media screen and (min-width: 20rem){
    #root{
      width: 90%;
    }
  }
  // 화면 넓을 때
  @media screen and (min-width: 40rem){
    #root{
      width: 70%;
    }
  }
 // 화면 더더 넓을 때
  @media screen and (min-width: 60rem){
    #root{
      width: 40rem;
    }
  }
 
`


/* 패딩 */
export const padding = {
    S: '0.25rem',
    M: '1rem',
    L: '2rem',
};

/* 마진 */
export const margin = {
    S: '0.25rem',
    M: '1rem',
    L: '2rem',
    Top:'1rem',
    Bottom:'1.5rem',
    LR: '0.5rem'
};

/* 사이즈 */
export const minWidth = '20rem';
export const radius = '1rem';

/* 폰트 */
export const fontSize = '';
export const fontDefault = '';



/* 컬러피커 색상 */
export const COLORS = [
    {"id": 1, "color":"#FF0060", "state":"hidden"},
    {"id": 2, "color":"#F6FA70", "state":"hidden"},
    {"id": 3, "color":"#00DFA2", "state":"hidden"},
    {"id": 4, "color":"#0079FF", "state":"hidden"},
    {"id": 5, "color":"#9376E0", "state":"hidden"},
    {"id": 6, "color":"#999999", "state":"hidden"}
];