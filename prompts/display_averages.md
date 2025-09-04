# 🛠️ Feature Request: Add Model Averages to UI

## 🎯 Goal
Enhance the Basketball Game Predictor app UI by displaying **model-specific averages** for each feature when a model is selected from the dropdown.

---

## ✅ Current Setup
- The app features six sliders inside a centered panel:
  - Field Goal Percentage
  - Turnovers
  - Three-pointers
  - Steals
  - Total Rebounds
  - Free-throw Percentage
- All data is already hardcoded in the three model files.
- Models are selectable from a dropdown labeled: `Select Prediction Model`.

---

## 📌 What to Add

### 1. `AVERAGES:` Label
- Display the title `AVERAGES:` **to the left** of the entire container that holds the sliders.
- It should be vertically aligned with the slider block.

### 2. Feature Averages
- When a model is selected, display each feature’s **average value** (from that model) to the **left of its corresponding slider**, **outside** the current slider card/container.

##Data
###Model A (24-25 Season)

avg_S_fg_pct = 43.2
avg_BC_to = 16.6
avg_S_3pt_m = 6.4
avg_BC_stl = 11.6
avg_R_reb = 44.2
avg_S_ft_pct = 64.6

###Model B (23-24 & 24-25 Seasons)

avg_S_fg_pct = 41.4
avg_BC_to = 14.5
avg_S_3pt_m = 6.1
avg_BC_stl = 10.0
avg_R_reb = 39.9
avg_S_ft_pct = 66.1

###Model C (Past 11 Seasons)

avg_S_fg_pct = 41.5
avg_BC_to = 11.7
avg_S_3pt = 6.0
avg_BC_stl = 10.3
avg_R_reb = 44.2
avg_S_ft_pct = 67.9
