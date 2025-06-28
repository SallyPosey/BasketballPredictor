export function modelA_predict({ S_fg_pct, BC_to, S_3pt_m, BC_stl, R_reb, S_ft_pct }) {
  // Apply linear equation from OLS results
  const linear_result =
    -0.8612 +
    0.0365 * S_fg_pct +
    -0.0438 * BC_to +
    -0.0358 * S_3pt_m +
    0.0076 * BC_stl +
    0.0229 * R_reb +
    -0.0028 * S_ft_pct;

  // Convert to probability using sigmoid
  const probability = 1 / (1 + Math.exp(-linear_result));

  return {
    prediction: probability > 0.5 ? "Win" : "Loss",
    confidence: (probability * 100).toFixed(1) + "%"
  };
}

// Model A Averages (24-25 Season)
export const modelA_averages = {
  S_fg_pct: 43.2,
  BC_to: 16.6,
  S_3pt_m: 6.4,
  BC_stl: 11.6,
  R_reb: 44.2,
  S_ft_pct: 64.6
}; 