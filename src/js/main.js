import Vue from "vue";
import Nav from "./components/v-nav";

import MainContent from "./main-content";

window.Vue = Vue;

Vue.component('title-card', require('./components/title-card').default);


const vue = new Vue({
    el:"#app",
    components:{
        "v-nav": Nav,
        "main-content": MainContent,

    }
});