<template>
    <div class="demo-step-container">
        <mu-stepper :activeStep="activeStep">
            <mu-step>
                <mu-step-label>

                </mu-step-label>
            </mu-step>
            <mu-step>
                <mu-step-label>

                </mu-step-label>
            </mu-step>
            <mu-step>
                <mu-step-label>

                </mu-step-label>
            </mu-step>
            <mu-step>
                <mu-step-label>

                </mu-step-label>
            </mu-step>



        </mu-stepper>
        <div class="demo-step-content">
            <p v-if="finished">
                We have completed it! <a href="javascript:" @click="reset">Click Here</a> To Reset
            </p>
            <template v-if="!finished">
                <p>
                    {{content}}
                </p>
                <div>
                    <mu-flat-button class="demo-step-button" label="Prev" :disabled="activeStep === 0" @click="handlePrev"/>
                    <mu-raised-button class="demo-step-button" :label="activeStep === 2 ? 'Next2' : 'Next'" primary @click="handleNext"/>
                </div>
            </template>
        </div>
    </div>


</template>

<script>
import {filterBy, reverse, findBy, escapehtml} from '../filters/filters'
    export default {
        name: 'javascript',
        data() {

            return {
                string: '<p>Hello World</p>',
                activeStep: 0
            }

        },

        filters: {
            reverse,
            filterBy,
            findBy,
            escapehtml
        },

        computed: {
            content () {
                let message = '';
                switch (this.activeStep) {
                    case 0:
                        message = 'Question message 1';
                        break;
                    case 1:
                        message = 'Question message 2';
                        break;
                    case 2:
                        message = 'Question message 3';
                        break;
                    case 3:
                        message = 'Question message 4';
                        break;
                    default:
                        message = 'fuck! 又 TM 出错了！！！';
                        break
                }
                return message
            },
            finished () {
                return this.activeStep > 2
            }
        },

        methods: {
            reverse,
            filterBy,
            findBy,
            escapehtml,


            handleNext () {
                this.activeStep++
            },
            handlePrev () {
                this.activeStep--
            },
            reset () {
                this.activeStep = 0
            }
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
        margin: 0  16px;
    }

    .demo-step-button {
        margin-top: 12px;
        margin-right: 12px;
    }
</style>
