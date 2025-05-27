import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Error from './Components/Error';
import Register from './Components/Register';
import { BrowserRouter,Route,Routes,Links } from 'react-router-dom';
import List from './Components/List';
function App() {
  const message ="hello from app using props";
  const message2 ="hello from app using props2";
  return (
    <>
     <div className='container-fluid main'>
      <div className='row'>
        <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='*' element={ <Error/>}></Route>
          <Route path='/' element={ <Content/>}></Route>
          <Route path='/register' element={ <Register mydata={message} mydata1={message2} />}></Route>
          <Route path='/list' element={<List/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
     </div>
    </>
  );
}

export default App;