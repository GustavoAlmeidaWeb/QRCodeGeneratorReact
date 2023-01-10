import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Pages
import Home from './pages/Home/Home';

function App() {
  return (
    <Container fluid className="bg-dark py-5 min-vh-100">
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Container>
    </Container>
  )
}

export default App;
