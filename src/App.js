import React, { useState } from 'react';
import './App.css';
import ModelSelector from './components/ModelSelector';
import InputForm from './components/InputForm';
import { modelA_predict } from './models/modelA';
import backgroundImage from './media/sharkwallpaper.png';

function App() {
  const [selectedModel, setSelectedModel] = useState(modelA_predict);
  const [modelName, setModelName] = useState('24-25 Season');
  const [prediction, setPrediction] = useState(null);

  const handleModelSelect = (modelFunction, modelName) => {
    setSelectedModel(modelFunction);
    // Map the model value to its descriptive name
    const modelDisplayNames = {
      'modelA': '24-25 Season',
      'modelB': '23-24 & 24-25 Seasons',
      'modelC': 'Past 11 Seasons'
    };
    setModelName(modelDisplayNames[modelName]);
  };

  const handleInputChange = (inputs) => {
    const result = selectedModel(inputs);
    setPrediction(result);
  };

  return (
    <div className="App">
      <div className="page-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <header className="App-header">
          <h1>Basketball Game Predictor</h1>
          <ModelSelector onModelSelect={handleModelSelect} />
          <p>Currently using: {modelName}</p>
          <InputForm onInputChange={handleInputChange} />
          {prediction && (
            <div className="prediction-result">
              <h2>Prediction: {prediction.prediction}</h2>
              <p>Confidence: {prediction.confidence}</p>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}

export default App;
