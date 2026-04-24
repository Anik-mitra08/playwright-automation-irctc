# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> IRCTC Full Login Flow (Mobile View)
- Location: tests\example.spec.js:14:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 25000ms exceeded.
Call log:
  - waiting for locator('//*[@id="pay-type"]/span/div[1]') to be visible

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
          - button "Continue" [active] [ref=e145] [cursor=pointer]
  - generic [ref=e146]:                             
```

# Test source

```ts
  249 |         await radioBtn.click();
  250 |         console.log("✅ UPI button selected");
  251 |       } else {
  252 |         console.log("❌ UPI button not visible");
  253 |       }
  254 | 
  255 |       // -------- CLICK CONTINUE --------
  256 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  257 |       await page
  258 |         .locator(
  259 |           '//*[@id="psgn-form"]/form/div/div[1]/p-sidebar/div/div/div[2]/button',
  260 |         )
  261 |         .click();
  262 | 
  263 |       // -------- WAIT FOR PAGE TRANSITION --------
  264 | 
  265 |       await page.waitForLoadState("domcontentloaded");
  266 | 
  267 |       await page.waitForTimeout(5000);
  268 | 
  269 |       // // -------- CAPTCHA HANDLING (DELAY-AWARE) --------
  270 | 
  271 |       // console.log("⏳ Waiting to see if CAPTCHA appears...");
  272 | 
  273 |       // // Wait for either CAPTCHA OR next page
  274 |       // let captchaAppeared = false;
  275 | 
  276 |       // try {
  277 |       //   await Promise.race([
  278 |       //     (async () => {
  279 |       //       const captcha = page.locator("#captcha");
  280 |       //       await captcha.waitFor({ state: "visible", timeout: 55000 });
  281 |       //       captchaAppeared = true;
  282 |       //     })(),
  283 | 
  284 |       //     page.waitForNavigation({ timeout: 55000 }),
  285 |       //   ]);
  286 |       // } catch {
  287 |       //   console.log("⚠️ Neither CAPTCHA nor navigation detected");
  288 |       // }
  289 | 
  290 |       // // ---- HANDLE CASES ----
  291 | 
  292 |       // if (captchaAppeared) {
  293 |       //   console.log("⚠️ CAPTCHA detected");
  294 |       //   console.log("👉 Solve it FAST (15-25 sec)");
  295 | 
  296 |       //   // Wait for user to solve it
  297 |       //   try {
  298 |       //     await page.waitForNavigation({ timeout: 25000 });
  299 |       //   } catch {
  300 |       //     console.log("⚠️ Navigation not detected after CAPTCHA");
  301 |       //   }
  302 | 
  303 |       //   console.log("✅ CAPTCHA handled");
  304 |       // } else {
  305 |       //   console.log("✅ No CAPTCHA, moved to next step");
  306 |       // }
  307 |       // -------- CAPTCHA HANDLING FROM TERMINAL --------
  308 | 
  309 |       let captchaHandled = false;
  310 | 
  311 |       async function handleCaptcha(page) {
  312 |         const captchaField = page.locator("#captcha");
  313 | 
  314 |         if (
  315 |           !captchaHandled &&
  316 |           (await captchaField.isVisible().catch(() => false))
  317 |         ) {
  318 |           captchaHandled = true;
  319 | 
  320 |           console.log("⚠️ CAPTCHA detected");
  321 |           console.log("👉 Solve from terminal");
  322 | 
  323 |           // HARD STOP execution (very important)
  324 |           await page.pause();
  325 | 
  326 |           const captchaValue = prompt("Enter CAPTCHA and press ENTER: ");
  327 | 
  328 |           if (!captchaValue) {
  329 |             throw new Error("❌ CAPTCHA not entered");
  330 |           }
  331 | 
  332 |           await captchaField.fill(captchaValue.trim());
  333 | 
  334 |           console.log("✅ CAPTCHA filled");
  335 |         }
  336 |       }
  337 | 
  338 |       // -------- CLICK CONTINUE --------
  339 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  340 |       await page.getByRole("button", { name: "Continue" }).click();
  341 | 
  342 |       // -------- WAIT FOR PAGE TRANSITION --------
  343 |       await page.waitForLoadState("domcontentloaded");
  344 |       await page.waitForTimeout(5000);
  345 |       console.log("Moved to Payment Page..");
  346 | 
  347 |       // -------- PAYMENT PAGE: SELECT IRCTC iPay --------
  348 |       const irctcIPayOption = page.locator('//*[@id="pay-type"]/span/div[1]');
> 349 |       await irctcIPayOption.waitFor({ state: "visible", timeout: 25000 });
      |                             ^ TimeoutError: locator.waitFor: Timeout 25000ms exceeded.
  350 |       await irctcIPayOption.click();
  351 |       console.log("✅ IRCTC iPay selected");
  352 | 
  353 |       // -------- CLICK CONTINUE AFTER PAYMENT OPTION --------
  354 |       const paymentContinueBtn = page.locator(
  355 |         '//*[@id="psgn-form"]/div[1]/div[1]/app-payment/div[1]/div/form/p-sidebar[2]/div/div/div[2]/button',
  356 |       );
  357 |       await paymentContinueBtn.waitFor({ state: "visible", timeout: 15000 });
  358 |       await paymentContinueBtn.click();
  359 |       console.log("✅ Payment continue clicked");
  360 | 
  361 |       // -------- CLICK IRCTC PAYMENT CARD --------
  362 |       const irctcCard = page
  363 |         .locator("div")
  364 |         .filter({
  365 |           hasText:
  366 |             /Credit\s*&\s*Debit Cards\/Net Banking\s*\/Autopay\/UPI\s*\(Powered by IRCTC\)/i,
  367 |         })
  368 |         .first();
  369 | 
  370 |       await irctcCard.waitFor({ state: "visible", timeout: 20000 });
  371 |       await irctcCard.click({ force: true });
  372 | 
  373 |       console.log("✅ IRCTC payment card clicked");
  374 | 
  375 |       // -------- CLICK PAY & BOOK --------
  376 |       const payAndBookBtn = page.getByRole("button", { name: /Pay & Book/i });
  377 |       await payAndBookBtn.waitFor({ state: "visible", timeout: 15000 });
  378 |       await payAndBookBtn.click();
  379 |       console.log("✅ Pay & Book clicked");
  380 | 
  381 |       // -------- WAIT FOR PAGE TRANSITION --------
  382 |       await page.waitForLoadState("domcontentloaded");
  383 |       await page.waitForTimeout(5000);
  384 |       console.log("Final Payment Page..");
  385 | 
  386 |       // -------- SELECT PHONEPE OPTION --------
  387 |       await page.waitForLoadState("domcontentloaded");
  388 |       await page.waitForTimeout(3000);
  389 | 
  390 |       const phonePeOption = page.getByText("Paytm", { exact: false }).first();
  391 | 
  392 |       await phonePeOption.waitFor({ state: "visible", timeout: 20000 });
  393 |       await phonePeOption.click({ force: true });
  394 | 
  395 |       console.log("✅ Paytm option selected");
  396 | 
  397 |       // -------- CLICK PAY BUTTON --------
  398 |       const payBtn = page.getByRole("button", { name: /^Pay$/i });
  399 | 
  400 |       await payBtn.waitFor({ state: "visible", timeout: 20000 });
  401 |       await payBtn.click({ force: true });
  402 | 
  403 |       console.log("✅ Pay button clicked");
  404 | 
  405 |       break;
  406 |     }
  407 |   }
  408 | });
  409 | 
  410 | // Excercise of test.only by uncommenting below code and commenting above test block
  411 | 
  412 | // test.only("IRCTC Full Login Flow (Mobile View)1", async ({
  413 | //   page,
  414 | // }, testInfo) => {
  415 | //   // -------- OPEN WEBSITE --------
  416 | //   await page.goto("https://www.irctc.co.in/nget/train-search", {
  417 | //     waitUntil: "domcontentloaded",
  418 | //     timeout: 60000,
  419 | //   });
  420 | 
  421 | //   await page.waitForTimeout(5000);
  422 | // });
  423 | 
  424 | // Excercise of test.skip by uncommenting below code and commenting above test block
  425 | 
  426 | // test.skip("IRCTC Full Login Flow (Mobile View)1", async ({
  427 | //   page,
  428 | // }, testInfo) => {
  429 | //   // -------- OPEN WEBSITE --------
  430 | //   await page.goto("https://www.irctc.co.in/nget/train-search", {
  431 | //     waitUntil: "domcontentloaded",
  432 | //     timeout: 60000,
  433 | //   });
  434 | 
  435 | //   await page.waitForTimeout(5000);
  436 | // });
  437 | 
```