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

                                <!--&lt;!&ndash; The radio button has three new directives &ndash;&gt;-->
                                <!--&lt;!&ndash; v-bind:value sets "value" to "true" if the response is correct &ndash;&gt;-->
                                <!--&lt;!&ndash; v-bind:name sets "name" to question index to group answers by question &ndash;&gt;-->
                                <!--&lt;!&ndash; v-model creates binding with userResponses &ndash;&gt;-->

                            <label class="mu-radio">
                                <input type="radio"
                                       v-bind:value="response.id"
                                       v-bind:name="index"
                                       v-model="userResponses[index]">
                                <div class="mu-radio-wrapper">
                                    <div class="mu-ripple-wrapper mu-radio-ripple-wrapper"></div>
                                    <!---->
                                    <div class="mu-radio-icon">
                                        <i aria-hidden="true"
                                           class="mu-icon material-icons mu-radio-icon-uncheck radio_button_unchecked">radio_button_unchecked</i>
                                        <i aria-hidden="true"
                                           class="mu-icon material-icons mu-radio-icon-checked radio_button_checked">radio_button_checked</i></div>
                                    <div class="mu-radio-label">{{response.text}}</div>
                                </div>
                                <!---->
                            </label>


                        </li>
                    </ol>
                    <!-- The two navigation buttons -->
                    <!-- Note: prev is hidden on first question -->
                    <mu-raised-button v-if="questionIndex > 0" v-on:click="prev" label="Prev" class="demo-raised-button" primary/>
                    <mu-raised-button v-on:click="next" label="Next" class="demo-raised-button" primary/>

                </div>
            </div>
            <div v-show="questionIndex === quiz.questions.length">
                <h2>
                    Quiz finished
                </h2>
                <p>
                    Total score: {{ score() }} / {{ quiz.questions.length }}
                </p>
            </div>
        </div>
    </div>
</template>


<script>

    export default {



        name: 'quiz',
        data() {

            var quiz = {
                        title: 'My quiz',
                        questions: [
                            {
                                text: "Question 1",
                                responses: [

                                    {text: 'Wrong, too bad.', id: "1"},
                                    {text: 'Wrong, too bad.', id: "2"},
                                    {text: 'Wrong, too bad.', id: "3"},
                                    {text: 'Right', id: "4"}
                                ],
                                answer: 2


                            },

                            {
                                text: "Question 2",
                                responses: [

                                    {text: 'Wrong, too bad.', id: "1"},
                                    {text: 'Right', id: "2"},
                                    {text: 'Wrong, too bad.', id: "3"},
                                    {text: 'Wrong, too bad.', id: "4"}
                                ],
                                answer: 1


                            }



                        ]
                    };

            return{

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

            // Go to next question
            next: function() {
                this.questionIndex++;
            },
            // Go to previous question
            prev: function() {
                this.questionIndex--;
            },
            // Return "true" count in userResponses
            score: function() {
                return this.userResponses.filter(function(val) {
                    return val
                }).length;
            }

        }
    }
</script>