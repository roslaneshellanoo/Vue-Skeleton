<template>
    <div class="home">

        <div class="container">


            <div class="col-xs-12">

                <div class="">
                    <h1 class="text-center">Simple ToDo made with Vue.js</h1>
                    <mu-divider />
                    <mu-content-block>
                        <div class="v-for-complex">
                            <div id="myvueinstance" class="container">


                                <mu-list :value="value" @change="handleChange">


                                    <mu-list-item v-for="library in libraries" :value="library">

                                        {{ library }}
                                        <mu-avatar icon="folder" slot="leftAvatar"/>
                                        <mu-icon v-on:click="removeLibrary(library)"
                                                 value="remove_circle"
                                                 slot="right"
                                                 color="red700"
                                        />

                                    </mu-list-item>


                                </mu-list>


                                <br/>
                                <div @keyup.enter="addLibrary">
                                    <mu-text-field v-model="newlibrary"
                                                   label="Add to library"
                                                   labelFloat/>


                                </div>


                                <mu-raised-button v-on:click="addLibrary" label="Click to add library"
                                                  class="demo-raised-button" backgroundColor="blue500"/>


                                <mu-raised-button v-on:click="deleteLastLibrary"
                                                  label="Click to delete last library"
                                                  class="demo-raised-button"
                                                  backgroundColor="deepOrange700"/>


                                <mu-raised-button v-on:click="deleteLibraries"
                                                  label="Click to delete all libraries"
                                                  class="demo-raised-button"
                                                  backgroundColor="pink800"/>

                                <p></p>

                                <div class="row">Vue Instance data object</div>
                                {{ newlibrary }}
                            </div>

                        </div>
                    </mu-content-block>
                </div>



                <!---------------------------------------------->

            </div>
        </div>

    </div>
</template>


<script>

    import {reverse, filterBy, findBy} from '../filters/filters'
    export default {
        name: 'home',

        data() {
            return {
                message: "hello vue!",
                libraries: ['angular.js', 'd3', 'node', 'jquery'],
                newlibrary: '',
                value: 1
            }

        },

        methods: {
            handleChange (val) {
                this.value = val
            },
            addLibrary: function () {

                if (this.newlibrary.length > 0) {

                    this.libraries.push(this.newlibrary);

                    this.newlibrary = '';
                }
            },

            deleteLibraries: function () {
                this.libraries = [];
            },

            deleteLastLibrary: function () {
                this.libraries.pop();
            },

            removeLibrary: function(library){
                this.libraries.splice(this.libraries.indexOf(library), 1)
                console.dir(this.libraries.indexOf(library))
            }
        }
    }
</script>
