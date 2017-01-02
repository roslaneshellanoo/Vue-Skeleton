<template>
    <div>

        <input type="checkbox" v-model="checked" @change="checkNum" />

        <mu-switch @change="checkNum" label="默认为 true" v-model="checked" class="demo-switch" /><br/>

        <mu-tabs :value="theme" @change="changeTheme">
            <mu-tab title="LIGHT (DEFAULT)" value="light"/>
            <mu-tab title="DARK" value="dark"/>

        </mu-tabs>

    </div>
</template>

<script>

    import light from '!raw-loader!muse-ui/dist/theme-default.css'
    import dark from '!raw-loader!muse-ui/dist/theme-dark.css'
    import {filterBy, reverse, findBy, escapehtml} from '../filters/filters'
    export default {
        name: 'javascript',
        data() {

            return {

                theme: 'dark',
                themes: {
                    light,
                    dark
                },
                toggle: false,
                checked: false
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

            getThemeStyle: function () {
                const themeId = 'muse-theme';
                let styleEl = document.getElementById(themeId);
                if (styleEl) return styleEl
                styleEl = document.createElement('style');
                styleEl.id = themeId;
                document.body.appendChild(styleEl);
                return styleEl
            },

            changeTheme: function (theme) {
                this.theme = theme;
                const styleEl = this.getThemeStyle();
                styleEl.innerHTML = this.themes[theme] || '';
                console.log(styleEl)
            },

            checkNum: function() {
                if(this.checked === true) {
                    this.changeTheme('light')
                } else {
                    this.changeTheme('dark')
                }
            }


        },

        mounted: function () {
            this.$nextTick(function () {
                // console.log(this.themes.dark)
            })
        }






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
