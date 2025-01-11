import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Signup from './pages/Signup';
import Error from './pages/Error';
import Property from './pages/Property';
import PropertyDetail from './pages/PropertyDetail';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/property' element={<Property/>}/>
        <Route path="/properties/:id" element={<PropertyDetail/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
      <Route path='*' element={<Error/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
