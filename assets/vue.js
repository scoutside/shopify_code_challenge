var app = new Vue({
   el: '#app',
   data: {
       product: []
   },
   methods: {
       addToCart: function(str){
        axios.post('/cart/add.js', {
            "quantity": 1,
            "id": str,
            properties: {
              shipping_interval_frequency: 180,
              'orderType': 'monthly',
              shipping_interval_unit_type: 'day'            }
          })
            .then(function(response){
                if(response.data.properties.shipping_interval_frequency){
                    var hasSub = true;
                } else {
                    var hasSub = false;
                }

                if (hasSub) {
                    function get_cookie(name) {
                    return (document.cookie.match('(^|; )' + name + '=([^;]*)') || 0)[2]
                    }
                    do {
                    var token = get_cookie('cart');
                    }
                    while (token == undefined);

                    var myshopify_domain = 'code-challenge.myshopify.com'
                    try {
                    var ga_linker = ga.getAll()[0].get('linkerParam')
                    } catch (err) {
                    var ga_linker = ''
                    }
                    var checkout_url = "https://checkout.rechargeapps.com/r/checkout?myshopify_domain=" + myshopify_domain + "&cart_token=" + token + "&" + ga_linker;
                    window.location = checkout_url;
                } else {
                    window.location.href = "/checkout"
                }
            })
       }
   },
   mounted: function(){
       var vueData = this
       axios.get('https://code-challenge.myshopify.com/admin/products/1685766045742.json')
       .then(function(response){
           console.log(response)
        vueData.product = response.data.product
       })
   }
  })