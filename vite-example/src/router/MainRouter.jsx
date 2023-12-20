import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Category } from '../pages/Category';
import { ItemDetailContainer } from '../pages/ItemDetailContainer';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import { Home } from '../pages/Home'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<Category />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter;