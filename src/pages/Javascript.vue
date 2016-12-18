<template>
    <div>


        <div>{{ string | escapehtml}}</div>
        <div v-html="string"></div>

        <pre v-code>
              <code>
      Array.from(document.querySelectorAll('pre code'))
          .forEach((code) => {
                code.innerHTML = h(code.textContent)
          });
              </code>
        </pre>

    </div>


</template>

<script>
import {filterBy, reverse, findBy, escapehtml} from '../filters/filters'
    export default {
        name: 'javascript',
        data() {

            return {
                string: '<p>Hello World</p>'
            }

        },

        filters: {
            reverse,
            filterBy,
            findBy,
            escapehtml
        },

        methods: {
            reverse,
            filterBy,
            findBy,
            escapehtml
        }

    }
</script>

<style lang="css">
    .demo-infinite-container {
        width: 256px;
        height: 300px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        border: 1px solid #d9d9d9;
    }
</style>
