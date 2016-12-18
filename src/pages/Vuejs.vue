<template>

<section class="vuejs">
  
  <div v-for="(value, key, index) in object">
    {{ index }}. {{ key }} : {{ value }}
  </div>
  <div>
    <span v-for="n in 10"> {{ n }} |</span>
  </div>
  <div class="container">
    <h1>Vue.js Guide</h1>

    <mu-row gutter>
      <mu-col class="spacing-bottom" v-for="post in limit(posts, 6)" width="50" tablet="50" desktop="33">
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
      <br>

    </mu-row>


  </div>



</section>
</template>


<script>
  export default {
    name: 'vuejs',
    data() {

      return {
        posts: [],


        object: {
          FirstName: 'John',
          LastName: 'Doe',
          Age: 30
        }
      };
    },

    created: function () {
      this.fetchPosts();
    },


    methods: {
      fetchPosts: function(){

        //this.loading = true;

        this.$http.get('../src/api/api.json').then((response) => {

          this.loading = false;
          this.posts = response.data;
        }, (errorResponse) => {

          // Handle error...
          console.log('API responded with:', errorResponse.status);
        });

      },

      limit: function(posts,number) {
        return this.posts.slice(0, number)
      }

    }


  }
</script>


<style type="text/css">
  .preloading {
    /* display: flex; */
    position: fixed;
    background: black;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    transition: all 1200ms ease;
    color: #fff;
    text-align: center;
  }
</style>