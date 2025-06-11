import React, { useState, useEffect } from 'react';

const InputForm = ({ onInputChange }) => {
  const [inputs, setInputs] = useState({
    S_fg_pct: 0,
    BC_to: 0,
    S_3pt_m: 0,
    BC_stl: 0,
    R_reb: 0,
    S_ft_pct: 0
  });

  const [errors, setErrors] = useState({});

  const variableConfig = {
    S_fg_pct: {
      label: "Field Goal Percentage",
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%",
      description: "Team's field goal shooting percentage"
    },
    BC_to: {
      label: "Turnovers",
      min: 0,
      max: 30,
      step: 1,
      unit: "",
      description: "Number of turnovers committed"
    },
    S_3pt_m: {
      label: "Three-pointers",
      min: 0,
      max: 20,
      step: 1,
      unit: "",
      description: "Number of three-pointers made"
    },
    BC_stl: {
      label: "Steals",
      min: 0,
      max: 15,
      step: 1,
      unit: "",
      description: "Number of steals recorded"
    },
    R_reb: {
      label: "Total Rebounds",
      min: 0,
      max: 50,
      step: 1,
      unit: "",
      description: "Total number of rebounds"
    },
    S_ft_pct: {
      label: "Free-throw Percentage",
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%",
      description: "Team's free throw shooting percentage"
    }
  };

  const validateInput = (name, value) => {
    const config = variableConfig[name];
    if (value < config.min || value > config.max) {
      return `Value must be between ${config.min} and ${config.max}`;
    }
    return '';
  };

  const handleChange = (name, value) => {
    const numValue = parseFloat(value);
    const error = validateInput(name, numValue);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    const newInputs = {
      ...inputs,
      [name]: numValue
    };
    setInputs(newInputs);
    
    if (!error) {
      onInputChange(newInputs);
    }
  };

  return (
    <div className="input-form">
      {Object.entries(variableConfig).map(([key, config]) => (
        <div key={key} className="input-group">
          <label htmlFor={key}>
            {config.label}
          </label>
          <div className="input-controls">
            <input
              type="number"
              id={key}
              value={inputs[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              min={config.min}
              max={config.max}
              step={config.step}
              className={`number-input ${errors[key] ? 'error' : ''}`}
            />
            <input
              type="range"
              value={inputs[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              min={config.min}
              max={config.max}
              step={config.step}
              className={`slider ${errors[key] ? 'error' : ''}`}
            />
            <span className="unit">{config.unit}</span>
          </div>
          {errors[key] && <span className="error-message">{errors[key]}</span>}
        </div>
      ))}
    </div>
  );
};

export default InputForm; 