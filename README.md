# Contract Management Platform (FrontEnd)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture and State Management](#architecture-and-state-management)
- [Setup Instructions](#setup-instructions)
- [Assumptions and Limitations](#assumptions-and-limitations)
- [Future Improvements](#future-improvements)


## OverView

This project is a frontend-based Contract Management Platform built as part of an assignment.

The goal was to design and implement a clean, usable interface for managing contract templates (blueprints), creating contracts from them, and handling contract lifecycle states — without relying on a backend.



## Features

- Create reusable contract blueprints with configurable fields
- Supported field types: Text, Date, Checkbox, Signature (simulated)
- Generate contracts from existing blueprints
- Fill contract field values dynamically
- Contract lifecycle management:
  - Created → Approved → Sent → Signed → Locked
  - Revoked contracts cannot proceed further
- Dashboard view to list and filter contracts by status
- View contract details in a read-only format
- Data persistence using browser localStorage


## Tech Stack

- React (Vite)
- JavaScript (JSX)
- Browser localStorage for persistence
- CSS for basic styling


## Project Structure

src/
- components/
  - Blueprint.jsx
  - Creator.jsx
  - Dashboard.jsx
  - ContractView.jsx
- App.jsx
- main.jsx
- index.css


## Architecture and State Management

- Application state is managed using React's useState hook
- State is lifted to App.jsx and passed down as props
- Navigation between views is handled via conditional rendering
- Business rules such as contract lifecycle transitions are enforced at the UI level
- Persistence is simulated using localStorage to mimic backend behavior


## Setup Instructions

1. Clone the repository
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Open the application in the browser at the provided local URL


## Assumptions and Limitations

- No backend or authentication is implemented
- Data is stored locally and will reset if browser storage is cleared
- Signature fields are represented as placeholders
- Styling is intentionally minimal, focusing on clarity and usability

## Future Improvements

- Drag-and-drop field positioning in blueprints
- Status timeline visualization
- Backend integration for persistence and multi-user support
- Unit tests for lifecycle rules
