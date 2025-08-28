
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThankYou from './pages/ThankYou';
import DownloadBook from './pages/DownloadBook';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/downlad-book" element={<DownloadBook />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

