'use strict';

// lesson 45. События и их обработчики

// const btn1 = document.querySelector('button');

// btn1.onclick = function() {
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });
// btn.addEventListener('click', () => {
//     alert('second click');
// });

// btn.addEventListener('mouseenter', () => {
//     console.log('mouseenter');
// });

// btn.addEventListener('mouseenter', (e) => {
// console.log(e);
// console.log(e.target);
// e.target.remove();
// console.log('mouseenter');
// });

// let i = 0;
// const deletElement = (e) => {
// 	console.log(e.target);
// 	i++;
// 	if (i == 2){
// 		btn.removeEventListener('click', deletElement);
// 	}   
// };
// btn.addEventListener('click', deletElement);

// Всплытие
// const overlay = document.querySelector('.overlay');
// const deletElement = (e) => {
// 	console.log(e.type);
// 	console.log(e.currentTarget);
// };
// btn.addEventListener('click', deletElement);
// overlay.addEventListener('click', deletElement);

// Отменять стандартное поведение браузера
// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	console.log(event.target);
// });

// Одинаковое действие приклике на разные элементы
const btn = document.querySelectorAll('.btn');
const btns = document.querySelectorAll('button');
btns.forEach(item => {
	item.addEventListener('click', () => {
		btn.forEach(i => {
			i.style.backgroundColor = 'red';
		});
		item.style.backgroundColor = 'blue';
		console.log('elya');
	});
	// Опция once:
	// ,{once: true}
	// ,false
	//  );
});



