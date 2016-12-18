<template>
    <div class="quiz">

        <h1 class="loader" v-show="loading">
            LOADER...
        </h1>
        <div class="container">

            <h1 class="text-center">Javascript Quiz</h1>

            <!-- index is used to check with current question index -->

            <div v-for="(question, index) in quiz.questions">
                <!-- Hide all questions, show only the one with index === to current question index -->
                <div v-show="index === questionIndex">
                    <br>

                    <div v-html="escapehtml(question.text)">

                    </div>

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
                                    <div class="mu-radio-label" v-html="response.text"></div>
                                </div>
                                <!---->
                            </label>


                        </li>
                    </ul>
                    <br>
                    <!-- The two navigation buttons -->
                    <!-- Note: prev is hidden on first question -->
                    <mu-raised-button v-if="questionIndex > 0" v-on:click="prev" label="Prev"
                                      class="demo-raised-button" primary/>
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


            let q1 =

                    "<pre v-code><code>(function(x, f = () => x) { " +
                    "var x; var y = x; x = 2; " +
                    "return [x, y, f()]; " +
                    "})(1)</code></pre>";


            var quiz = {
                title: 'My quiz',
                questions: [
                    {
                        text: q1,
                        responses: [

                            {text: 'Wrong, too bad.', id: 1},
                            {text: 'Wrong, too bad.', id: 2},
                            {text: 'Wrong, too bad.', id: 3},
                            {
                                text: '<pre v-code><code>document.getElementById("demo").innerHTML = "Hello World!";</code></pre>',
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

                            {text: 'RIGHT1', id: 1},
                            {text: 'Wrong, too bad.', id: 2},
                            {text: 'Wrong, too bad.', id: 3},
                            {text: 'Wrong, too bad.', id: 4}
                        ],
                        answer: 1


                    }


                ]
            };

            return {

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
                //this.loading = true;
                console.log(this)



            },

            // Find out which option is the correct answer to this question

            // Go to next question
            next: function () {
                this.questionIndex++;

            },
            // Go to previous question
            prev: function () {
                this.questionIndex--;
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


        }



    }
</script>













