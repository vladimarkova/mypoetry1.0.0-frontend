import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddPoetryForm from './components/AddPoetryForm/AddPoetryForm';
import Home from './components/Home/Home';
import Layout from "./components/Layout/Layout";
import Poetry from "./components/Poetry/Poetry";

function App() {
  return (
   <>
    <Router>
      <Layout>
        {/* <Home /> */}
      </Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-poetry' element={<AddPoetryForm />} />
        <Route path='/poetries' element={<Poetry />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
