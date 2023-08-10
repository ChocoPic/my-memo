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
    min-width: 22rem;
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
    {"color_name": "red", "color_code":"#FF6D60", "state":"hidden"},
    {"color_name": "yellow", "color_code":"#F7D060", "state":"hidden"},
    {"color_name": "green", "color_code":"#64E291", "state":"hidden"},
    {"color_name": "blue", "color_code":"#1CC5DC", "state":"hidden"},
    {"color_name": "purple", "color_code":"#A275E3", "state":"hidden"},
    {"color_name": "grey", "color_code":"#888888", "state":"hidden"}
];