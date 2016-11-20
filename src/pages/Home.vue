<template>
<div class="home">
  <h1  v-show="loading" class="fa fa-spinner fa-spin">
    loading...
  </h1>
  <div class="container">
    <h3 class="md-display-1">Material Design Switch</h3>
    <hr>
    <div class="col-xs-12">
      <div>
        <input v-model="parentMsg">
        <br>
        <div v-bind:my-message="parentMsg"></div>
      </div>



    </div>
  </div>

</div>
</template>


<script>
  export default {
    name: 'home'
  }
</script>
