const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Saturn", "Mars", "Earth", "Jupiter"],
    answer: "Jupiter"
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    choices: ["China", "Japan", "India", "Korea"],
    answer: "Japan"
  },
  {
    question: "What is the chemical symbol for gold?",
    choices: ["Ag", "Fe", "Cu", "Au"],
    answer: "Au"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: ["F. Scott Fitzgerald", "J.D. Salinger", "Harper Lee",  "Mark Twain"],
    answer: "Harper Lee"
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
    answer: "Mount Everest"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the largest ocean on Earth?",  
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Who is the author of '1984'?",
    choices: ["George Orwell", "J.K. Rowling", "Stephen King", "J.R.R. Tolkien"],
    answer: "George Orwell"
  },
  {
    question: "What is the capital of Australia?",
    choices: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    answer: "Canberra"
  },
  {
    question: "What is the smallest country in the world?",
    choices: ["Vatican City", "Monaco", "Nauru", "San Marino"],
    answer: "Vatican City"
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen"
  },
  {
    question: "Who painted the 'Last Supper'?",
    choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2", "N2"],
    answer: "H2O"
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    choices: ["F. Scott Fitzgerald", "Mark Twain", "J.D. Salinger", "Harper Lee"],
    answer: "F. Scott Fitzgerald"
  },
  {
    question: "What is the tallest mountain in Africa?",
    choices: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Elbrus"],
    answer: "Mount Kilimanjaro"
  },
  {
    question: "Which planet is known as the 'Gas Giant'?",
    choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter"
  },
  {
    question: "What is the largest desert in the world?",
    choices: ["Sahara", "Arctic", "Antarctic", "Gobi"],
    answer: "Sahara"
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    choices: ["Jane Austen", "Emily Bronte", "Charlotte Bronte", "Virginia Woolf"],
    answer: "Jane Austen"
  },
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "Who painted the 'Mona Lisa'?",
    choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest animal on Earth?",
    choices: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "What is the chemical symbol for oxygen?",
    choices: ["O2", "H2O", "CO2", "N2"],
    answer: "O2"
  }
];

var currentQuestionIndex = 0;
var score = 0;
var timer;
var timeLeft = 15;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer"); // Ensure this element exists

function startTimer() {
  timeLeft = 15;
  timerEl.innerText = `Time left: ${timeLeft}s`;
  
  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `Time left: ${timeLeft}s`;
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function showQuestion() {
  clearInterval(timer); // Reset the timer for each question
  startTimer();

  choicesEl.innerHTML = "";
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.onclick = () => selectAnswer(choice, button); // Pass button as an argument
    choicesEl.appendChild(button);
  });
  nextBtn.style.display = "none"; // Hide Next button until answer selected
}

function selectAnswer(choice, selectedButton) {
  clearInterval(timer); // Stop timer after answer is selected
  const currentQuestion = questions[currentQuestionIndex];

  if (choice === currentQuestion.answer) {
    score++;
    selectedButton.style.backgroundColor = "#28a745"; // Correct answer (green)
  } else {
    selectedButton.style.backgroundColor = "#dc3545"; // Incorrect answer (red)
  }

  Array.from(choicesEl.children).forEach(button => {
    button.disabled = true;
    if (button.innerText === currentQuestion.answer) {
      button.style.backgroundColor = "#28a745"; // Correct answer
    }
  });

  nextBtn.style.display = "block"; // Show Next button after answer selected
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
    scoreEl.innerText = `Score: ${score}`;
  } else {
    endQuiz();
  }
};

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  questionEl.innerText = "Quiz completed!";
  choicesEl.innerHTML = `Your final score is ${score} out of ${questions.length}.`;
  nextBtn.style.display = "none";
  timerEl.innerText = "";
  scoreEl.innerText = `Final Score: ${score}`;
}

showQuestion(); // Start the quiz
