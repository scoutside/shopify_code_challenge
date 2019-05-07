# Shopify Code Challenge

[![N|Solid](https://cdn.shopify.com/s/files/1/0020/8017/8222/files/scoutside_shopify_50x50.png?1704304460911807781)](https://code-challenge.myshopify.com)


This is a simple challenge to test some front-end basics in a Shopify Environment. 
##### Set up:
1. Clone repository and create a new branch.
2. Duplicate/Rename `sample-config.yml` to `config.yml`.
3. Download [Themekit](https://shopify.github.io/themekit/) CLI.
    * Follow instructions on connecting to Shopify Store.
4. Create a new theme with the files in this repo.
    * Rename the theme `Dev - < your name > - [Challenge]`
5. Use `theme watch` to push files to your theme on the Shopify Development Store.


##### Challenge: Create a Subscription Sales Funnel
1. Create a new page template
2. Create a section for this page
  a. Add a product picker to schema
3. Display Product image, title, and price with liquid.
3. Add a CTA button to add to cart
  a. Use Javascript to add product to cart
  b. Use line item properties to add Recharge data so the item will be subscribed on a 6 month interval.
4. Once item has been added to cart, redirect to Recharge Checkout.

##### Extra Credit:
1. Find a store that inspires you on [Commerce Cream](https://commercecream.com/)
2. Replicate any Page (Product) Styling


##### Helpful Docs:
[Recharge Docs](https://support.rechargepayments.com/hc/en-us/categories/360000578474-Third-Party-Integrations-and-Advanced-Customization)