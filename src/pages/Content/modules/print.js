export const printLine = (line) => {
  console.log('===> FROM THE PRINT MODULE:', line);
};


function replaceToRAI() {
  let regex = /\$\s*[0-9,]+(?:\s*\.\s*\d{2})?/g;
  let result = document.body.innerHTML = document.body.innerHTML.replace(
    regex,
    'RAI'
  )
  return result;
}

let oldDOM = document.body.innerHTML;


export const turnONToRAI = () => {
  let result = replaceToRAI(); // undefined, the function does not return anything
  window.onload = result; 
  console.log('Extesion TurnON');
}

export const turnOFFToRAI = () => {
  let result = oldDOM;
  window.load = result;
  console.log('Extesion Turn OFF');
  
}

/*
(function () {
  setInterval(() => {
    document.body.innerHTML = document.body.innerHTML.replace(
      regex,
      'Qualquer valor'
    );
  }, 2000);
})();*/
