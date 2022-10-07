function topSalaries( people ) {
  return people.sort( (a,b) => Number.parseFloat(b[11])-Number.parseFloat(a[11]) ).slice(0, 5);
}

function topEmployees( people ) {
  return people.filter( a => Number.parseFloat(a[11]) >= 200000 );
} 

function renderTop( boston, container, topFunc, id ) {
  const people = boston.data;

  let top = topFunc( people );
  let div = document.createElement('div');
  div.setAttribute('id', id);

  let htmlText = '<ul>';
  for( let i = 0; i < top.length; i++) {
    htmlText += `<li>${top[i][8]}</li><li>${top[i][11]}</li>`; 
  }
  htmlText += "</ul>";

  div.innerHTML = htmlText;
  container.appendChild(div);
}

renderTop(boston, document.getElementById('container'), topEmployees, 'topEmployees');
renderTop(boston, document.getElementById('container'), topSalaries, 'topSalaries');
