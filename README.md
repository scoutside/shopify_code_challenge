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


##### Challenge:
1. Add a datepicker to the cart page. 
2. Dynamically set a cart note attribute named **"Ship Date"** to the value of the datepicker.
    * See [Shopify Docs](https://help.shopify.com/en/themes/customization/cart/get-more-information-with-cart-attributes) on Cart Attributes.
3. format the date `yyyy-mm-dd`

##### Extra Credit:
1. Find a store that inspires you on [Commerce Cream](https://commercecream.com/)
2. Replicate the Cart Page Styling
    * (if it is shopify add a product to cart and navigate to `/cart`)

##### Notes:
* In order to test the challenge I expect to:
    * Add product to cart
    * set date
    * click checkout
    * In the Chrome Developer Console I can run this script to retun the cart object:
        ```
        fetch('/cart.js')
          .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
          });
        ```
    * **Ship Date** attribute with date set on cart will be in this response.