🧠 Brain Cancer Detection System

(Dual-Stage AI-Based Healthcare Application)

📌 Project Overview

The Brain Cancer Detection System is a dual-stage AI-powered healthcare solution designed to assist in early detection and analysis of brain cancer.
The system integrates Machine Learning models for cancer risk prediction with a modern web-based frontend for user interaction and visualization.

This project is developed as an academic / final-year engineering project with a focus on real-world applicability in healthcare diagnostics.

🎯 Objectives

Predict the probability of brain cancer risk using clinical and patient-related data

Provide a user-friendly frontend interface for data input and result visualization

Support AI-driven decision-making for early diagnosis

Maintain a modular structure separating ML models and frontend UI

🧩 Project Structure
Brain_Csn_Final/
│
├── brainscan-ai-main/        # Frontend Application
││   ├── public/              # Static assets
││   ├── src/                 # Source code (UI components, logic)
││   ├── index.html           # Entry HTML file
││   ├── package.json         # Frontend dependencies
││   ├── vite.config.ts       # Vite configuration
││   ├── tailwind.config.ts   # Tailwind CSS configuration
││   └── README.md            # Frontend-specific documentation
│
├── final1.ipynb              # ML Model (Brain Cancer Risk Prediction)
│
└── README.md                 # Main project documentation

🧠 System Architecture (High-Level)
Stage 1 – Cancer Risk Prediction

Input: Patient clinical data & symptoms

Model Type: Machine Learning (XGBoost / Random Forest)

Output: Probability score indicating brain cancer risk

Stage 2 – Frontend Visualization

Displays prediction results

User-friendly interface for data entry

Designed for future integration with MRI-based tumor detection

🤖 Machine Learning Model (final1.ipynb)
📌 Description

The final1.ipynb notebook contains:

Data preprocessing and cleaning

Feature selection and scaling

Model training and evaluation

Probability-based cancer risk prediction

🛠️ Technologies Used

Python

Pandas, NumPy

Scikit-learn

XGBoost / Random Forest

Matplotlib / Seaborn (for visualization)

📊 Output

Cancer risk probability (0–1)

Binary prediction:

Cancer Detected

No Cancer Detected

🌐 Frontend Application (brainscan-ai-main)
📌 Description

The frontend provides:

Interactive UI for entering patient data

Real-time display of prediction results

Clean and responsive design using modern tools

🛠️ Technologies Used

HTML, CSS, JavaScript

Vite

Tailwind CSS

TypeScript

▶️ How to Run Frontend Locally
cd brainscan-ai-main
npm install
npm run dev

🔗 Future Scope

Integration of ML model with backend (Flask / FastAPI)

MRI image-based tumor detection (CNN – Stage 2)

Cloud deployment (GitHub Pages + Backend Hosting)

Doctor & patient dashboard

Secure database integration

📚 Academic Relevance

Domain: Artificial Intelligence / Healthcare

Concepts Used:

Machine Learning

Predictive Analytics

Web Development

AI-based Decision Support Systems

👨‍💻 Author

Amit Ashok Arote
4th Year Computer Engineering Student
Gaurav Sonawane
4th Year Computer Engineering Student

⚠️ Disclaimer

This system is developed for academic and research purposes only and should not be used as a substitute for professional medical diagnosis.
