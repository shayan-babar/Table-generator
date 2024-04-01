//
let btn = document.getElementById('btn')
btn.addEventListener('click', table)
function table(e) {
  let inp = document.getElementById('inp')
  let num = inp.value
  inp.value = ""
  let i = 1;
  let j = 0;
  while (i <= 10 && j < 10) {
    let tab = num * i;
    i++;
    j++
    let ul = document.getElementById('ou-ul')
    let list = document.createElement('li')
    list.textContent = num + " x " + j + " = " + tab
    ul.appendChild(list)
  }
}
//

//clear 
let btn2 = document.getElementById('btn-2')
btn2.addEventListener('click', clear)
function clear(el) {
  let bt = el.currentTarget
  let li = bt.previousElementSibling.textContent = " "
};
//
