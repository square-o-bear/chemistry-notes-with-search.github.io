const atomicMasses = {
    H: 1.008,
    He: 4.003,
    Li: 6.94,
    Be: 9.012,
    B: 10.81,
    C: 12.011,
    N: 14.007,
    O: 15.999,
    F: 18.998,
    Ne: 20.18,
    Na: 22.99,
    Mg: 24.305,
    Al: 26.982,
    Si: 28.085,
    P: 30.974,
    S: 32.06,
    Cl: 35.45,
    Ar: 39.948,
    K: 39.098,
    Ca: 40.078,
    Sc: 44.956,
    Ti: 47.867,
    V: 50.942,
    Cr: 51.996,
    Mn: 54.938,
    Fe: 55.845,
    Co: 58.933,
    Ni: 58.693,
    Cu: 63.546,
    Zn: 65.38,
    Ga: 69.723,
    Ge: 72.63,
    As: 74.922,
    Se: 78.971,
    Br: 79.904,
    Kr: 83.798,
    Rb: 85.468,
    Sr: 87.62,
    Y: 88.906,
    Zr: 91.224,
    Nb: 92.906,
    Mo: 95.95,
    Tc: 98,
    Ru: 101.07,
    Rh: 102.906,
    Pd: 106.42,
    Ag: 107.868,
    Cd: 112.414,
    In: 114.818,
    Sn: 118.71,
    Sb: 121.76,
    Te: 127.6,
    I: 126.90
    }
  
function parseFormula(formula) {

  let fullMulti = 1;
  while ('0' <= formula[0] && formula[0] <= '9') {
    fullMulti *= parseInt(formula[0]);
    formula = formula.slice(1);
  }

  const stack = [{}]; 
  let i = 0;

  while (i < formula.length) {
    let char = formula[i];

    if (char === '(') {
      stack.push({});
      i++;
    } else if (char === ')') {
      const group = stack.pop();
      i++;

      let numStr = '';
      while (i < formula.length && /\d/.test(formula[i])) {
        numStr += formula[i];
        i++;
      }
      const multiplier = numStr ? parseInt(numStr, 10) : 1;

      const top = stack[stack.length - 1];
      for (const el in group) {
        top[el] = (top[el] || 0) + group[el] * multiplier;
      }
    } else {

      let element = char;
      if (i + 1 < formula.length && /[a-z]/.test(formula[i + 1])) {
        element += formula[i + 1];
        i += 2;
      } else {
        i++;
      }

      let numStr = '';
      while (i < formula.length && /\d/.test(formula[i])) {
        numStr += formula[i];
        i++;
      }
      const count = numStr ? parseInt(numStr, 10) : 1;

      const current = stack[stack.length - 1];
      current[element] = (current[element] || 0) + count;
    }
  }

  if (stack.length !== 1) {
    throw new Error('Несбалансированные скобки');
  }

  return [stack[0], fullMulti];
}

function calculateMolarMass() {
  const input = document.getElementById('formula').value.trim();
  const resultDiv = document.getElementById('result');
 
  // Сбрасываем высоту и делаем прозрачным перед обновлением
  resultDiv.style.transition = 'none';
  resultDiv.style.opacity = '0';
  resultDiv.style.height = 'auto'; // Чтобы анимация высоты работала
  resultDiv.style.overflow = 'hidden';

  if (!input) {
    resultDiv.textContent = 'Пожалуйста, введите химическую формулу.';
    resultDiv.className = 'error';
    return;
  }

  try {
    const parts = input.split(' ').join('').split('+').map(part => part.trim()).filter(part => part.length > 0);

    if (parts.length === 0) {
      throw new Error('Пустая формула');
    }

    let totalMass = 0;

    for (const part of parts) {
      const formulaPars = parseFormula(part);
      const composition = formulaPars[0];
      const fullMulti = formulaPars[1];
      let partMass = 0;

      for (const element in composition) {
        if (!(element in atomicMasses)) {
          throw new Error(`Неизвестный элемент: "${element}" в формуле "${part}"`);
        }
        partMass += atomicMasses[element] * composition[element];
      }

      totalMass += partMass*fullMulti;
    }

    if (totalMass.toFixed(3) == 0) {
      throw new Error('Пожалуйста, введите химическую формулу.');
    }

    resultDiv.textContent = `Молярная масса: ${totalMass.toFixed(3)} г/моль`;
    resultDiv.className = 'success';
  } catch (error) {
    resultDiv.textContent = `Ошибка: ${error.message}`;
    resultDiv.className = 'error';
  }

  setTimeout(() => {
    resultDiv.style.transition = '';
    resultDiv.style.opacity = '1';
  }, 0);
}

document.getElementById('formula').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    calculateMolarMass();
  }
});