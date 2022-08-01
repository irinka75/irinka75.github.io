const minVal = document.getElementById("minVal");
const maxVal = document.getElementById("maxVal");
const randomList = document.getElementById("randomList");
const btn = document.getElementById("btn");
 
//Генерує цілі числа в даному діапазоні (min, max)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
// Повертає рядок (результат)
function generateRandom(min, max) {
  let res = getRandomInt(min, max) + ", ";
  res = res.trim(); // удалить лишние пробелы
  // удалить последнюю запятую в списке
  return res.substring(0, res.length - 1);
}
 
function addRandomList() {
  // Введенные значения в форму
  const min = minVal.value;
  const max = maxVal.value;
  
 
  // Якщо значення не введено, то виводить про помилку
  if (!min || !max ) {
    let liElem = document.createElement("li");
    liElem.className = "list-group-item";
    liElem.style = "font-size: 18px; color: red; padding: 7px 15px;";
    liElem.textContent = "No data entered";
    randomList.appendChild(liElem);
    return;
  }
 
  // Додає результат на сторінку
  let strResult = generateRandom(min, max);
  let liElem = document.createElement("li");
  liElem.className = "list-group-item";
  liElem.style = "font-size: 18px; padding: 7px 15px;";
  liElem.textContent = strResult;
  randomList.appendChild(liElem);
}
 
// Обробник натискання на кнопку
btn.addEventListener("click", addRandomList);