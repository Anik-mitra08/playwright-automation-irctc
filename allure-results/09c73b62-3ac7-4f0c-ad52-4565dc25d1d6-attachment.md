# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> IRCTC Full Login Flow (Mobile View)
- Location: tests\example.spec.js:12:5

# Error details

```
TypeError: page.locator(...).click(...).first is not a function
```

```
Error: locator.click: Error: strict mode violation: locator('strong').filter({ hasText: 'Thu, 30 Apr' }) resolved to 2 elements:
    1) <strong _ngcontent-bhn-c127="">…</strong> aka getByText('BERHAMPORE CRT SEALDAH | Thu, 30 Apr')
    2) <strong _ngcontent-bhn-c126="">Thu, 30 Apr</strong> aka getByRole('strong').filter({ hasText: 'Thu, 30 Apr' })

Call log:
  - waiting for locator('strong').filter({ hasText: 'Thu, 30 Apr' })

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
    - generic [ref=e20]:
      - generic [ref=e21]:
        - generic [ref=e22]: 
        - strong [ref=e23]: BERHAMPORE CRT TO SEALDAH
        - text: "| Thu, 30 Apr"
      - generic [ref=e25]: 
    - text:         
    - complementary [ref=e26]:
      - text: 
      - generic [ref=e27]:
        - generic [ref=e30]:
          - generic [ref=e32]:
            - generic [ref=e33]:
              - generic [ref=e34]:
                - generic [ref=e36]: 
                - searchbox "FROM *" [ref=e39]: BERHAMPORE CRT - BPC (Howrah / Kolkata)
                - generic: From
                - generic:
                  - text: 
                  - generic [ref=e41] [cursor=pointer]: 
              - generic [ref=e42]:
                - generic [ref=e44]: 
                - searchbox "TO *" [ref=e47]: SEALDAH - SDAH (Howrah / Kolkata)
                - generic: To
              - generic [ref=e48]:
                - generic [ref=e50]: 
                - textbox "DD/MM/YYYY *" [ref=e53]: 30/04/2026
                - generic: Date
              - generic [ref=e54]:
                - generic [ref=e56]: 
                - generic [ref=e58] [cursor=pointer]:
                  - generic [ref=e59]:
                    - listbox "Sleeper (SL)"
                  - generic [ref=e61]: Sleeper (SL)
                  - button "" [ref=e62]:
                    - generic [ref=e63]: 
                - generic: Class
              - generic [ref=e64]:
                - generic [ref=e66]: 
                - generic [ref=e68] [cursor=pointer]:
                  - generic [ref=e69]:
                    - listbox "GENERAL"
                  - generic [ref=e71]: GENERAL
                  - button "" [ref=e72]:
                    - generic [ref=e73]: 
                - generic: Quota
            - generic [ref=e74]:
              - generic [ref=e75]:
                - checkbox "Check to fetch trains runs on other days than you are searching for." [ref=e76]
                - generic [ref=e77] [cursor=pointer]: Flexible With Date
              - generic [ref=e78]:
                - checkbox "Check for DIVYAANG Concession Booking." [ref=e79]
                - generic [ref=e80] [cursor=pointer]: Person With Disability Concession
              - generic [ref=e81]:
                - checkbox "Check for pass Booking" [ref=e82]
                - generic [ref=e83] [cursor=pointer]: Railway Pass Concession
          - button "Search Trains" [ref=e85] [cursor=pointer]
        - generic [ref=e87]:
          - generic [ref=e88]: 
          - strong [ref=e90]: Modify Search
    - complementary [ref=e91]:
      - text: 
      - generic [ref=e92]:
        - generic [ref=e93]:
          - generic [ref=e94]:
            - generic [ref=e95]: 
            - strong [ref=e96]: FILTERS
          - generic [ref=e98]:
            - generic [ref=e99]:
              - strong:
                - generic [ref=e100]: Refine Results
                - generic [ref=e101] [cursor=pointer]: Reset Filters
            - generic [ref=e103]:
              - generic [ref=e104]:
                - generic [ref=e106]:
                  - text: JOURNEY CLASS
                  - generic [ref=e107] [cursor=pointer]: Select All
                - tab "" [expanded] [ref=e108] [cursor=pointer]:
                  - generic [ref=e109]: 
              - region "JOURNEY CLASS Select All " [ref=e110]:
                - table [ref=e112]:
                  - row "Second Sitting (2S) Second Sitting (2S) AC 3 Tier (3A) AC 3 Tier (3A) AC Chair car (CC) AC Chair car (CC) Sleeper (SL) Sleeper (SL)" [ref=e113]:
                    - cell "Second Sitting (2S) Second Sitting (2S)" [ref=e114]:
                      - checkbox "Second Sitting (2S) Second Sitting (2S)" [ref=e115]
                      - generic [ref=e116] [cursor=pointer]: Second Sitting (2S)
                    - cell "AC 3 Tier (3A) AC 3 Tier (3A)" [ref=e117]:
                      - checkbox "AC 3 Tier (3A) AC 3 Tier (3A)" [ref=e118]
                      - generic [ref=e119] [cursor=pointer]: AC 3 Tier (3A)
                    - cell "AC Chair car (CC) AC Chair car (CC)" [ref=e120]:
                      - checkbox "AC Chair car (CC) AC Chair car (CC)" [ref=e121]
                      - generic [ref=e122] [cursor=pointer]: AC Chair car (CC)
                    - cell "Sleeper (SL) Sleeper (SL)" [ref=e123]:
                      - checkbox "Sleeper (SL) Sleeper (SL)" [checked] [ref=e124]
                      - generic [ref=e125] [cursor=pointer]: Sleeper (SL)
            - generic [ref=e127]:
              - generic [ref=e128]:
                - generic [ref=e130]:
                  - text: TRAIN TYPE
                  - generic [ref=e131] [cursor=pointer]: Select All
                - tab "" [expanded] [ref=e132] [cursor=pointer]:
                  - generic [ref=e133]: 
              - region "TRAIN TYPE Select All " [ref=e134]:
                - table [ref=e136]:
                  - row "OTHER OTHER SPECIAL SPECIAL" [ref=e137]:
                    - cell "OTHER OTHER" [ref=e138]:
                      - checkbox "OTHER OTHER" [checked] [ref=e139]
                      - generic [ref=e140] [cursor=pointer]: OTHER
                    - cell "SPECIAL SPECIAL" [ref=e141]:
                      - checkbox "SPECIAL SPECIAL" [checked] [ref=e142]
                      - generic [ref=e143] [cursor=pointer]: SPECIAL
            - generic [ref=e145]:
              - generic [ref=e146]:
                - generic [ref=e148]:
                  - text: DEPARTURE TIME
                  - generic [ref=e149] [cursor=pointer]: Select All
                - tab "" [expanded] [ref=e150] [cursor=pointer]:
                  - generic [ref=e151]: 
              - region "DEPARTURE TIME Select All " [ref=e152]:
                - table [ref=e154]:
                  - row "00:00 - 06:00 Early Morning 06:00 - 12:00 Morning 12:00 - 18:00 Mid Day 18:00 - 24:00 Night" [ref=e155]:
                    - strong:
                      - cell "00:00 - 06:00 Early Morning" [ref=e156]:
                        - text: 00:00 - 06:00
                        - text: Early Morning
                      - cell "06:00 - 12:00 Morning" [ref=e157]:
                        - text: 06:00 - 12:00
                        - text: Morning
                      - cell "12:00 - 18:00 Mid Day" [ref=e158]:
                        - text: 12:00 - 18:00
                        - text: Mid Day
                      - cell "18:00 - 24:00 Night" [ref=e159]:
                        - text: 18:00 - 24:00
                        - text: Night
            - generic [ref=e166]:
              - generic [ref=e167]: 00:00 Hrs
              - generic [ref=e168]: 24:00 Hrs
            - generic [ref=e170]:
              - generic [ref=e171]:
                - generic [ref=e173]:
                  - text: ARRIVAL TIME
                  - generic [ref=e174] [cursor=pointer]: Select All
                - tab "" [expanded] [ref=e175] [cursor=pointer]:
                  - generic [ref=e176]: 
              - region "ARRIVAL TIME Select All " [ref=e177]:
                - table [ref=e179]:
                  - row "00:00 - 06:00 Early Morning 06:00 - 12:00 Morning 12:00 - 18:00 Mid Day 18:00 - 24:00 Night" [ref=e180]:
                    - strong:
                      - cell "00:00 - 06:00 Early Morning" [ref=e181]:
                        - text: 00:00 - 06:00
                        - text: Early Morning
                      - cell "06:00 - 12:00 Morning" [ref=e182]:
                        - text: 06:00 - 12:00
                        - text: Morning
                      - cell "12:00 - 18:00 Mid Day" [ref=e183]:
                        - text: 12:00 - 18:00
                        - text: Mid Day
                      - cell "18:00 - 24:00 Night" [ref=e184]:
                        - text: 18:00 - 24:00
                        - text: Night
            - generic [ref=e191]:
              - generic [ref=e192]: 00:00 Hrs
              - generic [ref=e193]: 24:00 Hrs
            - generic [ref=e195]:
              - generic [ref=e196]:
                - generic [ref=e198]:
                  - text: FROM STATIONS
                  - generic [ref=e199] [cursor=pointer]: Select All
                - tab "" [expanded] [ref=e200] [cursor=pointer]:
                  - generic [ref=e201]: 
              - region "FROM STATIONS Select All " [ref=e202]:
                - table [ref=e204]:
                  - row "BERHAMPORE CRT BERHAMPORE CRT" [ref=e205]:
                    - cell "BERHAMPORE CRT BERHAMPORE CRT" [ref=e206]:
                      - checkbox "BERHAMPORE CRT BERHAMPORE CRT" [checked] [ref=e207]
                      - generic [ref=e208] [cursor=pointer]: BERHAMPORE CRT
            - generic [ref=e210]:
              - generic [ref=e211]:
                - generic [ref=e213]:
                  - text: TO STATIONS
                  - generic [ref=e214] [cursor=pointer]: Select All
                - tab "" [expanded] [ref=e215] [cursor=pointer]:
                  - generic [ref=e216]: 
              - region "TO STATIONS Select All " [ref=e217]:
                - table [ref=e219]:
                  - row "KOLKATA KOLKATA SEALDAH SEALDAH" [ref=e220]:
                    - cell "KOLKATA KOLKATA" [ref=e221]:
                      - checkbox "KOLKATA KOLKATA" [checked] [ref=e222]
                      - generic [ref=e223] [cursor=pointer]: KOLKATA
                    - cell "SEALDAH SEALDAH" [ref=e224]:
                      - checkbox "SEALDAH SEALDAH" [checked] [ref=e225]
                      - generic [ref=e226] [cursor=pointer]: SEALDAH
        - strong [ref=e228]: APPLY FILTERS
    - generic [ref=e229]:
      - text:      
      - generic [ref=e233]:
        - text: 
        - generic:
          - button "Sort By" [ref=e235] [cursor=pointer]
          - generic [ref=e236]:
            - text:  
            - generic [ref=e237]: 
        - generic [ref=e239]:
          - generic [ref=e242]:
            - generic:
              - generic:
                - generic [ref=e243]:
                  - strong [ref=e246]: LGL SDAH PSGN (53178)
                  - strong [ref=e249]:
                    - generic [ref=e251] [cursor=pointer]: 
                - generic [ref=e253]:
                  - generic:
                    - generic [ref=e256]: 10:26
                    - generic [ref=e257]: 04:46
                    - generic [ref=e259]: 15:12
                  - generic [ref=e261]:
                    - generic [ref=e262]: BERHAMPORE CRT
                    - generic [ref=e263]: SEALDAH
                  - generic:
                    - generic [ref=e265]: Thu, 30 Apr
                    - generic [ref=e266]: MTWTFSS
                    - generic [ref=e268]: Thu, 30 Apr
                - generic [ref=e271]:
                  - generic [ref=e272]:
                    - tablist [ref=e275]:
                      - tab "SL" [expanded] [selected] [ref=e276]:
                        - strong [ref=e280] [cursor=pointer]: SL
                    - generic [ref=e282] [cursor=pointer]: 
                    - table [ref=e285]:
                      - row " Thu, 30 Apr WL20 Fri, 01 May WL7 Sat, 02 May RAC 15 Sun, 03 May WL16 Mon, 04 May WL11 Tue, 05 May RAC 20 " [ref=e286]:
                        - cell "" [ref=e287] [cursor=pointer]:
                          - generic [ref=e289]: 
                        - cell "Thu, 30 Apr WL20" [ref=e290] [cursor=pointer]:
                          - generic [ref=e291]:
                            - strong [ref=e293]: Thu, 30 Apr
                            - strong [ref=e295]: WL20
                        - cell "Fri, 01 May WL7" [ref=e296] [cursor=pointer]:
                          - generic [ref=e297]:
                            - strong [ref=e299]: Fri, 01 May
                            - strong [ref=e301]: WL7
                        - cell "Sat, 02 May RAC 15" [ref=e302] [cursor=pointer]:
                          - generic [ref=e303]:
                            - strong [ref=e305]: Sat, 02 May
                            - strong [ref=e307]: RAC 15
                        - cell "Sun, 03 May WL16" [ref=e308] [cursor=pointer]:
                          - generic [ref=e309]:
                            - strong [ref=e311]: Sun, 03 May
                            - strong [ref=e313]: WL16
                        - cell "Mon, 04 May WL11" [ref=e314] [cursor=pointer]:
                          - generic [ref=e315]:
                            - strong [ref=e317]: Mon, 04 May
                            - strong [ref=e319]: WL11
                        - cell "Tue, 05 May RAC 20" [ref=e320] [cursor=pointer]:
                          - generic [ref=e321]:
                            - strong [ref=e323]: Tue, 05 May
                            - strong [ref=e325]: RAC 20
                        - cell "" [ref=e326] [cursor=pointer]:
                          - generic [ref=e328]: 
                  - generic [ref=e330]:
                    - list
                    - list
                  - strong [ref=e333]:
                    - generic [ref=e334]:
                      - text: Please check NTES website or
                      - link "NTES app" [ref=e335] [cursor=pointer]:
                        - /url: https://play.google.com/store/apps/details?id=cris.icms.ntes
                      - text: for actual time before boarding
                  - text: 
              - generic [ref=e339]:
                - button "Book Now" [ref=e341] [cursor=pointer]
                - generic [ref=e342]:
                  - strong [ref=e343]: ₹ 105
                  - text: 
          - generic [ref=e344]:
            - generic:
              - generic:
                - generic [ref=e345]:
                  - strong [ref=e348]: LGL SDAH PASS (53172)
                  - strong [ref=e351]:
                    - generic [ref=e353] [cursor=pointer]: 
                - generic [ref=e355]:
                  - generic:
                    - generic [ref=e358]: 23:21
                    - generic [ref=e359]: 05:09
                    - generic [ref=e361]: 04:30
                  - generic [ref=e363]:
                    - generic [ref=e364]: BERHAMPORE CRT
                    - generic [ref=e365]: SEALDAH
                  - generic:
                    - generic [ref=e367]: Thu, 30 Apr
                    - generic [ref=e368]: MTWTFSS
                    - generic [ref=e370]: Fri, 01 May
                - table [ref=e373]:
                  - row "Sleeper (SL) Refresh " [ref=e374]:
                    - cell "Sleeper (SL) Refresh " [ref=e375]:
                      - generic [ref=e376]:
                        - strong [ref=e378]: Sleeper (SL)
                        - generic [ref=e379] [cursor=pointer]:
                          - text: Refresh
                          - generic [ref=e380]: 
                - strong [ref=e385]:
                  - generic [ref=e386]:
                    - text: Please check NTES website or
                    - link "NTES app" [ref=e387] [cursor=pointer]:
                      - /url: https://play.google.com/store/apps/details?id=cris.icms.ntes
                    - text: for actual time before boarding
              - generic [ref=e392]:
                - button "Book Now" [ref=e393] [cursor=pointer]
                - button "OTHER DATES" [ref=e394] [cursor=pointer]
  - generic [ref=e397]:                             
```

# Test source

```ts
  72  |   const errorPopup = page.locator("text=Unable to Process Request");
  73  | 
  74  |   if (await errorPopup.isVisible().catch(() => false)) {
  75  |     console.log("❌ Login failed (IRCTC blocking you to login)");
  76  | 
  77  |     return;
  78  |   }
  79  | 
  80  |   console.log("✅ Login flow completed successfully");
  81  | 
  82  |   // -------- TRAIN SEARCH --------
  83  | 
  84  |   // From Station
  85  |   const fromStation = page.locator(
  86  |     "//input[@aria-label='Enter From station. Input is Mandatory.']",
  87  |   );
  88  |   await fromStation.fill("BERHAMPORE CRT - BPC (Howrah / Kolkata)");
  89  |   await page.waitForTimeout(4000 + Math.random() * 3000);
  90  |   await page.keyboard.press("ArrowDown");
  91  |   await page.keyboard.press("Enter");
  92  | 
  93  |   // To Station
  94  |   const toStation = page.locator(
  95  |     "//input[@aria-label='Enter To station. Input is Mandatory.']",
  96  |   );
  97  |   await toStation.fill("SEALDAH - SDAH (Howrah / Kolkata)");
  98  |   await page.waitForTimeout(4000 + Math.random() * 3000);
  99  |   await page.keyboard.press("ArrowDown");
  100 |   await page.keyboard.press("Enter");
  101 |   console.log("✅ Journey details filled");
  102 |   // Click Date Field
  103 |   await page.locator('//*[@id="jDate"]/span/input').click();
  104 | 
  105 |   // Select Date (30)
  106 |   await page
  107 |     .locator('//*[@id="jDate"]/span/div/div/div[2]/table/tbody/tr[5]/td[5]/a')
  108 |     .click();
  109 | 
  110 |   // -------- SELECT CLASS --------
  111 | 
  112 |   // Click "All Classes" dropdown
  113 |   await page.locator('//*[@id="journeyClass"]/div').click();
  114 | 
  115 |   // Wait for dropdown options to load
  116 |   await page.waitForTimeout(4000 + Math.random() * 3000);
  117 | 
  118 |   // Select "Sleeper (SL)"
  119 |   await page
  120 |     .locator('//*[@id="journeyClass"]/div/div[4]/div/ul/p-dropdownitem[12]/li')
  121 |     .click();
  122 | 
  123 |   console.log("✅ Train class selected");
  124 |   // Click Search Button
  125 |   await page
  126 |     .locator(
  127 |       '//*[@id="divMain"]/div/app-main-page/div/div/div[1]/div[2]/div[1]/app-jp-input/div/form/div[6]/div/button',
  128 |     )
  129 |     .click();
  130 | 
  131 |   await page.waitForTimeout(5000);
  132 | 
  133 |   // Wait for results to load
  134 |   await page.waitForTimeout(5000);
  135 | 
  136 |   // -------- FIND TRAIN NO 53178 --------
  137 | 
  138 |   // Locate all train rows
  139 |   const trains = page.locator("app-train-list app-train-avl-enq");
  140 | 
  141 |   // Loop through trains
  142 |   const count = await trains.count();
  143 | 
  144 |   for (let i = 0; i < count; i++) {
  145 |     const trainRow = trains.nth(i);
  146 | 
  147 |     const trainText = await trainRow.textContent();
  148 | 
  149 |     if (trainText.includes("53178")) {
  150 |       console.log("✅ Train 53178 found");
  151 | 
  152 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  153 | 
  154 |       // -------- CLICK REFRESH --------
  155 |       await trainRow
  156 |         .locator("text=Refresh")
  157 |         .click()
  158 |         .catch(async () => {
  159 |           // fallback to your xpath if text fails
  160 |           await page
  161 |             .locator(
  162 |               '//*[@id="divMain"]/div/app-train-list/div[4]/div[2]/div[3]/div[5]/div[3]/div[1]/app-train-avl-enq/div[1]/div[5]/div[1]/table/tr/td/div/div[2]',
  163 |             )
  164 |             .click();
  165 |         });
  166 | 
  167 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  168 | 
  169 |       // -------- CLICK DATE (Thu, 30 Apr) --------
  170 |       await page
  171 |         .locator("strong", { hasText: "Thu, 30 Apr" })
> 172 |         .click()
      |          ^ Error: locator.click: Error: strict mode violation: locator('strong').filter({ hasText: 'Thu, 30 Apr' }) resolved to 2 elements:
  173 |         .first()
  174 |         .catch(async () => {
  175 |           await page
  176 |             .locator(
  177 |               '//*[@id="divMain"]/div/app-train-list/div[4]/div[2]/div[3]/div[5]/div[3]/div[1]/app-train-avl-enq/div[1]/div[7]/div[1]/div[3]/table/tr/td[2]/div/div[2]',
  178 |             )
  179 |             .click();
  180 |         });
  181 |       console.log("✅ Journey date refreshed and selected");
  182 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  183 | 
  184 |       // -------- CLICK BOOK NOW --------
  185 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  186 | 
  187 |       await page
  188 |         .locator(
  189 |           '//*[@id="divMain"]/div/app-train-list/div[4]/div[2]/div[3]/div[5]/div[3]/div[1]/app-train-avl-enq/div[2]/div/span/span[1]/button[1]',
  190 |         )
  191 |         .click();
  192 | 
  193 |       await page.waitForTimeout(3000);
  194 | 
  195 |       // Wait for next page to load
  196 |       await page.waitForTimeout(5000);
  197 | 
  198 |       // -------- NAME --------
  199 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  200 |       await page
  201 |         .locator(
  202 |           '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[1]/p-autocomplete/span/input',
  203 |         )
  204 |         .fill("Anik mitra");
  205 | 
  206 |       // -------- AGE --------
  207 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  208 |       await page
  209 |         .locator(
  210 |           '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[2]/input',
  211 |         )
  212 |         .fill("27");
  213 | 
  214 |       // -------- GENDER --------
  215 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  216 |       await page
  217 |         .locator(
  218 |           '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/span/div[3]/select',
  219 |         )
  220 |         .selectOption({ label: "Male" });
  221 | 
  222 |       console.log("✅ Passenger details filled");
  223 |       // -------- BERTH PREFERENCE --------
  224 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  225 |       await page
  226 |         .locator(
  227 |           '//*[@id="ui-panel-13-content"]/div/div[1]/div[2]/div/app-passenger/div/div[1]/div[1]/select',
  228 |         )
  229 |         .selectOption({ label: "Side Lower" });
  230 | 
  231 |       console.log("✅ Berth preference selected");
  232 |       // -------- CONTACT DETAILS (MOBILE NUMBER) --------
  233 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  234 | 
  235 |       const mobileField = page.locator('//*[@id="mobileNumber"]');
  236 | 
  237 |       if (await mobileField.isVisible().catch(() => false)) {
  238 |         await mobileField.fill("7001592584");
  239 |       }
  240 |       console.log("✅ Mobile number filled");
  241 | 
  242 |       // -------- SELECT RADIO BUTTON --------
  243 |       await page.waitForTimeout(2000 + Math.random() * 2000);
  244 | 
  245 |       const radioBtn = page.locator('//*[@id="2"]/div/div[2]/span');
  246 | 
  247 |       if (await radioBtn.isVisible().catch(() => false)) {
  248 |         await radioBtn.click();
  249 |         console.log("✅ UPI button selected");
  250 |       } else {
  251 |         console.log("❌ UPI button not visible");
  252 |       }
  253 | 
  254 |       // -------- CLICK CONTINUE --------
  255 |       await page.waitForTimeout(4000 + Math.random() * 3000);
  256 |       await page
  257 |         .locator(
  258 |           '//*[@id="psgn-form"]/form/div/div[1]/p-sidebar/div/div/div[2]/button',
  259 |         )
  260 |         .click();
  261 | 
  262 |       // -------- WAIT FOR PAGE TRANSITION --------
  263 | 
  264 |       await page.waitForLoadState("domcontentloaded");
  265 | 
  266 |       await page.waitForTimeout(5000);
  267 | 
  268 |       // -------- CAPTCHA HANDLING (DELAY-AWARE) --------
  269 | 
  270 |       console.log("⏳ Waiting to see if CAPTCHA appears...");
  271 | 
  272 |       // Wait for either CAPTCHA OR next page
```