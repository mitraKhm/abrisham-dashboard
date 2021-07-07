import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Persian from 'vuetify/es5/locale/fa'
Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      current: 'Persian',
      locales: { Persian }
    },
    rtl: true,
});
