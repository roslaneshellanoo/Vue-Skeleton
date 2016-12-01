<template>
    <mu-drawer @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">

        <mu-appbar class="exmaples-nav-appbar" :zDepth="0">
            <a class="exmaples-appbar-title" @click="handleMenuChange('#/index')" href="#/index"
               style="display:inline-block; color: #fff;">JS Quiz App</a>
            <mu-badge content="alpha" class="exmaples-version" secondary/>
        </mu-appbar>
        <mu-divider/>
        <mu-list @itemClick="docked ? '' : toggle()">
            <mu-list-item title="Menu Item 1"/>
            <mu-list-item title="Menu Item 2"/>
            <mu-list-item title="Menu Item 3"/>
            <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
        </mu-list>
    </mu-drawer>
</template>


<script>
    export default {
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

</style>