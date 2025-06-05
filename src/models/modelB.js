export function modelB_predict({ S_fg_pct, BC_to, S_3pt_m, BC_stl, R_reb, S_ft_pct }) {
  // Apply linear equation from OLS results
  const linear_result =
    -1.5205 +
    0.0238 * S_fg_pct +
    -0.0060 * BC_to +
    0.0015 * S_3pt_m +
    0.0239 * BC_stl +
    0.0188 * R_reb +
    0.0009 * S_ft_pct;

  // Convert to probability using sigmoid
  const probability = 1 / (1 + Math.exp(-linear_result));

  return {
    prediction: probability > 0.5 ? "Win" : "Loss",
    confidence: (probability * 100).toFixed(1) + "%"
  };
} 