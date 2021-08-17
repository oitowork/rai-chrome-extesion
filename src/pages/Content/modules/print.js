export const printLine = (line) => {
  console.log('===> FROM THE PRINT MODULE:', line);
  console.log('Thayrone');
};
function findPrice(node) {
  node = node || document.body;
  var text = node.textContent || node.innerText,
    regex = /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/,
    match = text.match(regex);
  if (match) {
    var children = node.children,
      l = children.length,
      i;
    for (i = 0; i < l; i++) {
      if (findPrice(children[i])) {
        return children[i];
      }
    }
    // if no children matched, then this is the narrowest container
    return node;
  }
}
var result = findPrice();
console.log()

// Exemplo utilizando laço for
for (var span of result.children) {
  // console.log((span.innerText));
}

console.log(result.children);
// Exemplo utilizando métodos do array
Array.from(result.children)
  .filter((span) => span.innerText === 'Your neth worth')
  .forEach((span) => console.log(span));

alert('oi');
