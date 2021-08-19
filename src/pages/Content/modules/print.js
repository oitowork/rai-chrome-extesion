import currency from 'currency.js';
import findAndReplaceDOMText from 'findandreplacedomtext';

export const printLine = (line) => {
  console.log('===> FROM THE PRINT MODULE:', line);
};
function toFloat(num) {
  const cleanStr = String(num).replace(/[^0-9.,]/g, '');
  let dotPos = cleanStr.indexOf('.');
  let commaPos = cleanStr.indexOf(',');

  if (dotPos < 0) dotPos = 0;

  if (commaPos < 0) commaPos = 0;

  const dotSplit = cleanStr.split('.');
  const commaSplit = cleanStr.split(',');

  const isDecimalDot =
    dotPos &&
    ((commaPos && dotPos > commaPos) ||
      (!commaPos && dotSplit[dotSplit.length - 1].length === 2));

  const isDecimalComma =
    commaPos &&
    ((dotPos && dotPos < commaPos) ||
      (!dotPos && commaSplit[commaSplit.length - 1].length === 2));

  let integerPart = cleanStr;
  let decimalPart = '0';
  if (isDecimalComma) {
    integerPart = commaSplit[0];
    decimalPart = commaSplit[1];
  }
  if (isDecimalDot) {
    integerPart = dotSplit[0];
    decimalPart = dotSplit[1];
  }

  return parseFloat(
    `${integerPart.replace(/[^0-9]/g, '')}.${decimalPart.replace(
      /[^0-9]/g,
      ''
    )}`
  );
}

function replaceToRAI() {
  let regex = /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/g;
  let result = (document.body.innerHTML = document.body.innerHTML.replace(
    regex,
    'RAI'
  ));
  return result;
}

let oldDOM = document.body.innerHTML;

export const turnONToRAI = () => {
  let result = replaceToRAI(); // undefined, the function does not return anything
  window.onload = result;
  console.log('Extesion TurnON');
};

export const turnOFFToRAI = () => {
  let result = oldDOM;
  window.load = result;
  console.log('Extesion Turn OFF');
};
const regex = [
  /US\$\s*(\d{1,3}(\.\d{3})*|(\d+))(,\d{0,9})?/g,
  /\$\s*(\d{1,3}(,\d{3})*|(\d+))(\.\d{0,9})?/g,
]; //US$
// /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/g;

window.addEventListener('load', function () {
  regex.map((reg) => {
    return setInterval(() => {
      findAndReplaceDOMText(document.body, {
        preset: '',
        find: reg,
        forceContext: true,
        replace: function (portion) {
          // console.log(portion.text);
          const usdNumber = portion.text.replace(/[^\d,.-]|/g, '');
          // console.log(toFloat(usdNumber));
          const oito = currency(toFloat(usdNumber), {
            symbol: '',
            decimal: '.',
            separator: ',',
          })
            .multiply(3.01)
            .format();

          return `${oito} RAI`;
        },
      });
    }, 1000);
  });
});
