/* Pages 기본 구성 */
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { GlobalStyle } from './style.js'
function App() {

  return (
    <>
    <GlobalStyle/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
    </>
  )
}

export default App
