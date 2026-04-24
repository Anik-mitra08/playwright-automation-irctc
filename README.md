# 📊 Playwright Automation Report – IRCTC Booking Flow

**Date:** 17 April 2026


## 📌 1. Project Overview

This project automates the IRCTC train booking workflow using Playwright.
The automation simulates a real user journey from login to passenger detail submission.

---

## 🛠 2. Technology Stack

* **Automation Tool:** Playwright
* **Language:** JavaScript
* **Environment:** Node.js
* **Version Control:** Git & GitHub
* **IDE:** VS Code

---

## 🔐 3. Environment Setup

* Configured `.env` file to store:

  * IRCTC Username
  * IRCTC Password
* Used `dotenv` to securely access credentials
* Created reusable screenshot utility

---

## 🔄 4. Test Flow Implementation

### 🔹 4.1 Launch Application

* Opened IRCTC train search page
* Set mobile viewport (460x760)
* Handled initial popup (OK button)

---

### 🔹 4.2 Login Functionality

* Clicked login button (mobile UI handling included)
* Entered username and password from `.env`
* Clicked **Sign In**
* Added validation for login success/failure
* Captured screenshots at each step

---

### 🔹 4.3 Train Search

* Entered **From Station:** BERHAMPORE CRT - BPC
* Entered **To Station:** SEALDAH - SDAH
* Selected journey date (30th)
* Clicked **Search Train**
* Handled auto-suggestion dropdown using keyboard actions

---

### 🔹 4.4 Class Selection

* Opened **All Classes** dropdown
* Selected **Sleeper (SL)** option

---

### 🔹 4.5 Train Selection (Dynamic Logic)

* Iterated through train list
* Identified train using **Train No: 53178**
* Clicked **Refresh Availability**
* Selected specific date (Thu, 30 Apr)

---

### 🔹 4.6 Booking Action

* Clicked **Book Now** button
* Waited for navigation to passenger details page

---

### 🔹 4.7 Passenger Details Form

* Entered:

  * Name: Anik Mitra
  * Age: 27
* Selected:

  * Gender: Male
  * Berth Preference: Side Lower
* Filled **Mobile Number (Contact Details)**
* Ensured form validation by triggering input events

---

### 🔹 4.8 Continue to Next Step

* Clicked **Continue** button
* Added waits and validation checks
* Handled cases where page does not proceed due to:

  * Validation issues
  * IRCTC bot detection

---

## 📸 5. Reporting & Debugging

* Implemented **automatic screenshots** at each step
* Stored screenshots with:

  * Test name
  * Timestamp
* Added console logs for:

  * Success scenarios
  * Failure/debug tracking

---

## ⚠️ 6. Challenges Faced

### 🔸 Dynamic Elements

* IRCTC uses dynamic Angular components
* Required smart locators and waits

### 🔸 Strict Mode Errors

* Multiple elements matched → resolved using `.nth()` and better locators

### 🔸 Bot Detection / CAPTCHA

* IRCTC restricts automation beyond certain steps
* Payment page sometimes not accessible

### 🔸 XPath Instability

* Long XPaths caused failures → improved with text-based locators

---

## ✅ 7. Key Achievements

* Automated **end-to-end booking flow (till passenger details)**
* Implemented **dynamic train selection logic**
* Handled **real-world issues (timeouts, dropdowns, validation)**
* Integrated **GitHub version control**
* Built a **realistic QA automation project**

---

## 🚀 8. Conclusion

This project demonstrates strong understanding of:

* UI Automation using Playwright
* Real-world test scenario handling
* Debugging and stability improvements
* End-to-end workflow automation

The implementation closely simulates actual user behavior and is suitable for showcasing automation skills in QA interviews.

---

## 👨‍💻 Author

**Anik Mitra**

---
