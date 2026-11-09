const h1 = document.querySelector("h1");
const btn_hidden = document.querySelector('.btn_hidden');
const p = document.querySelector("p");
const btn_color = document.querySelector('.btn_color');
const btn_text = document.querySelector('.btn_text');
const pEL = document.querySelectorAll('.description');
const btn_newObject = document.querySelector('.btn_newObject');
const pNew = document.createElement('p');
const btn_del = document.querySelector('.btn_del');

//Задание 1
btn_hidden.addEventListener("click", () => {
    h1.hidden = !h1.hidden;
});

//Задание 2
btn_color.addEventListener("click", () => {
    p.style.color = 'blue';
});

//Задание 3
btn_text.addEventListener("click", () => {
    h1.textContent = 'Привет, мир!';
});

//Задание 4
pEL.forEach(pEL => {
    pEL.textContent = 'Измененный текст';
});

//Задание 5
pEL.forEach(pEL => {
    pEL.textContent = 'Новый текст'
});

//Задание 6
btn_newObject.addEventListener("click", () => {
    pNew.textContent = 'Новый абзац';
    document.body.appendChild(pNew);
})

//Задание 7
btn_del.addEventListener("click", () => {
    document.querySelector('.description').remove();
})