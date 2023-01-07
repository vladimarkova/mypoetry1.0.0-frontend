import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import AddPoetryForm from './components/AddPoetryForm/AddPoetryForm';
import Home from './components/Home/Home';
import Layout from "./components/Layout/Layout";
import Login from './components/Login/Login';
import PoetryList from './components/PoetryList/PoetryList';
import Register from './components/Register/Register';

function App() {
  return (
   <>
    <Router>
      <Layout>
      </Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-poetry' element={<AddPoetryForm />} />
        <Route path='/poetries' element={<PoetryList />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<Login />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
