# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> IRCTC Full Login Flow (Mobile View)
- Location: tests\example.spec.js:25:5

# Error details

```
Error: ❌ CAPTCHA not entered
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
  229 |         .locator(
  230 |           '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[3]/select',
  231 |         )
  232 |         .selectOption({ label: "Male" });
  233 | 
  234 |       console.log("✅ Passenger details filled");
  235 |       // -------- BERTH PREFERENCE --------
  236 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  237 |       await page
  238 |         .locator(
  239 |           '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/div[1]/select',
  240 |         )
  241 |         .selectOption({ label: "Side Lower" });
  242 | 
  243 |       console.log("✅ Berth preference selected");
  244 |       // -------- CONTACT DETAILS (MOBILE NUMBER) --------
  245 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  246 | 
  247 |       const mobileField = page.locator('//*[@id="mobileNumber"]');
  248 | 
  249 |       if (await mobileField.isVisible().catch(() => false)) {
  250 |         await mobileField.fill("7001592584");
  251 |       }
  252 |       console.log("✅ Mobile number filled");
  253 | 
  254 |       // -------- SELECT RADIO BUTTON --------
  255 |       await page.waitForTimeout(2000 + Math.random() * 2000);
  256 | 
  257 |       const radioBtn = page.locator('//*[@id="2"]/div/div[2]/span');
  258 | 
  259 |       if (await radioBtn.isVisible().catch(() => false)) {
  260 |         await radioBtn.click();
  261 |         console.log("✅ UPI button selected");
  262 |       } else {
  263 |         console.log("❌ UPI button not visible");
  264 |       }
  265 | 
  266 |       // -------- CLICK CONTINUE --------
  267 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  268 |       await page
  269 |         .locator(
  270 |           '//*[@id="psgn-form"]/form/div/div[1]/p-sidebar/div/div/div[2]/button',
  271 |         )
  272 |         .click();
  273 | 
  274 |       // -------- WAIT FOR PAGE TRANSITION --------
  275 | 
  276 |       await page.waitForLoadState("domcontentloaded");
  277 | 
  278 |       await page.waitForTimeout(5000);
  279 | 
  280 |       // // -------- CAPTCHA HANDLING (Browser input) --------
  281 | 
  282 |       // console.log("⏳ Waiting to see if CAPTCHA appears...");
  283 | 
  284 |       // // Wait for either CAPTCHA OR next page
  285 |       // let captchaAppeared = false;
  286 | 
  287 |       // try {
  288 |       //   await Promise.race([
  289 |       //     (async () => {
  290 |       //       const captcha = page.locator("#captcha");
  291 |       //       await captcha.waitFor({ state: "visible", timeout: 55000 });
  292 |       //       captchaAppeared = true;
  293 |       //     })(),
  294 | 
  295 |       //     page.waitForNavigation({ timeout: 55000 }),
  296 |       //   ]);
  297 |       // } catch {
  298 |       //   console.log("⚠️ Neither CAPTCHA nor navigation detected");
  299 |       // }
  300 | 
  301 |       // // ---- HANDLE CASES ----
  302 | 
  303 |       // if (captchaAppeared) {
  304 |       //   console.log("⚠️ CAPTCHA detected");
  305 |       //   console.log("👉 Solve it FAST (15-25 sec)");
  306 | 
  307 |       //   // Wait for user to solve it
  308 |       //   try {
  309 |       //     await page.waitForNavigation({ timeout: 25000 });
  310 |       //   } catch {
  311 |       //     console.log("⚠️ Navigation not detected after CAPTCHA");
  312 |       //   }
  313 | 
  314 |       //   console.log("✅ CAPTCHA handled");
  315 |       // } else {
  316 |       //   console.log("✅ No CAPTCHA, moved to next step");
  317 |       // }
  318 |       // -------- CAPTCHA HANDLING FROM TERMINAL --------
  319 | 
  320 |       const captchaField = page.locator("#captcha");
  321 | 
  322 |       if (await captchaField.isVisible().catch(() => false)) {
  323 |         console.log("⚠️ CAPTCHA detected");
  324 |         console.log("👉 Type CAPTCHA in terminal and press ENTER");
  325 | 
  326 |         const captchaValue = askCaptchaFromTerminal();
  327 | 
  328 |         if (!captchaValue) {
> 329 |           throw new Error("❌ CAPTCHA not entered");
      |                 ^ Error: ❌ CAPTCHA not entered
  330 |         }
  331 | 
  332 |         await captchaField.fill(captchaValue);
  333 | 
  334 |         console.log("✅ CAPTCHA filled from terminal");
  335 |       }
  336 | 
  337 |       // -------- CLICK CONTINUE --------
  338 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  339 |       await page.getByRole("button", { name: "Continue" }).click();
  340 | 
  341 |       // -------- WAIT FOR PAGE TRANSITION --------
  342 |       await page.waitForLoadState("domcontentloaded");
  343 |       await page.waitForTimeout(5000);
  344 |       console.log("Moved to Payment Page..");
  345 | 
  346 |       // -------- PAYMENT PAGE: SELECT IRCTC iPay --------
  347 |       const irctcIPayOption = page.locator('//*[@id="pay-type"]/span/div[1]');
  348 |       await irctcIPayOption.waitFor({ state: "visible", timeout: 25000 });
  349 |       await irctcIPayOption.click();
  350 |       console.log("✅ IRCTC iPay selected");
  351 | 
  352 |       // -------- CLICK CONTINUE AFTER PAYMENT OPTION --------
  353 |       const paymentContinueBtn = page.locator(
  354 |         '//*[@id="psgn-form"]/div[1]/div[1]/app-payment/div[1]/div/form/p-sidebar[2]/div/div/div[2]/button',
  355 |       );
  356 |       await paymentContinueBtn.waitFor({ state: "visible", timeout: 15000 });
  357 |       await paymentContinueBtn.click();
  358 |       console.log("✅ Payment continue clicked");
  359 | 
  360 |       // -------- CLICK IRCTC PAYMENT CARD --------
  361 |       const irctcCard = page
  362 |         .locator("div")
  363 |         .filter({
  364 |           hasText:
  365 |             /Credit\s*&\s*Debit Cards\/Net Banking\s*\/Autopay\/UPI\s*\(Powered by IRCTC\)/i,
  366 |         })
  367 |         .first();
  368 | 
  369 |       await irctcCard.waitFor({ state: "visible", timeout: 20000 });
  370 |       await irctcCard.click({ force: true });
  371 | 
  372 |       console.log("✅ IRCTC payment card clicked");
  373 | 
  374 |       // -------- CLICK PAY & BOOK --------
  375 |       const payAndBookBtn = page.getByRole("button", { name: /Pay & Book/i });
  376 |       await payAndBookBtn.waitFor({ state: "visible", timeout: 15000 });
  377 |       await payAndBookBtn.click();
  378 |       console.log("✅ Pay & Book clicked");
  379 | 
  380 |       // -------- WAIT FOR PAGE TRANSITION --------
  381 |       await page.waitForLoadState("domcontentloaded");
  382 |       await page.waitForTimeout(5000);
  383 |       console.log("Final Payment Page..");
  384 | 
  385 |       // -------- SELECT PHONEPE OPTION --------
  386 |       await page.waitForLoadState("domcontentloaded");
  387 |       await page.waitForTimeout(3000);
  388 | 
  389 |       const phonePeOption = page.getByText("Paytm", { exact: false }).first();
  390 | 
  391 |       await phonePeOption.waitFor({ state: "visible", timeout: 20000 });
  392 |       await phonePeOption.click({ force: true });
  393 | 
  394 |       console.log("✅ Paytm option selected");
  395 | 
  396 |       // -------- CLICK PAY BUTTON --------
  397 |       const payBtn = page.getByRole("button", { name: /^Pay$/i });
  398 | 
  399 |       await payBtn.waitFor({ state: "visible", timeout: 20000 });
  400 |       await payBtn.click({ force: true });
  401 | 
  402 |       console.log("✅ Pay button clicked");
  403 | 
  404 |       break;
  405 |     }
  406 |   }
  407 | });
  408 | 
  409 | // Excercise of test.only by uncommenting below code and commenting above test block
  410 | 
  411 | // test.only("IRCTC Full Login Flow (Mobile View)1", async ({
  412 | //   page,
  413 | // }, testInfo) => {
  414 | //   // -------- OPEN WEBSITE --------
  415 | //   await page.goto("https://www.irctc.co.in/nget/train-search", {
  416 | //     waitUntil: "domcontentloaded",
  417 | //     timeout: 60000,
  418 | //   });
  419 | 
  420 | //   await page.waitForTimeout(5000);
  421 | // });
  422 | 
  423 | // Excercise of test.skip by uncommenting below code and commenting above test block
  424 | 
  425 | // test.skip("IRCTC Full Login Flow (Mobile View)1", async ({
  426 | //   page,
  427 | // }, testInfo) => {
  428 | //   // -------- OPEN WEBSITE --------
  429 | //   await page.goto("https://www.irctc.co.in/nget/train-search", {
```