const BasicPhp=[
    {topicName:'Basic PHP'},
    {
        questionText: 'What does PHP stand for?',
        answerOptions: [
            { answerText: 'Personal House Page', isCorrect: false },
            { answerText: 'Hypertext Preprocessor', isCorrect: true },
            { answerText: 'Pretext Hypertext Processor', isCorrect: false },
            { answerText: 'Preprocessor Home Page', isCorrect: false },
        ],
    },
    {
        questionText: 'Which version of PHP introduced try/catch Exception?',
        answerOptions: [
            { answerText: 'PHP 4', isCorrect: false },
            { answerText: 'PHP 5', isCorrect: true },
            { answerText: 'PHP 5.3', isCorrect: false },
            { answerText: 'PHP 6', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the below symbols is a newline character?',
        answerOptions: [
            { answerText: '\\r', isCorrect: false },
            { answerText: '\\n', isCorrect: true },
            { answerText: '/n', isCorrect: false },
            { answerText: '/r', isCorrect: false },
        ],
    },
    {
        questionText: 'What will be the output of the following PHP code? \n<?php\n$num = 10;\n echo \'What is her age? \n She is $num years old\';\n?>',
        answerOptions: [
            { answerText: 'What is her age?\nShe is $num years old', isCorrect: false },
            { answerText: 'What is her age? \n She is $num years old', isCorrect: true },
            { answerText: 'What is her age? She is 10 years old', isCorrect: false },
            { answerText: 'What is her age?\nShe is 10 years old', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the conditional statements is/are supported by PHP?',
        answerOptions: [
            { answerText: 'if statements and switch statements', isCorrect: false },
            { answerText: 'if-else statements', isCorrect: false },
            { answerText: 'if-elseif statements', isCorrect: false },
            { answerText: 'all of these', isCorrect: true },
        ],
    },
    {
        questionText: 'Who is the father of PHP?',
        answerOptions: [
            { answerText: 'Rasmus Lerdorf', isCorrect: true },
            { answerText: 'Willam Makepiece', isCorrect: false },
            { answerText: 'Drek Kolkevi', isCorrect: false },
            { answerText: 'List Barely', isCorrect: false },
        ],
    },
    {
        questionText: 'What will be the output of the following PHP code?\n  <?php$score = 1234;\n $scoreboard = (array) $score;\n echo $scoreboard[0];\n ?>',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: 'Error', isCorrect: false },
            { answerText: '1234', isCorrect: true },
            { answerText: '2', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the below statements is equivalent to $add += $add?',
        answerOptions: [
            { answerText: '$add = $add', isCorrect: false },
            { answerText: '$add = $add +$add', isCorrect: true },
            { answerText: '$add = $add + 1', isCorrect: false },
            { answerText: '$add = $add + $add + 1', isCorrect: false },
        ],
    },
    {
        questionText: 'Which statement will output $x on the screen?',
        answerOptions: [
            { answerText: 'echo “\$x”;', isCorrect: true },
            { answerText: 'echo “$$x”;', isCorrect: false },
            { answerText: 'echo “/$x”;', isCorrect: false },
            { answerText: 'echo “$x;”;', isCorrect: false },
        ],
    },
    {
        questionText: 'What will be the output of the following PHP code?\n<?php$a = "clue";\n$a .= "get";\necho "$a";\n?>',
        answerOptions: [
            { answerText: 'get', isCorrect: false },
            { answerText: 'true', isCorrect: false },
            { answerText: 'false', isCorrect: false },
            { answerText: 'clueget', isCorrect: true },
        ],
    },
    {
        questionText: 'In how many ways we can create strings in PHP?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '2', isCorrect: true },
            { answerText: '3', isCorrect: false },
            { answerText: '4', isCorrect: false },
        ],
    },
    {
        questionText: 'Which type of string can processes special characters inside quotes?',
        answerOptions: [
            { answerText: 'single quote string', isCorrect: false },
            { answerText: 'double quote string', isCorrect: true },
            { answerText: 'Both A and B', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following is not a Built-in String functions in php?',
        answerOptions: [
            { answerText: 'strlen()', isCorrect: false },
            { answerText: 'str_replace()', isCorrect: false },
            { answerText: 'strpos()', isCorrect: false },
            { answerText: 'strreverse()', isCorrect: true },
        ],
    },
    {
        questionText: 'Why trim() function is used in php?',
        answerOptions: [
            { answerText: 'to remove whitespaces', isCorrect: true },
            { answerText: 'to remove lowercase alphabet', isCorrect: false },
            { answerText: 'to remove uppercase alphabet', isCorrect: false },
            { answerText: 'to remove underscore', isCorrect: false },
        ],
    },
    {
        questionText: 'Which is true about var_dump() function?',
        answerOptions: [
            { answerText: 'var_dump() loops infinitely', isCorrect: false },
            { answerText: 'var_dump() cuts off loop afetr getting same element two times', isCorrect: false },
            { answerText: 'var_dump() cuts off loop after getting the same element three times', isCorrect: false },
            { answerText: 'var_dump() cuts off loop after getting the same element five times', isCorrect: true },
        ],
    },
    {
        questionText: 'How many different data types are available in php?',
        answerOptions: [
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: false },
            { answerText: '8', isCorrect: true },
            { answerText: '9', isCorrect: false },
        ],
    },
    {
        questionText: 'How many compound data types are available in php?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '2', isCorrect: false },
            { answerText: '3', isCorrect: true },
            { answerText: '4', isCorrect: false },
        ],
    },
    {
        questionText: 'Which one is not a data type in PHP?',
        answerOptions: [
            { answerText: 'Resources', isCorrect: false },
            { answerText: 'Objects', isCorrect: false },
            { answerText: 'Null', isCorrect: false },
            { answerText: 'Void', isCorrect: true },
        ],
    },
    {
        questionText: 'The range of integers must lie between ___________?',
        answerOptions: [
            { answerText: '-2^15 to 2^15.', isCorrect: false },
            { answerText: '-2^16 to 2^16.', isCorrect: false },
            { answerText: '-2^31 to 2^31.', isCorrect: true },
            { answerText: '-2^32 to 2^32.', isCorrect: false },
        ],
    },

    {
        questionText: 'How many value does Boolean data type hold?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '2', isCorrect: true },
            { answerText: '3', isCorrect: false },
            { answerText: '4', isCorrect: false },
        ],
    },

    {
        questionText: 'Objects are defined as instances of user defined classes that can hold____?',
        answerOptions: [
            { answerText: 'values', isCorrect: false },
            { answerText: 'functions', isCorrect: false },
            { answerText: 'both values and functions', isCorrect: true },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },

    {
        questionText: 'What will be the output of the following PHP code?',
        answerOptions: [
            { answerText: '0', isCorrect: false },
            { answerText: 'NULL', isCorrect: false },
            { answerText: 'No Output', isCorrect: true },
            { answerText: 'Error', isCorrect: false },
        ],
    },

    // {
    //     questionText: 'ques',
    //     answerOptions: [
    //         { answerText: 'opt', isCorrect: false },
    //         { answerText: 'opt', isCorrect: false },
    //         { answerText: 'opt', isCorrect: false },
    //         { answerText: 'opt', isCorrect: false },
    //     ],
    // },

    


    
    

    

];
export default BasicPhp;