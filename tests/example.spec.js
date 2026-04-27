import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import fs from "fs";
import { spawnSync } from "child_process";

dotenv.config();

test.setTimeout(300000);

// test.describe.configure({ mode: "parallel" }); Excercise of test.describe.parallel by uncommenting above line and commenting below test block
// test.describe.configure({ mode: "serial" }); Excercise of test.describe.serial by uncommenting above line and commenting below test block

// function askCaptchaFromTerminal() {
//   const result = spawnSync(
//     "powershell.exe",
//     [
//       "-NoProfile",
//       "-Command",
//       "$input = Read-Host 'Enter CAPTCHA'; Write-Output $input",
//     ],
//     {
//       encoding: "utf-8",
//       stdio: "inherit",
//     },
//   );

//   return result.stdout ? result.stdout.trim() : "";
// }

test("IRCTC Full Login Flow (Mobile View)", async ({ page }, testInfo) => {
  // -------- OPEN WEBSITE --------
  await page.goto("https://www.irctc.co.in/nget/train-search", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await page.waitForTimeout(5000);

  // -------- CLOSE INITIAL POPUP --------
  const okBtn = page.locator('button:has-text("OK")');
  if (await okBtn.isVisible().catch(() => false)) {
    await okBtn.click();
  }

  // Activate UI
  await page.mouse.click(100, 100);

  // -------- OPEN MENU (MOBILE) --------
  const menuBtn = page.locator(
    '//div[@class="h_menu_drop_button moblogo hidden-sm"]//i[@class="fa fa-align-justify"]',
  );

  if (await menuBtn.isVisible().catch(() => false)) {
    await menuBtn.click({ force: true });
    await page.waitForTimeout(4000 + Math.random() * 3000);
  }

  // -------- CLICK LOGIN --------
  const loginBtn = page.locator('//button[@class="search_btn"]').first();

  if (await loginBtn.isVisible().catch(() => false)) {
    await loginBtn.click({ force: true });
  } else {
    await page
      .locator('//a[@aria-label="Click here to Login in application"]')
      .click({ force: true });
  }

  await page.waitForTimeout(3000);

  // -------- WAIT FOR LOGIN FORM --------
  await page.waitForSelector('input[placeholder="User Name"]', {
    timeout: 15000,
  });

  // -------- GET CREDENTIALS --------
  const user = process.env.IRCTC_USERNAME;
  const pass = process.env.IRCTC_PASSWORD;

  // -------- ENTER USERNAME & PASSWORD --------
  await page.getByPlaceholder("User Name").fill(user);
  await page.getByPlaceholder("Password").fill(pass);

  // -------- CLICK SIGN IN --------
  await page.getByRole("button", { name: /sign in/i }).click();

  await page.waitForTimeout(5000);

  // -------- VALIDATE LOGIN --------
  const errorPopup = page.locator("text=Unable to Process Request");

  if (await errorPopup.isVisible().catch(() => false)) {
    console.log("❌ Login failed (IRCTC blocking you to login)");

    return;
  }

  console.log("✅ Login flow completed successfully");

  // -------- TRAIN SEARCH --------

  // From Station
  const fromStation = page.locator(
    "//input[@aria-label='Enter From station. Input is Mandatory.']",
  );
  await fromStation.fill("BERHAMPORE CRT - BPC (Howrah / Kolkata)");
  await page.waitForTimeout(4000 + Math.random() * 3000);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");

  // To Station
  const toStation = page.locator(
    "//input[@aria-label='Enter To station. Input is Mandatory.']",
  );
  await toStation.fill("SEALDAH - SDAH (Howrah / Kolkata)");
  await page.waitForTimeout(4000 + Math.random() * 3000);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  console.log("✅ Journey details filled");
  // Click Date Field
  await page.locator('//*[@id="jDate"]/span/input').click();

  // Select Date (30)
  await page
    .locator('//*[@id="jDate"]/span/div/div/div[2]/table/tbody/tr[5]/td[5]/a')
    .click();

  // -------- SELECT CLASS --------

  // Click "All Classes" dropdown
  await page.locator('//*[@id="journeyClass"]/div').click();

  // Wait for dropdown options to load
  await page.waitForTimeout(4000 + Math.random() * 3000);

  // Select "Sleeper (SL)"
  await page
    .locator('//*[@id="journeyClass"]/div/div[4]/div/ul/p-dropdownitem[12]/li')
    .click();

  console.log("✅ Train class selected");
  // Click Search Button
  await page
    .locator(
      '//*[@id="divMain"]/div/app-main-page/div/div/div[1]/div[2]/div[1]/app-jp-input/div/form/div[6]/div/button',
    )
    .click();

  await page.waitForTimeout(5000);

  // Wait for results to load
  await page.waitForTimeout(5000);

  // -------- FIND TRAIN NO 53178 --------

  // Locate all train rows
  const trains = page.locator("app-train-list app-train-avl-enq");

  // Loop through trains
  const count = await trains.count();

  for (let i = 0; i < count; i++) {
    const trainRow = trains.nth(i);

    const trainText = await trainRow.textContent();

    if (trainText.includes("53178")) {
      console.log("✅ Train 53178 found");

      await page.waitForTimeout(4000 + Math.random() * 3000);

      // -------- CLICK REFRESH --------
      await trainRow
        .locator("text=Refresh")
        .click()
        .catch(async () => {
          // fallback to your xpath if text fails
          await page
            .locator(
              '//*[@id="divMain"]/div/app-train-list/div[4]/div[2]/div[3]/div[5]/div[3]/div[1]/app-train-avl-enq/div[1]/div[5]/div[1]/table/tr/td/div/div[2]',
            )
            .click();
        });

      await page.waitForTimeout(4000 + Math.random() * 3000);

      // -------- CLICK DATE (Thu, 30 Apr) --------
      await page
        .locator("strong", { hasText: "Thu, 30 Apr" })
        .click()
        .catch(async () => {
          await page
            .locator(
              '//*[@id="divMain"]/div/app-train-list/div[4]/div[2]/div[3]/div[5]/div[3]/div[1]/app-train-avl-enq/div[1]/div[7]/div[1]/div[3]/table/tr/td[2]/div/div[2]',
            )
            .click();
        });
      console.log("✅ Journey date refreshed and selected");
      await page.waitForTimeout(4000 + Math.random() * 3000);

      // -------- CLICK BOOK NOW --------
      await page.waitForTimeout(4000 + Math.random() * 3000);

      await page
        .locator(
          '//*[@id="divMain"]/div/app-train-list/div[4]/div[2]/div[3]/div[5]/div[3]/div[1]/app-train-avl-enq/div[2]/div/span/span[1]/button[1]',
        )
        .click();

      await page.waitForTimeout(3000);

      // Wait for next page to load
      await page.waitForTimeout(5000);

      // -------- NAME --------
      await page.waitForTimeout(4000 + Math.random() * 3000);
      await page
        .locator(
          '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[1]/p-autocomplete/span/input',
        )
        .fill("Anik mitra");

      // -------- AGE --------
      await page.waitForTimeout(4000 + Math.random() * 3000);
      await page
        .locator(
          '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[2]/input',
        )
        .fill("27");

      // -------- GENDER --------
      await page.waitForTimeout(4000 + Math.random() * 3000);
      await page
        .locator(
          '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[3]/select',
        )
        .selectOption({ label: "Male" });

      console.log("✅ Passenger details filled");
      // -------- BERTH PREFERENCE --------
      await page.waitForTimeout(4000 + Math.random() * 3000);
      await page
        .locator(
          '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/div[1]/select',
        )
        .selectOption({ label: "Side Lower" });

      console.log("✅ Berth preference selected");
      // -------- CONTACT DETAILS (MOBILE NUMBER) --------
      await page.waitForTimeout(4000 + Math.random() * 3000);

      const mobileField = page.locator('//*[@id="mobileNumber"]');

      if (await mobileField.isVisible().catch(() => false)) {
        await mobileField.fill("7001592584");
      }
      console.log("✅ Mobile number filled");

      // -------- SELECT RADIO BUTTON --------
      await page.waitForTimeout(2000 + Math.random() * 2000);

      const radioBtn = page.locator('//*[@id="2"]/div/div[2]/span');

      if (await radioBtn.isVisible().catch(() => false)) {
        await radioBtn.click();
        console.log("✅ UPI button selected");
      } else {
        console.log("❌ UPI button not visible");
      }

      // -------- CLICK CONTINUE --------
      await page.waitForTimeout(4000 + Math.random() * 3000);
      await page
        .locator(
          '//*[@id="psgn-form"]/form/div/div[1]/p-sidebar/div/div/div[2]/button',
        )
        .click();

      // -------- WAIT FOR PAGE TRANSITION --------

      await page.waitForLoadState("domcontentloaded");

      await page.waitForTimeout(5000);

      // -------- CAPTCHA HANDLING (Browser input) --------

      console.log("⏳ Waiting to see if CAPTCHA appears...");

      // Wait for either CAPTCHA OR next page
      let captchaAppeared = false;

      try {
        await Promise.race([
          (async () => {
            const captcha = page.locator("#captcha");
            await captcha.waitFor({ state: "visible", timeout: 55000 });
            captchaAppeared = true;
          })(),

          page.waitForNavigation({ timeout: 55000 }),
        ]);
      } catch {
        console.log("⚠️ Neither CAPTCHA nor navigation detected");
      }

      // ---- HANDLE CASES ----

      if (captchaAppeared) {
        console.log("⚠️ CAPTCHA detected");
        console.log("👉 Solve it FAST (15-25 sec)");

        // Wait for user to solve it
        try {
          await page.waitForNavigation({ timeout: 25000 });
        } catch {
          console.log("⚠️ Navigation not detected after CAPTCHA");
        }

        console.log("✅ CAPTCHA handled");
      } else {
        console.log("✅ No CAPTCHA, moved to next step");
      }

      // // -------- CAPTCHA HANDLING FROM TERMINAL --------

      // const captchaField = page.locator("#captcha");

      // if (await captchaField.isVisible().catch(() => false)) {
      //   console.log("⚠️ CAPTCHA detected");
      //   console.log("👉 Type CAPTCHA in terminal and press ENTER");

      //   const captchaValue = askCaptchaFromTerminal();

      //   if (!captchaValue) {
      //     throw new Error("❌ CAPTCHA not entered");
      //   }

      //   await captchaField.fill(captchaValue);

      //   console.log("✅ CAPTCHA filled from terminal");
      // }

      // -------- CLICK CONTINUE --------
      await page.waitForTimeout(4000 + Math.random() * 3000);
      await page.getByRole("button", { name: "Continue" }).click();

      // -------- WAIT FOR PAGE TRANSITION --------
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(5000);
      console.log("Moved to Payment Page..");

      // -------- PAYMENT PAGE: SELECT IRCTC iPay --------
      const irctcIPayOption = page.locator('//*[@id="pay-type"]/span/div[1]');
      await irctcIPayOption.waitFor({ state: "visible", timeout: 25000 });
      await irctcIPayOption.click();
      console.log("✅ IRCTC iPay selected");

      // -------- CLICK CONTINUE AFTER PAYMENT OPTION --------
      const paymentContinueBtn = page.locator(
        '//*[@id="psgn-form"]/div[1]/div[1]/app-payment/div[1]/div/form/p-sidebar[2]/div/div/div[2]/button',
      );
      await paymentContinueBtn.waitFor({ state: "visible", timeout: 15000 });
      await paymentContinueBtn.click();
      console.log("✅ Payment continue clicked");

      // -------- CLICK IRCTC PAYMENT CARD --------
      const irctcCard = page
        .locator("div")
        .filter({
          hasText:
            /Credit\s*&\s*Debit Cards\/Net Banking\s*\/Autopay\/UPI\s*\(Powered by IRCTC\)/i,
        })
        .first();

      await irctcCard.waitFor({ state: "visible", timeout: 20000 });
      await irctcCard.click({ force: true });

      console.log("✅ IRCTC payment card clicked");

      // -------- CLICK PAY & BOOK --------
      const payAndBookBtn = page.getByRole("button", { name: /Pay & Book/i });
      await payAndBookBtn.waitFor({ state: "visible", timeout: 15000 });
      await payAndBookBtn.click();
      console.log("✅ Pay & Book clicked");

      // -------- WAIT FOR PAGE TRANSITION --------
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(5000);
      console.log("Final Payment Page..");

      // -------- SELECT PHONEPE OPTION --------
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(3000);

      const phonePeOption = page.getByText("Paytm", { exact: false }).first();

      await phonePeOption.waitFor({ state: "visible", timeout: 20000 });
      await phonePeOption.click({ force: true });

      console.log("✅ Paytm option selected");

      // -------- CLICK PAY BUTTON --------
      const payBtn = page.getByRole("button", { name: /^Pay$/i });

      await payBtn.waitFor({ state: "visible", timeout: 20000 });
      await payBtn.click({ force: true });

      console.log("✅ Pay button clicked");

      break;
    }
  }
});

// Excercise of test.only by uncommenting below code and commenting above test block

// test.only("IRCTC Full Login Flow (Mobile View)1", async ({
//   page,
// }, testInfo) => {
//   // -------- OPEN WEBSITE --------
//   await page.goto("https://www.irctc.co.in/nget/train-search", {
//     waitUntil: "domcontentloaded",
//     timeout: 60000,
//   });

//   await page.waitForTimeout(5000);
// });

// Excercise of test.skip by uncommenting below code and commenting above test block

// test.skip("IRCTC Full Login Flow (Mobile View)1", async ({
//   page,
// }, testInfo) => {
//   // -------- OPEN WEBSITE --------
//   await page.goto("https://www.irctc.co.in/nget/train-search", {
//     waitUntil: "domcontentloaded",
//     timeout: 60000,
//   });

//   await page.waitForTimeout(5000);
// });
