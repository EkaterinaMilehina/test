const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let input = '';
let first = '';
let operator = '';
let second = '';


buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    const content = btn.getAttribute('value');
    if ((content >= '0' && content <= '9') && (operator === '')) {
      input = input + content;
      first = input;
      if (input.length > 15) {
        input = input.substring(0, 15);
      }
    } else if ((content === '.') && (first !== '')) {
      input = input + content;
      first = first + content;
      if (input.length > 15) {
        input = input.substring(0, 15);
      }
    } else if ((content === '+' || content === '-' || content === 'x' || content === '/') && (first !== '')) {
      input = '';
      operator = content;
    } else if ((content >= '0' && content <= '9' || content === '.') && (operator !== '')) {
      input = input + content;
      second = input;
    } else if ((content === '=') && (first !== '') && (second !== '')) {
      if (operator === '+') {
        input = parseFloat(first) + parseFloat(second);
      } else if (operator === '-') {
        input = parseFloat(first) - parseFloat(second);
      } else if (operator === 'x') {
        input = parseFloat(first) * parseFloat(second);
      } else if (operator === '/') {
        input = parseFloat(first) / parseFloat(second);
      }
    } else if (content === 'C') {
      input = '';
      first = '';
      operator = '';
      second = '';
    }
    display.value = input;
  })
});