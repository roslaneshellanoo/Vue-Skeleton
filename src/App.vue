<template>
  <div id="app"  v-md-theme="'default'">
    <div class="header">
      <div class="inner">
        <router-link to="/" exact>
          <img class="logo" src="./assets/logo.png" alt="logo">
        </router-link>
        <router-link to="/javascript">Go to javascript</router-link>
        <router-link to="/vuejs">Go to Vue.js</router-link>
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
