'use strict';

// Lesson 19 Практика часть 1. Начинаем создавать проиложение для консоли

// const  numberOfFils =  +prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMovieDB = {
// 	count:numberOfFils,
// 	muvies:{},
// 	actors:{},
// 	genres:[],
// 	privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
// 	b = prompt('На сколько оцените его?', ''),
// 	c = prompt('Один из последних просмотренных фильмов', ''),
// 	d = prompt('На сколько оцените его?', '');

// personalMovieDB.muvies[a] = b;
// personalMovieDB.muvies[c] = d;

// console.log(personalMovieDB);



// Lesson 20  Условия

// const nums = 50;
// if (8 == 9){
// 	console.log('ok');
// }else {
// 	console.log('error');
// }

// if (nums < 50) {
// 	console.log('мало');
// }else if (nums > 50) {
// 	console.log('много');
// }else {
// 	console.log('ok');
// }

// const nums = 50;
// switch (nums) {
// 	case 49:
// 		console.log('мало');
// 		break;
// 	case 100:
// 		console.log('Много');
// 		break;
// 	case 51:
// 		console.log('Да');
// 		break;
// 	default:
// 		console.log('Не в этот раз');	
// 		break;		
// }

// Тернарный оператор
// const nums = 50;
// (nums === 50) ? console.log('ok') : console.log('error');



// Lesson 21 Логические операторы

// const hamburger = true,
// 	fris = true;

// if (hamburger && fris){
// 	console.log("Я сыт");
// }
// console.log((hamburger && fris));

// const hamburger = 3,
// 	fris = 1,
// 	cola = 0;
// console.log(hamburger ===3 && cola && fris);

// console.log(1 && 0);
// console.log(5 && 1);
// console.log(null && 5);
// console.log(0 && 'rrrrrrrrrrrr');
// // && Всегда запинается на false
// // && Всегда выдаёт последний правдивый элемент

// if (hamburger ===3 && cola ===1 && fris){
// 	console.log("Все сыты");
// }else {
// 	console.log('Мы уходим');
// }

//  || Запинается на правде
//  || Если всё false, то возвращается последнее ложное значение
// const hamburger = 0,
// 	fris = null,
// 	cola = 0;

// if (hamburger ===3 || cola ===1 || fris){
// 	console.log("Все довольн");
// }else {
// 	console.log('Мы уходим');
// }
// console.log((hamburger ===3 || cola ===1 || fris));


// let jonnReport, alexReport, samReport, mariaReport = 'done';
// console.log( jonnReport || alexReport || samReport || mariaReport);

// const hamburger = 3,
// 	fris = 3,
// 	cola = 0,
// 	tee = 2;
	

// if (hamburger ===3 && cola ===2 || fris ===3 && tee){
// 	console.log("Все довольн");
// }else {
// 	console.log('Мы уходим');
// }
// console.log(hamburger ===3 && cola ===2);
// console.log( fris ===3 && tee);
// console.log((hamburger ===3 && cola ===2 || fris ===3 && tee));

// console.log(!0);

// Задание Что выводится в консолле
// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log(!1 && 2 || !3);
// console.log(25 || null && !3);
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1|| 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }



// Lesson 22 Цыклы

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++
// }

// do {
//     console.log(num);
//     num++
// }while (num <= 55);

// for (let i = 1; i < 8; i++){
//     // console.log(i);
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 10; i++){
//     if (i === 6){
//         // break;
//         continue;
//     }
//     console.log(i); 
// }