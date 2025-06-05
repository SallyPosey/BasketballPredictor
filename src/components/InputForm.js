import React, { useState } from 'react';

const InputForm = ({ onInputChange }) => {
  const [inputs, setInputs] = useState({
    S_fg_pct: 0,
    BC_to: 0,
    S_3pt_m: 0,
    BC_stl: 0,
    R_reb: 0,
    S_ft_pct: 0
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

  const handleChange = (name, value) => {
    const newInputs = {
      ...inputs,
      [name]: parseFloat(value)
    };
    setInputs(newInputs);
    onInputChange(newInputs);
  };

  return (
    <div className="input-form">
      {Object.entries(variableConfig).map(([key, config]) => (
        <div key={key} className="input-group">
          <label htmlFor={key}>{config.label}</label>
          <div className="input-controls">
            <input
              type="number"
              id={key}
              value={inputs[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              min={config.min}
              max={config.max}
              step={config.step}
              className="number-input"
            />
            <input
              type="range"
              value={inputs[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              min={config.min}
              max={config.max}
              step={config.step}
              className="slider"
            />
            <span className="unit">{config.unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InputForm; 