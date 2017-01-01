<template>

    <div>
        <input
                type="checkbox"
                v-model="toggle"
                v-bind:true-value="a"
                v-bind:false-value="b"
        >
        <mu-switch label="默认为 true" v-model="toggle" class="demo-switch" /><br/>

        <mu-tabs :value="theme" @change="changeTheme">
            <mu-tab title="LIGHT (DEFAULT)" value="light"/>
            <mu-tab title="DARK" value="dark"/>

        </mu-tabs>
    </div>

</template>

<script>


    import dark from '!raw-loader!muse-ui/dist/theme-dark.css'
    import {filterBy, reverse, findBy, escapehtml} from '../filters/filters'
    export default {
        name: 'javascript',
        data() {


            return {

                string: '<p>Hello World</p>',
                activeStep: 0,
                theme: 'dark',
                themes: {

                    dark

                },
                toggle: false
            }

        },

        filters: {
            reverse,
            filterBy,
            findBy,
            escapehtml
        },

        computed: {

        },

        methods: {
            reverse,
            filterBy,
            findBy,
            escapehtml,



            changeTheme (theme) {
                this.theme = theme
                const styleEl = this.getThemeStyle()
                styleEl.innerHTML = this.themes[theme] || ''
                console.dir(this.getThemeStyle())
            },
            getThemeStyle () {
                const themeId = 'muse-theme'
                let styleEl = document.getElementById(themeId)
                if (styleEl) return styleEl
                styleEl = document.createElement('style')
                styleEl.id = themeId
                document.body.appendChild(styleEl)
                return styleEl
            }
        },

        mounted: function () {
            this.$nextTick(function () {
                console.log(this.themes.dark)
            })
        },






    }
</script>

<style lang="css">
    .demo-step-container {
        width: 100%;
        /*max-width: 700px;*/
        margin: auto;
    }

    .demo-step-content {
        margin: 0 16px;
    }

    .demo-step-button {
        margin-top: 12px;
        margin-right: 12px;
    }
</style>
