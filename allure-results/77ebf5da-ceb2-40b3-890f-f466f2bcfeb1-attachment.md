# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> IRCTC Full Login Flow (Mobile View)
- Location: tests\example.spec.js:31:5

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
  235 |         .locator(
  236 |           '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[3]/select',
  237 |         )
  238 |         .selectOption({ label: "Male" });
  239 | 
  240 |       console.log("✅ Passenger details filled");
  241 |       // -------- BERTH PREFERENCE --------
  242 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  243 |       await page
  244 |         .locator(
  245 |           '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/div[1]/select',
  246 |         )
  247 |         .selectOption({ label: "Side Lower" });
  248 | 
  249 |       console.log("✅ Berth preference selected");
  250 |       // -------- CONTACT DETAILS (MOBILE NUMBER) --------
  251 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  252 | 
  253 |       const mobileField = page.locator('//*[@id="mobileNumber"]');
  254 | 
  255 |       if (await mobileField.isVisible().catch(() => false)) {
  256 |         await mobileField.fill("7001592584");
  257 |       }
  258 |       console.log("✅ Mobile number filled");
  259 | 
  260 |       // -------- SELECT RADIO BUTTON --------
  261 |       await page.waitForTimeout(2000 + Math.random() * 2000);
  262 | 
  263 |       const radioBtn = page.locator('//*[@id="2"]/div/div[2]/span');
  264 | 
  265 |       if (await radioBtn.isVisible().catch(() => false)) {
  266 |         await radioBtn.click();
  267 |         console.log("✅ UPI button selected");
  268 |       } else {
  269 |         console.log("❌ UPI button not visible");
  270 |       }
  271 | 
  272 |       // -------- CLICK CONTINUE --------
  273 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  274 |       await page
  275 |         .locator(
  276 |           '//*[@id="psgn-form"]/form/div/div[1]/p-sidebar/div/div/div[2]/button',
  277 |         )
  278 |         .click();
  279 | 
  280 |       // -------- WAIT FOR PAGE TRANSITION --------
  281 | 
  282 |       await page.waitForLoadState("domcontentloaded");
  283 | 
  284 |       await page.waitForTimeout(5000);
  285 | 
  286 |       // // -------- CAPTCHA HANDLING (DELAY-AWARE) --------
  287 | 
  288 |       // console.log("⏳ Waiting to see if CAPTCHA appears...");
  289 | 
  290 |       // // Wait for either CAPTCHA OR next page
  291 |       // let captchaAppeared = false;
  292 | 
  293 |       // try {
  294 |       //   await Promise.race([
  295 |       //     (async () => {
  296 |       //       const captcha = page.locator("#captcha");
  297 |       //       await captcha.waitFor({ state: "visible", timeout: 55000 });
  298 |       //       captchaAppeared = true;
  299 |       //     })(),
  300 | 
  301 |       //     page.waitForNavigation({ timeout: 55000 }),
  302 |       //   ]);
  303 |       // } catch {
  304 |       //   console.log("⚠️ Neither CAPTCHA nor navigation detected");
  305 |       // }
  306 | 
  307 |       // // ---- HANDLE CASES ----
  308 | 
  309 |       // if (captchaAppeared) {
  310 |       //   console.log("⚠️ CAPTCHA detected");
  311 |       //   console.log("👉 Solve it FAST (15-25 sec)");
  312 | 
  313 |       //   // Wait for user to solve it
  314 |       //   try {
  315 |       //     await page.waitForNavigation({ timeout: 25000 });
  316 |       //   } catch {
  317 |       //     console.log("⚠️ Navigation not detected after CAPTCHA");
  318 |       //   }
  319 | 
  320 |       //   console.log("✅ CAPTCHA handled");
  321 |       // } else {
  322 |       //   console.log("✅ No CAPTCHA, moved to next step");
  323 |       // }
  324 |       // -------- CAPTCHA HANDLING FROM TERMINAL --------
  325 | 
  326 |       const captchaField = page.locator("#captcha");
  327 | 
  328 |       if (await captchaField.isVisible().catch(() => false)) {
  329 |         console.log("⚠️ CAPTCHA detected");
  330 |         console.log("👉 Look at browser and enter CAPTCHA in terminal");
  331 | 
  332 |         const captchaValue = askCaptchaFromTerminal();
  333 | 
  334 |         if (!captchaValue) {
> 335 |           throw new Error("❌ CAPTCHA not entered");
      |                 ^ Error: ❌ CAPTCHA not entered
  336 |         }
  337 | 
  338 |         await captchaField.fill(captchaValue);
  339 | 
  340 |         console.log("✅ CAPTCHA filled from terminal");
  341 |       }
  342 | 
  343 |       // -------- CLICK CONTINUE --------
  344 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  345 |       await page.getByRole("button", { name: "Continue" }).click();
  346 | 
  347 |       // -------- WAIT FOR PAGE TRANSITION --------
  348 |       await page.waitForLoadState("domcontentloaded");
  349 |       await page.waitForTimeout(5000);
  350 |       console.log("Moved to Payment Page..");
  351 | 
  352 |       // -------- PAYMENT PAGE: SELECT IRCTC iPay --------
  353 |       const irctcIPayOption = page.locator('//*[@id="pay-type"]/span/div[1]');
  354 |       await irctcIPayOption.waitFor({ state: "visible", timeout: 25000 });
  355 |       await irctcIPayOption.click();
  356 |       console.log("✅ IRCTC iPay selected");
  357 | 
  358 |       // -------- CLICK CONTINUE AFTER PAYMENT OPTION --------
  359 |       const paymentContinueBtn = page.locator(
  360 |         '//*[@id="psgn-form"]/div[1]/div[1]/app-payment/div[1]/div/form/p-sidebar[2]/div/div/div[2]/button',
  361 |       );
  362 |       await paymentContinueBtn.waitFor({ state: "visible", timeout: 15000 });
  363 |       await paymentContinueBtn.click();
  364 |       console.log("✅ Payment continue clicked");
  365 | 
  366 |       // -------- CLICK IRCTC PAYMENT CARD --------
  367 |       const irctcCard = page
  368 |         .locator("div")
  369 |         .filter({
  370 |           hasText:
  371 |             /Credit\s*&\s*Debit Cards\/Net Banking\s*\/Autopay\/UPI\s*\(Powered by IRCTC\)/i,
  372 |         })
  373 |         .first();
  374 | 
  375 |       await irctcCard.waitFor({ state: "visible", timeout: 20000 });
  376 |       await irctcCard.click({ force: true });
  377 | 
  378 |       console.log("✅ IRCTC payment card clicked");
  379 | 
  380 |       // -------- CLICK PAY & BOOK --------
  381 |       const payAndBookBtn = page.getByRole("button", { name: /Pay & Book/i });
  382 |       await payAndBookBtn.waitFor({ state: "visible", timeout: 15000 });
  383 |       await payAndBookBtn.click();
  384 |       console.log("✅ Pay & Book clicked");
  385 | 
  386 |       // -------- WAIT FOR PAGE TRANSITION --------
  387 |       await page.waitForLoadState("domcontentloaded");
  388 |       await page.waitForTimeout(5000);
  389 |       console.log("Final Payment Page..");
  390 | 
  391 |       // -------- SELECT PHONEPE OPTION --------
  392 |       await page.waitForLoadState("domcontentloaded");
  393 |       await page.waitForTimeout(3000);
  394 | 
  395 |       const phonePeOption = page.getByText("Paytm", { exact: false }).first();
  396 | 
  397 |       await phonePeOption.waitFor({ state: "visible", timeout: 20000 });
  398 |       await phonePeOption.click({ force: true });
  399 | 
  400 |       console.log("✅ Paytm option selected");
  401 | 
  402 |       // -------- CLICK PAY BUTTON --------
  403 |       const payBtn = page.getByRole("button", { name: /^Pay$/i });
  404 | 
  405 |       await payBtn.waitFor({ state: "visible", timeout: 20000 });
  406 |       await payBtn.click({ force: true });
  407 | 
  408 |       console.log("✅ Pay button clicked");
  409 | 
  410 |       break;
  411 |     }
  412 |   }
  413 | });
  414 | 
  415 | // Excercise of test.only by uncommenting below code and commenting above test block
  416 | 
  417 | // test.only("IRCTC Full Login Flow (Mobile View)1", async ({
  418 | //   page,
  419 | // }, testInfo) => {
  420 | //   // -------- OPEN WEBSITE --------
  421 | //   await page.goto("https://www.irctc.co.in/nget/train-search", {
  422 | //     waitUntil: "domcontentloaded",
  423 | //     timeout: 60000,
  424 | //   });
  425 | 
  426 | //   await page.waitForTimeout(5000);
  427 | // });
  428 | 
  429 | // Excercise of test.skip by uncommenting below code and commenting above test block
  430 | 
  431 | // test.skip("IRCTC Full Login Flow (Mobile View)1", async ({
  432 | //   page,
  433 | // }, testInfo) => {
  434 | //   // -------- OPEN WEBSITE --------
  435 | //   await page.goto("https://www.irctc.co.in/nget/train-search", {
```