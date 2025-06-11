import React, { useState } from 'react';
import './App.css';
import ModelSelector from './components/ModelSelector';
import InputForm from './components/InputForm';
import BackgroundImage from './components/BackgroundImage';
import sharkBasketball from './media/shark-basketball.png';
import logo from './media/logo.png';

function App() {
  const [selectedModel, setSelectedModel] = useState('modelA');
  const [modelFunction, setModelFunction] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [inputs, setInputs] = useState({
    S_fg_pct: 50,
    BC_to: 10,
    S_3pt_m: 5,
    BC_stl: 5,
    R_reb: 20,
    S_ft_pct: 75
  });

  const variableConfig = {
    S_fg_pct: {
      label: "Field Goal Percentage",
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%"
    },
    BC_to: {
      label: "Turnovers",
      min: 0,
      max: 30,
      step: 1,
      unit: ""
    },
    S_3pt_m: {
      label: "Three-pointers",
      min: 0,
      max: 20,
      step: 1,
      unit: ""
    },
    BC_stl: {
      label: "Steals",
      min: 0,
      max: 15,
      step: 1,
      unit: ""
    },
    R_reb: {
      label: "Total Rebounds",
      min: 0,
      max: 50,
      step: 1,
      unit: ""
    },
    S_ft_pct: {
      label: "Free-throw Percentage",
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%"
    }
  };

  // Handler for model selection
  const handleModelSelect = (func, modelKey) => {
    setModelFunction(() => func);
    setSelectedModel(modelKey);
  };

  // Handler for input changes
  const handleInputChange = (newInputs) => {
    setInputs(newInputs);
    if (modelFunction) {
      const result = modelFunction(newInputs);
      setPrediction(result);
    }
  };

  return (
    <BackgroundImage imageUrl={sharkBasketball}>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="MDC Sharks Logo" style={{ width: '220px', marginBottom: '1rem' }} />
          <h1 style={{ color: '#fff', textShadow: '1px 1px 8px #222' }}>Basketball Game Predictor</h1>
          <div style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1.5rem', textShadow: '1px 1px 6px #222' }}>
            Enter game statistics to predict the outcome
          </div>
          <div className="frosted-box">
            <ModelSelector onModelSelect={handleModelSelect} />
            <InputForm onInputChange={handleInputChange} />
            {prediction && (
              <div className="prediction-result">
                <h2>Prediction Result</h2>
                <p className="outcome" style={{ color: prediction.prediction.toLowerCase() === 'win' ? '#4CAF50' : prediction.prediction.toLowerCase() === 'loss' ? '#ff4444' : undefined }}>
                  {prediction.prediction}
                </p>
                <p className="confidence">Confidence: {prediction.confidence}</p>
              </div>
            )}
          </div>
        </header>
      </div>
    </BackgroundImage>
  );
}

export default App;
