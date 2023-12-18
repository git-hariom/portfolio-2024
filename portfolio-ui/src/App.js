import './App.scss';
import ImageExamples from './components/v1/examples/ImageExamples';
import LabelExamples from './components/v1/examples/LabelExamples';

function App() {
  return (
    <div className="App">
      <LabelExamples />
      <ImageExamples />
    </div>
  );
}

export default App;
