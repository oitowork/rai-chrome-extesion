export const printLine = (line) => {
  console.log('===> FROM THE PRINT MODULE:', line);
  console.log('Thayrone');
};
// function findPrice(node) {
//   node = node || document.body;
//   var text = node.textContent || node.innerText,
//     regex = /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/,
//     match = text.match(regex);

//   if (match) {
//     var children = node.children,
//       l = children.length,
//       i;
//     for (i = 0; i < l; i++) {
//       if (findPrice(children[i])) {
//         return children[i];
//       }
//     }
//     // if no children matched, then this is the narrowest container
//     return node;
//   }
// }
// const result = findPrice();

let regex = /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/g;

window.onload(
  (document.body.innerHTML = document.body.innerHTML.replace(
    regex,
    'RAI'
  ))
);

/*
(function () {
  setInterval(() => {
    document.body.innerHTML = document.body.innerHTML.replace(
      regex,
      'Qualquer valor'
    );
  }, 2000);
})();*/
