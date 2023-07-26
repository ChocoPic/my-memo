//로컬 스토리지 관련 커스텀 훅
import { useEffect, useState } from "react";


function useLocalStorage(key){
  const storage = window.localStorage;
  
  const readData = () => {
    try{
      const data = storage.getItem(key);  //저장된 데이터
      return JSON.parse(data);  //배열로 바꿔서 리턴
    }catch(error){
      return null;
    }
  }

  const [storedData, setStoredData] = useState(readData); //배열
  const setData = (data) => { //새 데이터 배열로 받아옴
    try{
      storage.setItem(key, JSON.stringify(data)); //문자열로 바꿔서 저장
      setStoredData(data);  //state 세팅
    }catch(error){
      console.error('저장하지 못했습니다',error);
    }
  }

  useEffect(()=>{ //데이터 업데이트를 위해 계속 읽어옴
    setStoredData(readData())
  }, [])

  
  return {readData, setData, storedData};
}
export default useLocalStorage;

/** 사용한 스토리지 용량 확인하는 함수
function getUsage(){
  if ('localStorage' in window) {
    const storage = window.localStorage;
    if (storage) {
      const used = JSON.stringify(storage).length;
      return used;
    }
  }
  return null;
} **/
/*

// 읽기
export function ReadFromLocalStorage(key){
  const storage = window.localStorage;
  const storedData = storage.getItem(key);
  if(storedData){
    const parsedData = JSON.parse(storedData);
    return parsedData;
    // console.log(parsedData);
  }else{
    console.log('메모를 추가하세요');
    return;
  }
}

// 추가하기
export function SaveToLocalStorage(key, value){
  let data = JSON.parse(ReadFromLocalStorage(key))//데이터를 불러와서 배열로 파싱
  data.push(value); //데이터 추가
  
  try{
    localStorage.setItem(key, JSON.stringify(data))//배열 -> 문자 후 저장
    console.log(ReadFromLocalStorage(key)); //추가 잘 됐나 확인
  }catch(error){
    console.error('저장에러', error); //TODO: 용량 넘친다는 경고?
  }
  
}


//수정하기 (데이터 바꾸기)
function Edit(id, value, key){
  //클릭한거 id를 전달받아서
  //그 id value 수정하면 됨

  // newState = state.map((it) => it.id === action.data.id ? { ...action.data } : it);
}
// 삭제하기 (데이터 바꾸기)
function Remove(id, content){
  // newState = state.filter((it) => it.id !== action.targetId);
}


// 로컬 스토리지 데이터 내보내기
function exportToJSON(filename, data) {
  const jsonStr = JSON.stringify(data, null, 2); // 데이터를 JSON 형식으로 변환하고 들여쓰기 적용
  const blob = new Blob([jsonStr], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename + ".json";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
*/
// // 예시 JSON 데이터
// const data = {
//   users: [
//     { name: "John", age: 30, email: "john@example.com" },
//     { name: "Alice", age: 25, email: "alice@example.com" }
//   ]
// };

// // JSON 파일로 내보내기
// exportToJSON("data_export", data);