<template>
    <div class="quiz">
        <div class="container">

            <h1 class="text-center">Javascript Quiz</h1>

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


            <!-- index is used to check with current question index -->

            <div v-for="(question, index) in quiz.questions">
                <!-- Hide all questions, show only the one with index === to current question index -->
                <div v-show="index === questionIndex">
                    <br>

                    <h4>
                        {{ questionIndex +1 }}.
                        <span v-html="question.text">

                        </span>
                    </h4>

                    <mu-divider/>
                    <br>
                    <ul class="list-reset">
                        <li v-for="response in question.responses">


                            <label class="mu-radio spacing-bottom">


                                <input type="radio"
                                       :value="response.id"
                                       :name="index"
                                       v-model="userResponses[index]">


                                <div class="mu-radio-wrapper">
                                    <div class="mu-ripple-wrapper mu-radio-ripple-wrapper"></div>
                                    <!---->
                                    <div class="mu-radio-icon">
                                        <i aria-hidden="true"
                                           class="mu-icon material-icons mu-radio-icon-uncheck radio_button_unchecked">radio_button_unchecked</i>
                                        <i aria-hidden="true"
                                           class="mu-icon material-icons mu-radio-icon-checked radio_button_checked">radio_button_checked</i>
                                    </div>
                                    <div class="mu-radio-label" >
                                        {{ response.text }}
                                    </div>
                                </div>
                                <!---->
                            </label>


                        </li>
                    </ul>
                    <br>
                    <!-- The two navigation buttons -->
                    <!-- Note: prev is hidden on first question -->
                    <mu-raised-button v-if="questionIndex > 0" v-on:click="prev" label="Prev"
                                      class="demo-raised-button" />
                    <mu-raised-button v-on:click="next" label="Next" class="demo-raised-button"
                                      primary/>

                </div>
            </div>

            <div v-show="questionIndex === quiz.questions.length">
                <h2>
                    Quiz finished
                </h2>
                <p>
                    Total score: {{ score() }} / {{ quiz.questions.length }}
                </p>
                <mu-raised-button v-on:click="refresh" label="Reload Quiz"
                                  class="demo-raised-button"
                                  primary/>

            </div>
        </div>
    </div>
</template>


<script>
    //import AppNavDrawer from 'Navigation/AppNavDrawer'

    import {filterBy, reverse, findBy, escapehtml} from '../filters/filters'
    export default {


        name: 'quiz',
        loading: false,
        data() {


            var quiz = {
                title: 'My quiz',
                questions: [
                    {
                        text: 'Inside which HTML element do we put the JavaScript?',
                        responses: [

                            {text: '<javascript>', id: 1},
                            {text: '<scripting>', id: 2},
                            {text: '<js>', id: 3},
                            {
                                text: '<script>',
                                id: 4
                            }
                        ],
                        answer: 4


                    },

                    {
                        text: "Question 2",
                        responses: [

                            {text: 'Wrong, too bad.', id: 1},
                            {text: 'Right2', id: 2},
                            {text: 'Wrong, too bad.', id: 3},
                            {text: 'Wrong, too bad.', id: 4}
                        ],
                        answer: 2


                    },

                    {
                        text: "Question 3",
                        responses: [

                            {text: 'Wrong, too bad.', id: 1},
                            {text: 'Right2', id: 2},
                            {text: 'Wrong, too bad.', id: 3},
                            {text: 'Wrong, too bad.', id: 4}
                        ],
                        answer: 2


                    },

                    {
                        text: "Question 4",
                        responses: [

                            {text: 'Wrong, too bad.', id: 1},
                            {text: 'Right2', id: 2},
                            {text: 'Wrong, too bad.', id: 3},
                            {text: 'Wrong, too bad.', id: 4}
                        ],
                        answer: 2


                    }


                ]
            };

            return {

                activeStep: 0,

                quiz: quiz,
                // Store current question index
                questionIndex: 0,
                // An array initialized with "false" values for each question
                // It means: "did the user answered correctly to the question n?" "no".
                userResponses: Array(quiz.questions.length).fill(false)

            }

        },

        created: function () {

        },

        methods: {

            escapehtml,

            refresh: function () {

                this.questionIndex = 0;
                this.activeStep = 0;
                //this.loading = true;
                console.log(this)

            },

            // Find out which option is the correct answer to this question

            // Go to next question
            next: function () {
                this.questionIndex++;
                this.activeStep++;

            },
            // Go to previous question
            prev: function () {
                this.questionIndex--;
                this.activeStep--;
            },

            reload: function () {
                this.questionIndex--;

            },
            // Return "true" count in userResponses
            score: function () {
                var right_answers = 0;
                var quizObj = this.quiz;
                //console.log(quizObj)
                this.userResponses.forEach(function (value, index) {
                    //console.dir(quizObj.questions[index].answer);
                    if (quizObj.questions[index].answer == value) {
                        right_answers++;
                        console.info(right_answers);

                    }

                });
                return right_answers;

                //console.log(Array(this.quiz.questions.length).fill(false));

//                return this.userResponses.filter(function(val) {
//
//                    console.log(val);
//                    return val;
//
//                }).length;


            },


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


//        mounted: function () {
//            this.$nextTick(function () {
//
//                Array.from(document.querySelectorAll('pre code'))
//                    .forEach((code) => {
//                        code.innerHTML = h(code.textContent)
//                    });
//            })
//        },
//
//        updated: function () {
//            this.$nextTick(function () {
//
//                Array.from(document.querySelectorAll('pre code'))
//                    .forEach((code) => {
//                        code.innerHTML = h(code.textContent)
//                    });
//            })
//        }
    }
</script>













