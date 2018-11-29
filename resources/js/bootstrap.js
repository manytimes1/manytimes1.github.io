
window._ = require('lodash');
window.Popper = require('popper.js').default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugins which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery/dist/jquery.min');

    require('bootstrap/dist/js/bootstrap.bundle.min')
} catch (e) {}

import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Loading);
