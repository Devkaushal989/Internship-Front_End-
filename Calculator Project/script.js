let calculation = '';
let result = '';

function updateCalculation(text) {
  calculation += text;
  $('.mini-container span').text(calculation);
}

function performCalculation() {
  try {
    result = eval(calculation);
    $('.mini-container span').text(result);
    calculation = '';
  } catch (error) {
    $('.mini-container span').text('Error');
    calculation = '';
  }
}

function clearCalculation() {
  calculation = '';
  result = '';
  $('.mini-container span').text('Ans');
}


$('.buttons button').on('click', function () {
  const buttonText = $(this).text();
  switch (buttonText) {
    case '=':
      performCalculation();
      break;
    case 'CE':
      clearCalculation();
      break;
    case 'Ac':
      clearCalculation();
      break;
    case '+':
      updateCalculation(buttonText);
      break;
    case '-':
      updateCalculation(buttonText);
      break;
    case '%':
      updateCalculation(buttonText);
      break;
    case '/':
      updateCalculation(buttonText);
      break;
    case '.':
      updateCalculation(buttonText);
      break;
    default:
      updateCalculation(buttonText);
  }
});