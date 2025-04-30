let num1, num2, operator, correctAnswer;

function generateQuestion() {
  const operators = ['+', '-', '*', '/'];
  operator = operators[Math.floor(Math.random() * operators.length)];

  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;

  if (operator === '/') {
    correctAnswer = num1;
    num2 = Math.floor(Math.random() * 10) + 1;
    num1 = num2 * correctAnswer;
  }

  document.getElementById('num1').textContent = num1;
  document.getElementById('num2').textContent = num2;
  document.getElementById('operator').textContent = operator;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '/':
      correctAnswer = num1 / num2;
      break;
  }

  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('answer').value);

  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Benar! 🎉';
    document.getElementById('result').style.color = 'green';
  } else {
    document.getElementById('result').textContent = `Salah. Jawaban yang benar adalah ${correctAnswer}`;
    document.getElementById('result').style.color = 'red';
  }

  setTimeout(generateQuestion, 2000);
}

window.onload = generateQuestion;
