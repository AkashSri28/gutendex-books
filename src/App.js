import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import CategoriesPage from './pages/CategoriesPage';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoriesPage/>}/>
          <Route path="/books/:category" element={<BooksPage/>}/>
        </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
