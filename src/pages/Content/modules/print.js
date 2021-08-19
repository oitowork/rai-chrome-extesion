import currency from 'currency.js';
import findAndReplaceDOMText from 'findandreplacedomtext';

export const printLine = (line) => {
  console.log('===> FROM THE PRINT MODULE:', line);
};

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
  /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/g,
  /\b(?<usd1>\d+(?:\.\d+)?)\s*(?:USD|US\s*Dollar|US-Dollar)\b/g,
  /\$(?<usd2>\d+(?:\.\d+)?)\b/g,
];
// /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/g;

window.addEventListener('load', function () {
  setInterval(() => {
    findAndReplaceDOMText(document.body, {
      preset: 'prose',
      find: /\$\s*(\d{1,3}(\,\d{3})*|(\d+))(\.\d{0,9})?/g,
      replace: function (portion) {
        console.log(portion.text);

        let rai = currency(portion.text).multiply(3.02);
        return `${rai} RAI`;
      },
    });
  }, 1500);

  alert("It's loaded!");
});
// ^(([1-9]\d{0,2}(\.\d{3})*)|(([1-9]\.\d*)?\d))(\,\d\d)?
/* /(?:\$|USD|US\s*Dollar|US-Dollar|US\$\s*)[0-9,]+(?:\s*\.\s*\d{2})?/g*/

// function usdToRai() {
//   // let regex = /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/g;
//   const scroll = window.addEventListener('scroll', () => {
//     findAndReplaceDOMText(document.body, {
//       find: /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/g,
//       replace: 'vaii',
//     });
//   });

//   return () => {
//     window.removeEventListener('scroll', scroll);
//   };
// }
// usdToRai();

/*
