# Mira Foods website: compliance notes

Notes on the UK rules that shaped the site copy. This is a working checklist, not legal advice; have the labelling and claims checked by a trading standards officer or food labelling adviser before launch.

## All brands

- **No health claims** appear for ChaiCo, hyCane, Little India or Greenish Ora. Words like "superfood", "immunity", "detox" or "natural energy" are general health claims and are not used.
- **hyCane**: "no added sugar" is allowed for sugarcane juice with the statement "contains naturally occurring sugars", which is on the page. The catalogue phrases "natural energy" and "feel the fresh lift" are not used.
- **hyCane Energy** (coming soon): 50 mg caffeine per 250 ml is 200 mg/l, above the 150 mg/l threshold, so the label and site must say "High caffeine content. Not recommended for children or pregnant or breast-feeding women" with the mg/100 ml figure (20 mg). That wording is on the page.
- **ChaiCo**: Karak Chai contains milk (allergen). The Vegan version uses oats (gluten unless certified). The three "coming soon" chais show no nutrition yet because the catalogue repeats the Original's figures as placeholders.
- **Little India**: the seven catalogue products are listed. The supplied catalogue names the brand as Jaisal, so confirm that packs and labels carry the Little India name shown on the site. Supplier prices in the catalogue are not published and the spreadsheet stays out of this public repository. Check allergen and cross-contact statements for each product, novel food conditions for chia (the name "Chia seeds (Salvia hispanica)" and whether a daily intake statement of no more than 15 g still applies in GB: see FSA register entry NOVEL-27), GB limits for contaminants such as inorganic arsenic in rice, the UK code of practice on basmati rice, and evidence for "Himalayan", "Super Premium" and "Natural". The word "organic" is not used: it needs certification recognised in GB plus a GB certificate of inspection for each import.
- **Greenish Ora**: moringa powder keeps the brand's "consult your doctor if pregnant or breastfeeding" advice.
- **Certification logos**: a logo says something about the certified business, its site and its scope, so each one needs a current certificate on file (number, holder, scope, expiry) and permission from the scheme or certification body. Greenish Ora logos are cropped from supplier artwork. The tea file is applied to green, black and moringa tea, and the moringa file to moringa powder; confirm this with Greenish Ora. Little India badges are plain text placeholders and not official marks. The catalogue lists FSSC 22000:2018: confirm the current scheme version on the certificate.
- **Organic logos on hold**: the supplied moringa artwork shows the EU organic leaf and USDA Organic logos. Both are left off the site. Listing them, or the word "organic", needs certification recognised in GB and a GB certificate of inspection for each shipment. The UK-US organic arrangement should not be assumed to cover Sri Lankan moringa.
- **Per 100 ml values** for ChaiCo and hyCane are calculated from the catalogue's per-can figures and flagged TODO until checked against the labels.
- **Pack images** for ChaiCo and hyCane come from the Asal-Karak catalogue; get permission or official pack shots before launch.

## Bee's Water: health and nutrition claims (GB Nutrition and Health Claims Register)

- **No health claims are live without your approval.** The only two health claims on the site are in a marked TODO block on `bees-water-ingredients.html`, copied word for word from the GB register for vitamin C:
  - "Vitamin C contributes to the normal function of the immune system."
  - "Vitamin C contributes to the protection of cells from oxidative stress."
- Conditions: the product must be at least a "source of" vitamin C (7.5% NRV per 100 ml for drinks). At 38 mg/100 ml (48% NRV) it is also "high in" vitamin C (15% NRV per 100 ml), which is the nutrition claim used on the site.
- When a health claim is used, the mandatory statement on a varied, balanced diet and healthy lifestyle must appear nearby. It is in the same block.
- **Catalogue wording deliberately not used**, because it is not authorised in GB or is a general health claim without an authorised claim beside it: "immunity support", "daily immunity and wellness support", "antioxidant rich", "sustained body fuel", "for wellness", "clean label goodness". Turmeric and elderberry ("botanical") claims are on hold in GB and must not be made.
- "200% daily value" is a US figure (US DV 90 mg). The UK NRV is 80 mg, so 180 mg = **225% NRV** per bottle.

## Nutrition labelling

- UK format is per 100 ml (per bottle optional): energy kJ/kcal, fat, saturates, carbohydrate, sugars, protein, salt. The site's figures are converted from the US label and flagged TODO until the UK label is verified.
- Salt = sodium × 2.5 (10 mg sodium → 0.025 g salt per bottle).
- Honey advice: "not suitable for babies under 12 months" shown on product information and in the footer.
- The UK label needs the UK importer's name and address (Mira Foods).

## HFSS (less healthy food and drink) rules

- Using the 2004/05 Nutrient Profiling Model, a drink scores roughly 1 point (sugars 4.9 g/100 ml), so Bee's Water is likely to count as **"less healthy" (HFSS)**. Confirm with a full NPM calculation.
- Effect: from January 2026, paid online advertising of HFSS products is restricted, and TV ads are restricted before 9pm. A brand's own website is generally outside the paid-ad restriction, but paid social, search ads and influencer posts are not. Promotion restrictions (multibuy, prominent in-store locations) also affect larger retailers stocking it.
- The copy avoids appealing to children.

## Soft Drinks Industry Levy

- The levy applies from 5 g total sugar per 100 ml. At about 4.9 g/100 ml Bee's Water is just under, so check the exact UK figure and tolerance with HMRC guidance before relying on it.

## Other claims to verify

- **Organic**: needs certification recognised in GB (the UK–US organic equivalence arrangement covers US-certified products). Check the certifier code requirement on the UK label.
- **Gluten free**: must be under 20 mg/kg.
- **Non-GMO, BPA free, caffeine free, no artificial sweeteners**: get written confirmation from Bee's Beverage Corporation.
- Use "flavouring" (UK) and the "acid: citric acid" style of ingredient naming.

## Privacy and cookies (UK GDPR and PECR)

- No non-essential cookies load before consent. `js/main.js` only calls `loadAnalytics()` after "Accept analytics", and "Reject" is as prominent as "Accept".
- Visitors can change their choice from "Cookie settings" in every footer.
- The marketing opt-in on the contact form is unticked and separate from the message.
- Fonts are system fonts, so no visitor data goes to Google Fonts.
- `privacy.html` and `cookies.html` are templates with TODOs (company details, ICO registration, providers, retention).
