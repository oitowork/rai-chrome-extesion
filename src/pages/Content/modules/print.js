import currency from 'currency.js';
import findAndReplaceDOMText from 'findandreplacedomtext';
import { fetchAllPricesInUSD } from '../../../constants/rai-thegraph-api';
export const printLine = (line) => {
  console.log('===> FROM THE PRINT MODULE:', line);
};

function toFloat(num) {
  const cleanStr = String(num).replace(/[^0-9.,-]/g, '');
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
    `${integerPart.replace(/[^0-9-]/g, '')}.${decimalPart.replace(
      /[^0-9]/g,
      ''
    )}`
  );
}
function toFloatBetween0and1(num) {
  let dotPos = num.indexOf('.');
  let commaPos = num.indexOf(',');
  let sep;
  if (dotPos < 0) dotPos = 0;

  if (commaPos < 0) commaPos = 0;

  if (dotPos > commaPos && dotPos) sep = dotPos;
  else {
    if (commaPos > dotPos && commaPos) sep = commaPos;
    else sep = false;
  }

  if (sep === false) return num.replace(/[^\d-]/g, '');

  return (
    num.substr(0, sep).replace(/[^\d-]/g, '') +
    '.' +
    num.substr(sep + 1, num.length).replace(/[^0-9]/, '')
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
  /\$\s*[0-9,]+\d+[K?M?B?T]/, //\\$\\d+((,|\\.)?)(\\d*)?(m)?
  /US\$\s*?-?(\d{1,3}(\.\d{3})*|(\d+))(,\d{0,9})?/g,
  /\$\s*?-?(\d{1,3}(.\d{3})*|(\d+))(\.\d{0,9})?/g,
  /\$\s*?-?(\d{1,3}(,\d{3})*|(\d+))(\.\d{0,9})?/g,
]; //US$
// /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/g;
function isNumberBetween0and1(num, raiValue, allNumber) {
  let isZero = num.substr(0, 1);
  let vi = toFloat(allNumber);
  // console.log(vi);
  if (isZero === '0' || isZero === '-') {
    return currency(toFloatBetween0and1(allNumber), {
      symbol: '',
      decimal: '.',
      separator: ',',
      precision: 6,
    })
      .multiply(raiValue)
      .format();
  } else {
    return currency(toFloat(allNumber), {
      symbol: '',
      decimal: '.',
      separator: ',',
    })
      .multiply(raiValue)
      .format();
  }
}

export const turnOn = async () => {
  const response = await fetchAllPricesInUSD();
  const raiValue = response.RAI;

  regex.map((reg) => {
    return setInterval(() => {
      findAndReplaceDOMText(
        document.querySelector('*:not(script):not(noscript):not(style)'),
        {
          find: reg,
          portionMode: 'retain',
          replace: function (portion) {
            console.log(portion.text);
            const usdNumber = portion.text.replace(/[^\d,.-]|/g, '');
            // console.log(usdNumber);
            const oito = isNumberBetween0and1(usdNumber, raiValue, usdNumber);
            return `${oito} RAI`;
          },
        }
      );
    }, 1500);
  });
};
turnOn();
const num = '$ 1,67B';
const v = num.replace(/[^\d,.-]|/g, '');
// console.log(toFloat(v) * 2);
// chrome.runtime. .addListener(function (request, sender, sendResponse) {
//   console.log(sendResponse);

//   if (request.greeting == 'hello') sendResponse({ farewell: 'goodbye' });
// });

// seleciona o nó alvo
let allDocument = document.body;

// cria uma nova instância de observador
let observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // console.log(mutation);
  });
});

// configuração do observador:
let config = { childList: true, subtree: true };

// passar o nó alvo, bem como as opções de observação
observer.observe(allDocument, config);

// mais tarde você pode parar de observar
//observer.disconnect();

// console.log(toFloat(num1));
const replaceOnDocument = (
  pattern,
  string,
  { target = document.body } = {}
) => {
  // Handle `string` — see the last section
  [
    target,
    ...target.querySelectorAll('*:not(script):not(noscript):not(style)'),
  ].forEach(({ childNodes: [...nodes] }) =>
    nodes
      .filter(({ nodeType }) => nodeType === document.TEXT_NODE)
      .forEach(
        (textNode) =>
          (textNode.textContent = textNode.textContent.replace(pattern, string))
      )
  );
};
