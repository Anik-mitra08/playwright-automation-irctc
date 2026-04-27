<!-- BANNER -->
<h1 align="center">🚀 IRCTC Automation using Playwright</h1>

<p align="center">
  <b>End-to-End Booking Flow Automation | Jenkins CI | Allure Reports</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-Automation-green?style=for-the-badge&logo=playwright" />
  <img src="https://img.shields.io/badge/Jenkins-CI/CD-red?style=for-the-badge&logo=jenkins" />
  <img src="https://img.shields.io/badge/Allure-Reporting-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

---

# 📊 Playwright Automation Report – IRCTC Booking Flow

📅 **Date:** 17 April 2026

---

## 📌 1. Project Overview

This project automates the **IRCTC train booking workflow** using Playwright.  
It simulates a **real user journey** from login to passenger detail submission and payment flow navigation.

⚠️ Due to IRCTC anti-bot protection, **CAPTCHA is handled manually** while the rest of the flow is automated.

> 🚀 Developed a complete CI/CD pipeline using Jenkins to automate Playwright test execution for a real-world IRCTC booking flow.

---

## 🛠 2. Technology Stack

| Tool          | Usage                |
| ------------- | -------------------- |
| 🎭 Playwright | Automation Framework |
| 🟢 JavaScript | Programming Language |
| ⚙️ Node.js    | Runtime Environment  |
| 🔁 Jenkins    | CI/CD Pipeline       |
| 📊 Allure     | Test Reporting       |
| 🧠 GitHub     | Version Control      |
| 💻 VS Code    | IDE                  |

---

## 🔐 3. Environment Setup

- Created `.env` file to store:
  - IRCTC Username
  - IRCTC Password
- Used `dotenv` for secure credential handling
- Implemented reusable screenshot utility

---

## 🔄 4. Test Flow Implementation

### 🔹 4.1 Launch Application

- Opened IRCTC train search page
- Set mobile viewport (460x760)
- Handled initial popup

---

### 🔹 4.2 Login Functionality

- Clicked login button (mobile UI supported)
- Entered credentials from `.env`
- Clicked **Sign In**
- Added login success/failure validation
- Captured screenshots

---

### 🔹 4.3 Train Search

- From: **BERHAMPORE CRT - BPC**
- To: **SEALDAH - SDAH**
- Selected journey date
- Clicked **Search Train**
- Handled auto-suggestion dropdown

---

### 🔹 4.4 Class Selection

- Opened dropdown
- Selected **Sleeper (SL)**

---

### 🔹 4.5 Train Selection (Dynamic Logic)

- Iterated through train list
- Selected **Train No: 53178**
- Clicked **Refresh Availability**
- Selected specific date

---

### 🔹 4.6 Booking Action

- Clicked **Book Now**
- Waited for navigation

---

### 🔹 4.7 Passenger Details

- Entered Name & Age
- Selected Gender & Berth
- Filled Mobile Number
- Triggered validations

---

### 🔹 4.8 Continue Flow

- Clicked **Continue**
- Added waits and validations
- Handled failures due to:
  - Validation issues
  - IRCTC bot detection

---

## 🤖 5. Jenkins CI/CD Pipeline

### 🏗 CI/CD Implementation (Designed & Implemented)

- Designed and implemented a **Jenkins CI pipeline** for automated test execution
- Integrated **GitHub repository with Jenkins** for source control
- Configured pipeline stages:
  - Code checkout
  - Dependency installation
  - Test execution using Playwright
  - Allure report generation
- Enabled **artifact archiving** (screenshots & videos) for debugging
- Executed tests in **headed mode with single worker** to handle IRCTC anti-bot restrictions

### 🔁 Flow:

```text
GitHub → Jenkins → Install → Run Tests → CAPTCHA → Allure Report
```
