<template>
    <mu-drawer @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">

        <mu-appbar class="exmaples-nav-appbar" :zDepth="0">
            <a class="exmaples-appbar-title" @click="handleMenuChange('#/index')" href="#/index"
               style="display:inline-block; color: #fff;">JS Quiz App</a>
            <mu-badge content="alpha" class="exmaples-version" secondary/>
        </mu-appbar>
        <mu-divider/>
        <mu-list class="sidebar-nav" @itemClick="docked ? '' : toggle()">
            <mu-list-item >
                <router-link to="/quiz">Javascript Quiz</router-link>
            </mu-list-item>
            <mu-list-item >
                <router-link to="/quiz">Vue.js Quiz</router-link>
            </mu-list-item>
            <mu-list-item title="Menu Item 3"/>
            <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
        </mu-list>



        <mu-list >

            <mu-list-item title="Inbox"  toggleNested :newopen="newopen">


                <mu-icon slot="left" value="inbox"/>

                <mu-list-item slot="nested" title="Starred">
                    <mu-icon slot="left" value="grade"/>
                </mu-list-item>

            </mu-list-item>
        </mu-list>


    </mu-drawer>
</template>


<script>
    export default {



        data() {



            return{

            }
        },

        props: {

            open: {
                type: Boolean,
                default: true
            },
            docked: {
                type: Boolean,
                default: true
            }
        },

        methods: {
            handleClose () {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="sass">
    .mu-list.sidebar-nav .active {
        text-decoration: none;
    }
</style>