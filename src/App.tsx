import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddPoetryForm from './components/AddPoetryForm/AddPoetryForm';
import Layout from "./components/Layout/Layout";
import Poetry from "./components/Poetry/Poetry";

function App() {
  return (
   <>
    <Router>
      <Layout>
        {/* <Poetry /> */}
      </Layout>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/add-poetry' element={<AddPoetryForm />} />
        <Route path='/poetries' element={<Poetry />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
