import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { Modal } from './components/Modal';
import { useState } from 'react';
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
          <div className="col-start-4 col-end-5"></div>
        </Layout>
      </Router>
      {/* Modal de Login */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ErrorBoundary>
  );
}

export default App;
