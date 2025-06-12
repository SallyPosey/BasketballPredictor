import React, { useState } from 'react';
import './App.css';
import ModelSelector from './components/ModelSelector';
import InputForm from './components/InputForm';
import BackgroundImage from './components/BackgroundImage';
import sharkBasketball from './media/shark-basketball.png';
import logo from './media/logo.png';

function App() {
  const [modelFunction, setModelFunction] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  // Handler for model selection
  const handleModelSelect = (func, modelId) => {
    setModelFunction(() => func);
    setPrediction(null); // Reset prediction when model changes
  };

  // Handler for input changes
  const handleInputChange = (newInputs) => {
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
        <button className="about-button" onClick={() => setShowAbout(true)}>About</button>
        
        <div 
          className={`modal-overlay ${showAbout ? 'active' : ''}`}
          onClick={(e) => {
            if (e.target.className.includes('modal-overlay')) {
              setShowAbout(false);
            }
          }}
        >
          <div className="modal-content">
            <button 
              className="modal-close" 
              onClick={() => setShowAbout(false)}
              aria-label="Close modal"
            >×</button>
            <h2 className="modal-title">About</h2>
            <div className="modal-text">
              <p>The Basketball Game Predictor is an interactive tool designed to help users explore how key game statistics influence the outcome of a basketball match. Built using real-life data from the Miami Dade College women's basketball team, this app leverages historical scores and advanced statistical analysis to highlight the six most important features that impact game results.</p>
              
              <p>These six features (<strong>field goal percentage, turnovers, three-pointers made, steals, total rebounds, and free-throw percentage</strong>) were identified through in-depth data analysis as the most predictive of win or loss outcomes. By adjusting these inputs, users can see how each factor affects the prediction in real time.</p>
              
              <p>The predictor runs three separate models for comparison:</p>
              <ul style={{ textAlign: 'left', marginLeft: '20px' }}>
                <li><strong>2024 to 2025 Season</strong>: Focuses solely on last season's performance</li>
                <li><strong>2023 to 2025 Seasons</strong>: Combines data from the past two seasons</li>
                <li><strong>Past 11 Seasons</strong>: Offers a comprehensive long-term analysis of all seasons since 2013 to 2014</li>
              </ul>
              
              <p>This tool is not just for prediction. It is built to support strategic thinking and performance insight for coaches, players, analysts, and fans.</p>
              
              <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
                Created by Sally Posey<br />
                June 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
}

export default App;
