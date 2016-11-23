<template>
  <div id="app"  v-md-theme="'default'">
    <div class="header">
      <div class="inner">
        <router-link to="/" exact>
          <img class="logo" src="./assets/logo.png" alt="logo">
        </router-link>
        <router-link to="/javascript">Go to javascript</router-link>
        <router-link to="/vuejs">Go to Vue.js</router-link>
        <router-link to="/quiz">Quiz</router-link>


        <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">
          Built with Vue.js
        </a>

      </div>
    </div>


    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
  import Home from './pages/Home.vue'
  import Javascript from './pages/Javascript.vue'
  import Vuejs from './pages/Vuejs.vue'

  export default {
    name: 'app',
    data() {
      return {
        posts: []
      };
    },

    created: function () {
      this.fetchPosts();
    },

    methods: {
      fetchPosts: function(){

        this.$http.get('http://ip-api.com/json').then((response) => {
          this.posts = response.data;

        }, (errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse.status);
        });

      }
    }
  }
</script>

<style lang="sass">

  /* core.css v1.1 | MIT License | corecss.io */
  html {
    font-family: Roboto,sans-serif;
    font-size: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, header, footer, main, section, div,
  h1, h2, h3, h4, h5, h6, p, span, a,
  blockquote, q, pre, code, ol, ul, li,
  form, label, input, textarea, button,
  table, tr, th, td, dl, dt, dd, hr {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    line-height: inherit;
    vertical-align: baseline;
    background: transparent;
  }
  article, aside, details, figcaption, figure,
  footer, header, main, menu, nav, section, summary {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  hr {
    border-bottom: 1px solid #000;
  }
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
  }
  a, a:hover {
    color: #000;
    text-decoration: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }


  :focus {
    outline: none;
  }
  table {
    width: 100%;
  }
  table, tr, th, td {
    border: 1px solid #000;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .row {margin: 0 auto;}
  .row:before, .row:after {content: ''; display: table;}
  .row:after {clear: both;}
  .xs {max-width: 32rem;}
  .sm {max-width: 48rem;}
  .md {max-width: 64rem;}
  .lg {max-width: 80rem;}
  .xl {max-width: 96rem;}
  .col {float: left;}
  .xs-0 {display: none;}
  .xs-1, .xs-2, .xs-3, .xs-4, .xs-5, .xs-6, .xs-7, .xs-8, .xs-9, .xs-10, .xs-11, .xs-12 {display: inline-block;}
  .xs-1  {width: 8.3333%;}
  .xs-2  {width: 16.6667%;}
  .xs-3  {width: 25%;}
  .xs-4  {width: 33.3333%;}
  .xs-5  {width: 41.6667%;}
  .xs-6  {width: 50%;}
  .xs-7  {width: 58.3333%;}
  .xs-8  {width: 66.6667%;}
  .xs-9  {width: 75%;}
  .xs-10 {width: 83.3333%;}
  .xs-11 {width: 91.6667%;}
  .xs-12 {width: 100%;}
  @media screen and (min-width: 32em) {
    .sm-0 {display: none;}
    .sm-1, .sm-2, .sm-3, .sm-4, .sm-5, .sm-6, .sm-7, .sm-8, .sm-9, .sm-10, .sm-11, .sm-12 {display: inline-block;}
    .sm-1  {width: 8.3333%;}
    .sm-2  {width: 16.6667%;}
    .sm-3  {width: 25%;}
    .sm-4  {width: 33.3333%;}
    .sm-5  {width: 41.6667%;}
    .sm-6  {width: 50%;}
    .sm-7  {width: 58.3333%;}
    .sm-8  {width: 66.6667%;}
    .sm-9  {width: 75%;}
    .sm-10 {width: 83.3333%;}
    .sm-11 {width: 91.6667%;}
    .sm-12 {width: 100%;}
  }
  @media screen and (min-width: 48em) {
    .md-0 {display: none;}
    .md-1, .md-2, .md-3, .md-4, .md-5, .md-6, .md-7, .md-8, .md-9, .md-10, .md-11, .md-12 {display: inline-block;}
    .md-1  {width: 8.3333%;}
    .md-2  {width: 16.6667%;}
    .md-3  {width: 25%;}
    .md-4  {width: 33.3333%;}
    .md-5  {width: 41.6667%;}
    .md-6  {width: 50%;}
    .md-7  {width: 58.3333%;}
    .md-8  {width: 66.6667%;}
    .md-9  {width: 75%;}
    .md-10 {width: 83.3333%;}
    .md-11 {width: 91.6667%;}
    .md-12 {width: 100%;}
  }
  @media screen and (min-width: 64em) {
    .lg-0 {display: none;}
    .lg-1, .lg-2, .lg-3, .lg-4, .lg-5, .lg-6, .lg-7, .lg-8, .lg-9, .lg-10, .lg-11, .lg-12 {display: inline-block;}
    .lg-1  {width: 8.3333%;}
    .lg-2  {width: 16.6667%;}
    .lg-3  {width: 25%;}
    .lg-4  {width: 33.3333%;}
    .lg-5  {width: 41.6667%;}
    .lg-6  {width: 50%;}
    .lg-7  {width: 58.3333%;}
    .lg-8  {width: 66.6667%;}
    .lg-9  {width: 75%;}
    .lg-10 {width: 83.3333%;}
    .lg-11 {width: 91.6667%;}
    .lg-12 {width: 100%;}
  }
  @media screen and (min-width: 80em) {
    .xl-0 {display: none;}
    .xl-1, .xl-2, .xl-3, .xl-4, .xl-5, .xl-6, .xl-7, .xl-8, .xl-9, .xl-10, .xl-11, .xl-12 {display: inline-block;}
    .xl-1  {width: 8.3333%;}
    .xl-2  {width: 16.6667%;}
    .xl-3  {width: 25%;}
    .xl-4  {width: 33.3333%;}
    .xl-5  {width: 41.6667%;}
    .xl-6  {width: 50%;}
    .xl-7  {width: 58.3333%;}
    .xl-8  {width: 66.6667%;}
    .xl-9  {width: 75%;}
    .xl-10 {width: 83.3333%;}
    .xl-11 {width: 91.6667%;}
    .xl-12 {width: 100%;}
  }

  body {
    font-family: Roboto,Helvetica,sans-serif;
    font-size: 15px;
    background-color: #f2f3f5;
    margin: 0;
    padding-top: 55px
  }
  a {
    text-decoration: none
  }

  div#app {
    padding: 2rem 0;
  }

  .container {
    max-width: 960px;
    margin: auto;
    padding: 0 1rem;
  }
  .header {
    background-color: #167a8b;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
      
      a{
        color: #fff!important;
      }
  }

  .header .inner {
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 15px 5px
  }

  .header a {
    color: hsla(0,0%,100%,.8);
    line-height: 24px;
    transition: color .15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: .075em;
    margin-right: 1.8em
  }

  .header a:hover {
    color: #fff
  }

  .header a.router-link-active {
    color: #fff;
    font-weight: 400
  }

  .header a:nth-child(6) {
    margin-right: 0
  }

  .header .github {
    color: #fff;
    font-size: .9em;
    margin: 0;
    float: right
  }

  .logo {
    width: 24px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle
  }

  .view {
    max-width: 800px;
    margin: 0 auto;
    position: relative
  }

  .fade-enter-active,.fade-leave-active {
    transition: all .2s ease
  }

  .fade-enter,.fade-leave-active {
    opacity: 0
  }

  @media (max-width: 860px) {
    .header .inner {
      padding:15px 30px
    }
  }

  @media (max-width: 600px) {
    body {
      font-size:14px
    }

    .header .inner {
      padding: 15px
    }

    .header a {
      margin-right: 1em
    }

    .header .github {
      display: none
    }
  }

  h1.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 800px;
    background: rgba(0, 0, 0, 0.55);
    text-align: center;
    z-index: 999999;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all 350ms ease;
  }

  .md-card {
    width: 100%;
    max-width: 340px;
    margin: 1rem;
    display: inline-block;
    vertical-align: top;
    float: left;
  }

  
</style>
