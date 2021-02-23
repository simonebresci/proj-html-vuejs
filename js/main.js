var app = new Vue ({
  el: '#root',
  data: {
    // HEADER DATA
    headerTopNavbar: ['SIGN IN','ABOUT US','CONTACT US', 'BUY NOW'],
    headerBottomNavbar: ['HOME','ELEMENTS','FEATURES', 'PAGES', 'PORTFOLIO', 'BLOG','SHOP'],

    // FOOTER DATA
    footerTopCategories: ['GADGETS','PHOTOGRAPHY','LIFESTYLE','FASHION', 'RECIPES',
                          'TRAVEL', 'BUSINESS', ' ARCHITECTURE', 'REVIEWS', 'SPORTS',
                          'VIDEOS', 'TECHNOLOGY', 'DESIGN'],

    footerBottomLinks: ['FAQ\'s', 'Sitemap', 'Contact Us']
  },

});
// TOOLS DI SVILUPPO
Vue.config.devtools = true;
