import { useEffect, useState } from "react";
import test from '../../db.json';

//로컬 스토리지 관련 커스텀 훅
const useLocalStorage = (key) => {
  const testData = test;
  const [storedData, setStoredData] = useState([]);

  // setStoredData(test);
  // localStorage.setItem(key, JSON.stringify(test));

  useEffect(() => {
    //컴포넌트 마운트될 때 실행되는 부분
    var data = localStorage.getItem(key);
    if(data){
      localStorage.setItem(key, (data));  //문자열로 바꿔서 저장
      setStoredData(JSON.parse(data));  //JSON으로 복원해서 출력
    }else{
      setStoredData(test);
    }
  }, []);

  // ADD_DATA
  const addData = (inputData) =>{
    const id = Date.now().toString(36); //시간으로 id 생성
    const newData = {id, ...inputData}; //id를 데이터에 추가
    const updatedData = storedData? [...storedData, newData] : [newData];
    localStorage.setItem(key, JSON.stringify(updatedData));
    setStoredData(updatedData);
  };

  // EDIT_DATA
  function editData(data){

  }
  //DELETE_DATA
  function deleteData(data){

  }
  
  return {storedData, addData};
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