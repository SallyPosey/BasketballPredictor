import React from 'react';
import { modelA_predict } from '../models/modelA';
import { modelB_predict } from '../models/modelB';
import { modelC_predict } from '../models/modelC';

const ModelSelector = ({ onModelSelect }) => {
  const handleModelChange = (event) => {
    const selectedModel = event.target.value;
    let modelFunction;
    
    switch(selectedModel) {
      case 'modelA':
        modelFunction = modelA_predict;
        break;
      case 'modelB':
        modelFunction = modelB_predict;
        break;
      case 'modelC':
        modelFunction = modelC_predict;
        break;
      default:
        modelFunction = modelA_predict;
    }
    
    onModelSelect(modelFunction, selectedModel);
  };

  return (
    <div className="model-selector">
      <label htmlFor="model-select">Select Model: </label>
      <select 
        id="model-select" 
        onChange={handleModelChange}
        className="model-dropdown"
      >
        <option value="modelA">24-25 Season</option>
        <option value="modelB">23-24 & 24-25 Seasons</option>
        <option value="modelC">Past 11 Seasons</option>
      </select>
    </div>
  );
};

export default ModelSelector; 