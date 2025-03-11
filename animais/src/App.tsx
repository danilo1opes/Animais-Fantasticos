import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <main className="col-start-3 col-end-5">
            <Navbar />
            <Routes>
              <Route path="/"></Route>
            </Routes>
          </main>
          <div className="col-start-4 col-end-5"></div>
        </Layout>
      </Router>
      ;
    </ErrorBoundary>
  );
}

export default App;
