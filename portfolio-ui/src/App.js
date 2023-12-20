import './App.scss';
import NotFound from './components/v1/NotFound';
import ImageExamples from './components/v1/examples/ImageExamples';
import LabelExamples from './components/v1/examples/LabelExamples';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="app-wrapper">
       <Routes>
        <Route path="dev">
          <Route path="examples">
            <Route path="image" element={<ImageExamples />} />
            <Route path="label" element={<LabelExamples />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
