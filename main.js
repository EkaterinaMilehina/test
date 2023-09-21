const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let input = '';
let first = '';
let operator = '';
let second = '';


buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    const content = btn.getAttribute('value');
    if ((content >= '0' && content <= '9') && operator === '') {
      input = input + content;
      first = first + content;
    } else if ((content === '.') && (first !== '')  && (second === '')) {
      if (first.indexOf('.') === -1) {
        input = input + content;
        first = first + content;
      }
    } else if ((content === '+' || content === '-' || content === 'x' || content === '/') && (first !== '' && first !== '-') && (operator === '' && first[first.length - 1] !== '.')) {
      operator = content;
      input = input + content;
    } else if ((content === '-') && (first === '')) {
      input = input + content;
      first = first + content;
    } else if ((content >= '0' && content <= '9') && operator !== '') {
      input = input + content;
      second = second + content;
    } else if ((content === '.') && (second !== '')) {
      if (second.indexOf('.') === -1) {
        input = input + content;
        second = second + content;
      }
    } else if (operator === '/' && second === '0') {
      input = 'Error';
    } else if ((content === '=') && (first !== '') && (second !== '') && (second[second.length - 1] !== '.')) {
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