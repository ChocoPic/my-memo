/* Pages 기본 구성 */
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { GlobalStyle } from './style.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <ToastContainer/>
      <GlobalStyle/>
      <Routes>
        <Route path='/my-memo' element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default App
