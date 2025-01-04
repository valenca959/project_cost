import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/contact">Contato</Link> | 
          <Link to="/company">Empresa</Link> | 
          <Link to="/newproject">Novo Projeto</Link>
        </nav>
      </div>
      
      <Routes>
        <Route element={<Container customClass="min-height" />}>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Route>
      </Routes>
      
      <p>Footer</p>
    </Router>
  );
}

export default App;
