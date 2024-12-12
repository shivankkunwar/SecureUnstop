
# Authentication Unstop 

## Overview
This project is a responsive login page built with React and CSS, featuring options for logging in via Google and Facebook, along with a traditional username and password authentication method. The design is based on the provided Figma mockup.



https://github.com/user-attachments/assets/fb2326fd-3834-4bb7-97d3-862d4f8cc112
## Figma Design

You can view the design specifications for this project at the following link: [Figma Design](https://www.figma.com/design/rvldhbeY0NnQlXQkxUi8EW/LoginPage-Task?node-id=12).

## General Features
- **Login Options**: Includes "Login with Google" and "Login with Facebook" buttons (no action required).
- **Login Form**:
  - Fields for **Username**, **Email**, and **Password** with appropriate placeholders and icons.
  - Username must be "emilys".
  - A **Remember Me** checkbox.
  - A **Forgot Password?** link (no action required).
  - A styled **Login** button according to the design.
  - A **Register** link for new users (no action required).

## Validation & API Integration
- Email validation to ensure proper format (e.g., example@gmail.com) with an error message for incorrect formats.
- Password must be at least 8 characters long, with a validation message for non-compliance.
- Username validation to accept only "emilys", displaying an error message if invalid.
- Validated credentials are sent to the API: 
  ```json
  POST https://dummyjson.com/auth/login
  {
    "username": "emilys",
    "password": "your password",
    "email": "email id", // optional
    "expiresInMins": 30 // optional
  }
  ```
## Validation & API Integration
- Store authentication token/user data in `localStorage`.
- If user data exists in `localStorage`, redirect to the main page without requiring login.
- Logout functionality removes user data from `localStorage` and redirects to the login page.

## Logout Functionality
- Clicking the **Logout** button on the main page will remove stored authentication token/user data from `localStorage` and redirect back to the login page.

## Routing
- Login Page: `example.com/auth/login`
- Main Page: `example.com/home`

## Responsiveness
The application is designed to be responsive, adapting seamlessly across various screen sizes including desktop, tablet, and mobile devices.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
Navigate into the project directory:
```bash
cd <project-directory>
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm start
```
# Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
