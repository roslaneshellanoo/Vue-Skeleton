function questionView(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer
}

let Russia = new Question(
    'Russia capital city',
    ['Moscow', 'Rostov', 'Novgorod', 'Saint-Petersburg'],
    'Moscow'
);

let France = new Question(
    'France capital city',
    ['Nice', 'Marsel', 'Paris', 'Bordo'],
    'Paris'
);

let questions = [Russia, France];


