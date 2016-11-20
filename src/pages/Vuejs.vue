<template>
<div class="vuejs">
  <div class="container">
    <h1>Vue.js Guide</h1>

    <h1 class="loader" v-show="loading">
      LOADING...
    </h1>


        <md-card v-for="post in posts">
          <md-card-media>
            <img :src="post.url" alt="People">
          </md-card-media>

          <md-card-content>
            {{post.title}}
          </md-card-content>
        </md-card>


  </div>

</div>
</template>


<script>
  export default {
    name: 'vuejs',
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

        this.loading = true;

        this.$http.get('../src/api/api.json').then((response) => {

          this.loading = false;
          this.posts = response.data;

        }, (errorResponse) => {


          // Handle error...
          console.log('API responded with:', errorResponse.status);
        });

      }
    }
  }
</script>