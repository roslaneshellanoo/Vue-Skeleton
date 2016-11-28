<template>
    <div class="quiz">
        <div class="container">

            <h2 class="md-display-2">Javascript Quiz</h2>

            <!-- index is used to check with current question index -->

            <div v-for="(question, index) in quiz.questions">
                <!-- Hide all questions, show only the one with index === to current question index -->
                <div v-show="index === questionIndex">
                    <h2>{{ question.text }}</h2>
                    <ol>
                        <li v-for="response in question.responses">



                            <label class="mu-radio">


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
                                    <div class="mu-radio-label">{{response.text}}</div>
                                </div>
                                <!---->
                            </label>


                        </li>
                    </ol>
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
                <mu-raised-button v-on:click="refresh" label="Reload Quiz" class="demo-raised-button"
                                  primary/>

            </div>
        </div>
    </div>
</template>


<script>
    //import AppNavDrawer from 'Navigation/AppNavDrawer'
    export default {


        name: 'quiz',
        data() {

            var quiz = {
                title: 'My quiz',
                questions: [
                    {
                        text: "Question 1",
                        responses: [

                            {text: 'Wrong, too bad.', id: 1},
                            {text: 'Wrong, too bad.', id: 2},
                            {text: 'Wrong, too bad.', id: 3},
                            {text: 'Right1', id: 4}
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

            refresh: function () {
                location.reload();
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
            // Return "true" count in userResponses
            score: function () {
                var right_answers = 0;
                var quizObj = this.quiz;
                console.log(quizObj)
                this.userResponses.forEach(function (value, index) {
                    console.dir(quizObj.questions[index].answer);
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


            }


        }
    }
</script>













