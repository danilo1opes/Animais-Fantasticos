import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { Modal } from './pages/Modal';
import { useState } from 'react';
import { AnimaisFantasticos } from './components/Animais-Fantasticos/Introcution';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <main className="col-start-3 col-end-5">
            <Navbar onLoginClick={() => setIsModalOpen(true)} />
            <Routes>
              <Route path="/"></Route>
            </Routes>
          </main>
          <div className="col-start-2 col-end-5 box-border">
            <AnimaisFantasticos />
          </div>
        </Layout>
      </Router>
      {/* Modal de Login */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ErrorBoundary>
  );
}

export default App;
