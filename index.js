function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll("#app .ranked-list li");
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
  return lis;
} 

function deepestChild() {
  let d = document.querySelectorAll('#grand-node div');
  let a = [];
  
  for (let i = 0; i < d.length; i++) {
		a.push(d[i]);
  }
  return a[a.length-1];
//return document.querySelector('#grand-node div div div div');
}