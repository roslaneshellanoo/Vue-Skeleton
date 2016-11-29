<template>

<section class="vuejs">
  <div class="container">
    <h1>Vue.js Guide</h1>



    <h1 class="loader" v-show="loading">
      LOADING...
    </h1>


    <mu-row gutter>
      <mu-col class="spacing-bottom" v-for="post in posts" width="50" tablet="30" desktop="33">
        <mu-card >
          <mu-card-header title="Myron Avatar" subTitle="sub title">
            <mu-avatar :src="myron" slot="avatar"/>
          </mu-card-header>
          <mu-card-media title="Image Title" subTitle="Image Sub Title">
            <img :src="post.url" />
          </mu-card-media>
          <mu-card-title title="Content Title" subTitle="Content Title"/>
          <mu-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis delectus, dolores ducimus eaque, eligendi explicabo illum iure maiores nemo neque nihil obcaecati similique sint, soluta sunt temporibus vel voluptatibus.
          </mu-card-text>
          <mu-card-actions>
            <mu-flat-button label="Action 1"/>
            <mu-flat-button label="Action 2"/>
          </mu-card-actions>

        </mu-card>
      </mu-col>
    </mu-row>






  </div>



</section>
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