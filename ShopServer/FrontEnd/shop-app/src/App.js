import FullPage from "./components/UI/FullPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Services from './pages/Services'
import About from './pages/About'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Product1 from './components/products/Product1'
import Product2 from './components/products/Product2'
import Product3 from './components/products/Product3'
import Product4 from './components/products/Product4'
import Product5 from './components/products/Product5'
import Product6 from './components/products/Product6'
import Table from "./pages/Table";
import Edit from "./pages/Edit";
import Create from "./pages/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<FullPage />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/About' element={<About />} />
            <Route path="/Product1" element={<Product1 />} />
            <Route path="/Product2" element={<Product2 />} />
            <Route path="/Product3" element={<Product3 />} />
            <Route path="/Product4" element={<Product4 />} />
            <Route path="/Product5" element={<Product5 />} />
            <Route path="/Product6" element={<Product6 />} />
            <Route path="/Table" element={<Table />} />
            <Route path="/Edit/:lessonid" element={<Edit />} />
            <Route path="/Create" element={<Create />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;