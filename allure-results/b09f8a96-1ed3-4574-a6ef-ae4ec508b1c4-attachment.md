# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> IRCTC Full Login Flow (Mobile View)
- Location: tests\example.spec.js:25:5

# Error details

```
ReferenceError: spawnSync is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner "Header" [ref=e4]:
    - generic [ref=e5]:
      - banner [ref=e6]:
        - text: 
        - generic [ref=e7]:
          - generic [ref=e8] [cursor=pointer]:
            - generic [ref=e9]: 
            - generic [ref=e10]: IRCTC
          - generic [ref=e11]:
            - link "" [ref=e12] [cursor=pointer]:
              - /url: /nget/enquiry/alerts
              - generic [ref=e13]: 
            - generic [ref=e15] [cursor=pointer]: 
      - text:               
  - generic [ref=e19]:
    - generic [ref=e21]:
      - generic [ref=e22]: 
      - generic [ref=e23]:
        - strong [ref=e24]: Review Journey
        - text: BERHAMPORE CRT to SEALDAH | Thu, 30 Apr
    - complementary [ref=e26]:
      - text: 
      - generic [ref=e27]:
        - generic [ref=e30]:
          - generic [ref=e33]: Fare Summary
          - region "Fare Summary" [ref=e34]:
            - generic [ref=e35]:
              - generic [ref=e36]:
                - generic [ref=e37]: Ticket Fare
                - strong [ref=e39]: ₹ 105.00
              - generic [ref=e40]:
                - generic [ref=e41]: Convenience Fee (Incl. of GST)
                - strong [ref=e43]: ₹ 11.80
        - generic [ref=e45]:
          - generic [ref=e46]: Total Fare
          - strong [ref=e48]: ₹ 116.80
      - button "OK" [ref=e50] [cursor=pointer]
    - generic [ref=e52]:
      - generic [ref=e54]:
        - generic [ref=e55]:
          - strong [ref=e58]: LGL SDAH PSGN (53178)
          - strong [ref=e60]:
            - generic [ref=e62] [cursor=pointer]: 
          - generic [ref=e63]:
            - strong
        - generic [ref=e65]:
          - generic [ref=e66]:
            - generic:
              - generic [ref=e68]: 10:26
              - generic [ref=e69]: 04:46
              - generic [ref=e71]: 15:12
            - generic [ref=e73]:
              - generic [ref=e74]: BERHAMPORE CRT
              - generic [ref=e75]: SEALDAH
            - generic [ref=e77]:
              - generic [ref=e78]: Thu, 30 Apr
              - generic [ref=e79]: Thu, 30 Apr
          - generic [ref=e81]: GNWL27/WL20
        - strong [ref=e85]:
          - generic [ref=e86]: 1 Adult |
          - text: "Sleeper (SL) | General | Boarding at Berhampore Crt | Boarding Date: 30 Apr 2026 10:26"
        - strong [ref=e91]:
          - generic [ref=e92]:
            - text: Please check NTES website or
            - link "NTES app" [ref=e93] [cursor=pointer]:
              - /url: https://play.google.com/store/apps/details?id=cris.icms.ntes
            - text: for actual time before boarding
      - generic [ref=e101]:
        - generic [ref=e102]:
          - generic [ref=e104]: Passenger Details
          - tab "" [expanded] [ref=e105] [cursor=pointer]:
            - generic [ref=e106]: 
        - region "Passenger Details " [ref=e107]:
          - generic [ref=e109]:
            - strong [ref=e111]: "1"
            - generic [ref=e112]:
              - strong [ref=e113]: Anik mitra
              - text: 27 yrs | Male | India | Side Lower
      - generic [ref=e118]:
        - text: Your ticket will be sent to
        - strong [ref=e119]: an******@gmail.com / 70******84
      - link "View Cancellation Policy" [ref=e122] [cursor=pointer]:
        - /url: http://contents.irctc.co.in/en/Refundrule2015.pdf
      - generic [ref=e132]:
        - generic [ref=e133]:
          - img "Captcha Image here" [ref=e135]
          - link "Click to refresh Captcha" [ref=e136] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e137]: 
        - textbox "Enter Captcha" [ref=e138]
      - complementary [ref=e141]:
        - text: 
        - generic:
          - button "₹ 116.8" [ref=e143] [cursor=pointer]
          - button "Continue" [ref=e145] [cursor=pointer]
  - generic [ref=e146]:                             
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | import dotenv from "dotenv";
  3   | import fs from "fs";
  4   | import { execFileSync } from "child_process";
  5   | 
  6   | dotenv.config();
  7   | 
  8   | test.setTimeout(300000);
  9   | 
  10  | // test.describe.configure({ mode: "parallel" }); Excercise of test.describe.parallel by uncommenting above line and commenting below test block
  11  | // test.describe.configure({ mode: "serial" }); Excercise of test.describe.serial by uncommenting above line and commenting below test block
  12  | function askCaptchaFromTerminal() {
> 13  |   const result = spawnSync(
      |                  ^ ReferenceError: spawnSync is not defined
  14  |     "powershell.exe",
  15  |     ["-NoProfile", "-Command", "Read-Host 'Enter CAPTCHA'"],
  16  |     {
  17  |       encoding: "utf-8",
  18  |       stdio: ["inherit", "pipe", "inherit"],
  19  |     },
  20  |   );
  21  | 
  22  |   return result.stdout.trim();
  23  | }
  24  | 
  25  | test("IRCTC Full Login Flow (Mobile View)", async ({ page }, testInfo) => {
  26  |   // -------- OPEN WEBSITE --------
  27  |   await page.goto("https://www.irctc.co.in/nget/train-search", {
  28  |     waitUntil: "domcontentloaded",
  29  |     timeout: 60000,
  30  |   });
  31  | 
  32  |   await page.waitForTimeout(5000);
  33  | 
  34  |   // -------- CLOSE INITIAL POPUP --------
  35  |   const okBtn = page.locator('button:has-text("OK")');
  36  |   if (await okBtn.isVisible().catch(() => false)) {
  37  |     await okBtn.click();
  38  |   }
  39  | 
  40  |   // Activate UI
  41  |   await page.mouse.click(100, 100);
  42  | 
  43  |   // -------- OPEN MENU (MOBILE) --------
  44  |   const menuBtn = page.locator(
  45  |     '//div[@class="h_menu_drop_button moblogo hidden-sm"]//i[@class="fa fa-align-justify"]',
  46  |   );
  47  | 
  48  |   if (await menuBtn.isVisible().catch(() => false)) {
  49  |     await menuBtn.click({ force: true });
  50  |     await page.waitForTimeout(4000 + Math.random() * 3000);
  51  |   }
  52  | 
  53  |   // -------- CLICK LOGIN --------
  54  |   const loginBtn = page.locator('//button[@class="search_btn"]').first();
  55  | 
  56  |   if (await loginBtn.isVisible().catch(() => false)) {
  57  |     await loginBtn.click({ force: true });
  58  |   } else {
  59  |     await page
  60  |       .locator('//a[@aria-label="Click here to Login in application"]')
  61  |       .click({ force: true });
  62  |   }
  63  | 
  64  |   await page.waitForTimeout(3000);
  65  | 
  66  |   // -------- WAIT FOR LOGIN FORM --------
  67  |   await page.waitForSelector('input[placeholder="User Name"]', {
  68  |     timeout: 15000,
  69  |   });
  70  | 
  71  |   // -------- GET CREDENTIALS --------
  72  |   const user = process.env.IRCTC_USERNAME;
  73  |   const pass = process.env.IRCTC_PASSWORD;
  74  | 
  75  |   // -------- ENTER USERNAME & PASSWORD --------
  76  |   await page.getByPlaceholder("User Name").fill(user);
  77  |   await page.getByPlaceholder("Password").fill(pass);
  78  | 
  79  |   // -------- CLICK SIGN IN --------
  80  |   await page.getByRole("button", { name: /sign in/i }).click();
  81  | 
  82  |   await page.waitForTimeout(5000);
  83  | 
  84  |   // -------- VALIDATE LOGIN --------
  85  |   const errorPopup = page.locator("text=Unable to Process Request");
  86  | 
  87  |   if (await errorPopup.isVisible().catch(() => false)) {
  88  |     console.log("❌ Login failed (IRCTC blocking you to login)");
  89  | 
  90  |     return;
  91  |   }
  92  | 
  93  |   console.log("✅ Login flow completed successfully");
  94  | 
  95  |   // -------- TRAIN SEARCH --------
  96  | 
  97  |   // From Station
  98  |   const fromStation = page.locator(
  99  |     "//input[@aria-label='Enter From station. Input is Mandatory.']",
  100 |   );
  101 |   await fromStation.fill("BERHAMPORE CRT - BPC (Howrah / Kolkata)");
  102 |   await page.waitForTimeout(4000 + Math.random() * 3000);
  103 |   await page.keyboard.press("ArrowDown");
  104 |   await page.keyboard.press("Enter");
  105 | 
  106 |   // To Station
  107 |   const toStation = page.locator(
  108 |     "//input[@aria-label='Enter To station. Input is Mandatory.']",
  109 |   );
  110 |   await toStation.fill("SEALDAH - SDAH (Howrah / Kolkata)");
  111 |   await page.waitForTimeout(4000 + Math.random() * 3000);
  112 |   await page.keyboard.press("ArrowDown");
  113 |   await page.keyboard.press("Enter");
```