import React from 'react';
import { modelA_predict, modelA_averages } from '../models/modelA';
import { modelB_predict, modelB_averages } from '../models/modelB';
import { modelC_predict, modelC_averages } from '../models/modelC';

const ModelSelector = ({ onModelSelect }) => {
  const modelConfig = {
    modelA: {
      name: "24-25 Season",
      description: "Predictions based on current season data only",
      predict: modelA_predict,
      averages: modelA_averages
    },
    modelB: {
      name: "23-24 & 24-25 Seasons",
      description: "Combined analysis of last two seasons",
      predict: modelB_predict,
      averages: modelB_averages
    },
    modelC: {
      name: "Past 11 Seasons",
      description: "Long-term analysis using historical data",
      predict: modelC_predict,
      averages: modelC_averages
    }
  };

  const handleModelChange = (event) => {
    const selectedModel = event.target.value;
    if (selectedModel === '') {
      onModelSelect(null, '', null);
      return;
    }
    const modelInfo = modelConfig[selectedModel];
    onModelSelect(modelInfo.predict, selectedModel, modelInfo.averages);
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