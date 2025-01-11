import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Signup from './pages/Signup';
import Error from './pages/Error';
import Property from './pages/Property';
import PropertyDetail from './pages/PropertyDetail';
import Checkout from './pages/Checkout';
import Blog from './pages/Blog';
import Contact from './pages/Contact'; 

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/property' element={<Property/>}/>
        <Route path="/properties/:id" element={<PropertyDetail/>}/>
        <Route path="/checkout/:propertyId" element={<Checkout />} />
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
