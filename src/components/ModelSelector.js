import React from 'react';
import { modelA_predict } from '../models/modelA';
import { modelB_predict } from '../models/modelB';
import { modelC_predict } from '../models/modelC';

const ModelSelector = ({ onModelSelect }) => {
  const modelConfig = {
    modelA: {
      name: "24-25 Season",
      description: "Predictions based on current season data only",
      predict: modelA_predict
    },
    modelB: {
      name: "23-24 & 24-25 Seasons",
      description: "Combined analysis of last two seasons",
      predict: modelB_predict
    },
    modelC: {
      name: "Past 11 Seasons",
      description: "Long-term analysis using historical data",
      predict: modelC_predict
    }
  };

  const handleModelChange = (event) => {
    const selectedModel = event.target.value;
    if (selectedModel === '') {
      onModelSelect(null, '');
      return;
    }
    const modelInfo = modelConfig[selectedModel];
    onModelSelect(modelInfo.predict, selectedModel);
  };

  return (
    <div className="model-selector">
      <label htmlFor="model-select">Select Prediction Model: </label>
      <select 
        id="model-select" 
        onChange={handleModelChange} 
        className="model-dropdown" 
        defaultValue=""
        required
      >
        <option value="" disabled>Select Model...</option>
        {Object.entries(modelConfig).map(([key, model]) => (
          <option key={key} value={key}>{model.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ModelSelector; 