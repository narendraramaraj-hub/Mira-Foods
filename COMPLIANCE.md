# Bee's Water UK website: compliance notes

Notes on the UK rules that shaped the site copy. This is a working checklist, not legal advice; have the labelling and claims checked by a trading standards officer or food labelling adviser before launch.

## Health and nutrition claims (GB Nutrition and Health Claims Register)

- **No health claims are live without your approval.** The only two health claims on the site are in a marked TODO block on `ingredients.html`, copied word for word from the GB register for vitamin C:
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
