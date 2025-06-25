const display = document.getElementById('display');

function press(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Erro';
  }
}

function clearDisplay() {
  display.value = '';
}