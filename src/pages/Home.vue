<template>
    <div class="home">

        <div class="container">
            <h3 class="md-display-1">Material Design Switch</h3>
            <hr>
            <div class="col-xs-12">

                <!------------------------------------------------>
                <div class="v-model">

                    <p>{{ message }}</p>
                    <input v-model="message">
                </div>

                <hr>
                <!------------------------------------------------->
                <div class="v-for">
                    <ul>
                        <li v-for="library in libraries">{{library}}</li>
                    </ul>
                </div>

                <hr>
                <!----------------------------------------------->
                <div class="v-for-complex">
                    <div id="myvueinstance" class="container">
                        <div class="row">UI List Element</div>

                        <ul class="nav nav-pills">
                            <li v-for="library in libraries" class="active"><a href="#">{{ library
                                }}</a></li>
                        </ul>

                        <p></p>




                        <md-input-container md-inline>

                            <md-input  placeholder="Type the library name here, then click the button below."
                                       v-model="newlibrary"></md-input>
                        </md-input-container>


                        <md-button class="md-raised md-primary" v-on:click="addLibrary">
                            Click to add library
                        </md-button>



                        <md-button class="md-raised md-warn" v-on:click="deleteLastLibrary">
                            Click to delete
                            last library
                        </md-button>

                        <md-button class="md-raised md-accent" v-on:click="deleteLibraries">
                            Click to delete
                            all libraries
                        </md-button>

                        <p></p>

                        <div class="row">Vue Instance data object</div>
                        {{ newlibrary }}
                    </div>

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
                newlibrary: ''
            }

        },

        methods: {
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

            reverse,
            filterBy,
            findBy,
        }
    }
</script>
