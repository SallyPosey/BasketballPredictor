export function modelC_predict({ S_fg_pct, BC_to, S_3pt_m, BC_stl, R_reb, S_ft_pct }) {
  // Apply linear equation from OLS results
  const linear_result =
    -1.1229 +
    0.0163 * S_fg_pct +
    -0.0081 * BC_to +
    0.0191 * S_3pt_m +
    0.0303 * BC_stl +
    0.0132 * R_reb +
    -0.00005547 * S_ft_pct;

  // Convert to probability using sigmoid
  const probability = 1 / (1 + Math.exp(-linear_result));

  return {
    prediction: probability > 0.5 ? "Win" : "Loss",
    confidence: (probability * 100).toFixed(1) + "%"
  };
} 