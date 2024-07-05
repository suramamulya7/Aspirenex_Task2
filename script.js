// Sample data structure to store quizzes
let quizzes = [];

// Function to add a question to the current quiz being created
function addQuestion() {
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const answer = document.getElementById('answer').value;

    const newQuestion = {
        question: question,
        options: [option1, option2, option3],
        answer: answer
    };

    quizzes.push(newQuestion);
    console.log(quizzes); // For testing - remove in production
}

// Function to save the current quiz
function saveQuiz() {
    // Simulate saving quizzes to backend or local storage
    console.log('Quiz Saved:', quizzes);
    // Clear form or reset quizzes array for next quiz
}

// Function to display all quizzes
function displayQuizzes() {
    const quizList = document.getElementById('quizList');
    quizList.innerHTML = '';

    quizzes.forEach((quiz, index) => {
        const li = document.createElement('li');
        li.textContent = `Quiz ${index + 1}`;
        quizList.appendChild(li);
    });
}

// Function to display questions for a selected quiz
function displayQuizQuestions() {
    const quizQuestions = document.getElementById('quizQuestions');
    quizQuestions.innerHTML = '';

    // Example: Display questions for the first quiz in the list
    const selectedQuiz = quizzes[0];
    selectedQuiz.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.textContent = option;
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quizOption';
        radio.value = `option${index + 1}`;
        quizQuestions.appendChild(label);
        quizQuestions.appendChild(radio);
        quizQuestions.appendChild(document.createElement('br'));
    });
}

// Function to submit a quiz
function submitQuiz() {
    // Calculate score and display results
    console.log('Quiz Submitted');
}

// Initial call to display quizzes (for testing)
displayQuizzes();
