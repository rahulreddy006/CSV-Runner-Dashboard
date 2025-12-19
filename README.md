# CSV Runner Dashboard

## Project Overview

This project is a solution to the **CSV Runner Dashboard** assignment.  
The application allows users to upload a CSV file containing running data and view summary metrics and visualizations.

Users can:
- Upload a CSV file with running records
- View overall and per-person statistics
- Analyze data through charts
- Receive clear errors for invalid input

The focus of this project is **data validation, clean UI, and clear user experience**.

---

## Assumptions

- Although the problem statement mentions **Next.js**, this solution is implemented using **React (Vite)** to focus on frontend logic, CSV processing, state management, and UI/UX.
- The application does **not require a backend**, since all data is processed client-side from the uploaded CSV file.
- No data persistence is required beyond the current session.
- The solution is framework-agnostic and can be migrated to Next.js if needed.

---

## Prerequisites

- **Node.js**: v18 or above  
- **npm**: v9 or above  
- Modern browser (Chrome / Edge / Firefox)

---

## Setup

### Install dependencies

```bash
npm install
```
Environment variables

This project does not require any environment variables.
No .env file is needed.

Seed / Initial Data

No database or seed data is required.
A sample CSV file is provided for testing.

Run & Verify
Start the development server

```bash
npm run dev
```
The app will be available at:
```
http://localhost:5173
```
How to Verify Acceptance Criteria
1. Upload Sample CSV

Use the provided file:
```
public/sample.csv
```

Sample format:
```
date,person,miles
2024-01-01,Rahul,5
2024-01-02,Ankit,3
2024-01-03,Rahul,7
```
2. Verify Metrics

Average miles

Minimum miles

Maximum miles
Metrics update dynamically based on selected runner.

3. Verify Per-Person View

Use the Runner filter dropdown

Select a specific person

Metrics and chart update accordingly

4. Verify Charts

Bar chart visualizing miles run

Updates for overall and per-person views

5. Verify Error Handling

Try uploading:

A CSV missing required columns

Non-numeric values in the miles column

The app displays clear, user-friendly error messages.

Features & Limitations
Features

CSV upload and parsing

Header and data validation

Overall and per-person metrics

Interactive chart visualization

Responsive, clean UI

Empty and error states

Limitations

No persistent storage

No authentication

Large CSV files may impact performance

Future Improvements

Support for larger datasets via streaming

Additional chart types

Export metrics as CSV

Dark mode

Notes on Architecture
Folder Structure
```
src/
├── components/     # UI components
├── utils/          # CSV parsing and metric logic
├── App.jsx         # Main application state
├── main.jsx        # Entry point
```
State & Data Flow

CSV file is parsed client-side using PapaParse

Parsed data is stored in React state

Metrics are derived from filtered data

UI updates reactively based on state changes

Accessibility & UI

Semantic HTML elements used

Clear labels for inputs and filters

High contrast text and backgrounds

Consistent spacing and typography using Tailwind CSS

Responsive layout for different screen sizes

Evaluation Alignment

This project explicitly addresses:

Functionality & acceptance criteria

Clean code structure

UI clarity and consistency

Developer-friendly README

Edge cases and validation

Author

Rahul Reddy
Aspiring Full Stack Developer
```bash
npm install
