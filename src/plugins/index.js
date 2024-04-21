
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

import { Quasar } from 'quasar'
import router from "@/router";

import { register } from 'swiper/element/bundle';

export function registerPlugins(app) {
  register();
  app
    .use(Quasar, {
      plugins: {}, // import Quasar plugins and add here
      extras: [
        'material-icons'
      ]
    })
    .use(router);
}
