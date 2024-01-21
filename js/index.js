/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

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

// let num = 50;

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



// Lesson 23 Цыклы в цыкле и метки

// for (let i =0; i < 3; i++){
// 	console.log(i);
// 	for (let j =0; j < 3; j++){
// 		console.log(i);
// 	}
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;
// for (let i =1; i < lenght; i++){
// 	for(let j = 0; j < i; j++){
// 		result +='*';
// 	}
// 	result +='\n';
// }
// console.log(result);

// first: for (let i =0; i < 3; i++){
// 	console.log(`First level: ${i}`);
// 	for (let j =0; j < 3; j++){
// 		console.log(`Second level: ${j}`);
// 		for (let k =0; k < 3; k++){
// 			if (k === 2) continue first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }

// first: for (let i =0; i < 3; i++){
// 	console.log(`First level: ${i}`);
// 	for (let j =0; j < 3; j++){
// 		console.log(`Second level: ${j}`);
// 		for (let k =0; k < 3; k++){
// 			if (k === 2) break first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }

// let str = '';

// loop1: for (let i = 0; i < 5; i++) {
//   if (i === 1) {
//     continue loop1;
//   }
//   str = str + i;
// }

// console.log(str);



//Coding Exercise 3: Задания на использование циклов и услови

// let result = '';
// const lenght = 10;

// for (let i = 1; i < lenght; i++){
// 	for (let j = 0; j < i; j++){
// 		result += '*';
// 	}
// 	result += '\n';
// }
// console.log(result);

// elya: for ( let i = 0; i < 3; i++){
// 	console.log(`First level : ${i}`);
// 	for (let j = 0; j < 3; j++){
// 		console.log(`Second Level: ${j}`);
// 		for (let k = 0; k < 5; k++){
// 			if(k === 3)break elya;
// 			console.log(`Third Level: ${k}`);
// 		}
// 	}
// }

// Место для первой задачи
// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++){
//         result[i] = arr[i];
//     }
//     console.log(result);
//     return result;
// }
// firstTask();

// Место для второй задачи
// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++){
//        if (typeof(data[i]) === 'number'){
//         data[i] = data[i] * 2;
//        }else {
//         if (typeof(data[i]) === 'string'){
//             data[i] = `${data[i]} - done`;
//         }
//        }
//     }
//     console.log(data);
//     return data;
// }
// secondTask();

// Место для третьей задачи
// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++){
//         result[i - 1] = data[data.length - i]
//     }
//     console.log(result);
//     return result;
// }
// thirdTask();


// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)




// Lesson 25 Функции стрелочные

// let num = 20;
// function ret() {
// 	let num = 50;
	
// 	return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);
// console.log(num);

// let logger = function(){
// 	console.log('Hello');
// };
// logger();

// const calc = (a, b) => a + b;
// const calcTwo= (a, b) => {
// 	console.log('1');
// 	return a + b;
// };
// console.log(calc(2, 2));
// console.log(calcTwo(5, 5));



// Lesson 26  Ещё паз про аргументы функций. Валюты.

// const usaCurs = 28;
// const eurCurs = 32;

// function convert (amount, curs) {
// 	console.log(curs * amount);
// }
// convert(500, usaCurs);
// convert(600 , eurCurs);



// lesson 27 Про важность return

// const  usdCur = 28;
// const discount = 0.9;

// function convent (amount, curr){
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);
// }
// const res = convent(500, usdCur);
// promotion(res);



// Coding Execise 6. Задание на работу в функциями.

// function sayHello(user) {
// 	return `Привет, ${user}!`;
// 	// console.log(`Привет, ${user}!`);
// }
// sayHello('Антон');

// function returnNeighboringNumbers(num) {
// 	 return [num - 1, num, num + 1];
// 	//  console.log([num - 1, num, num + 1]); 
// }
// returnNeighboringNumbers(5);

// function getMathResult(num, times) {
// 	if (typeof(times) !== 'number' || times <= 0) {
// 		return num;
// 	}

// 	let str = '';

// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			str += `${num * i}`;
// 		} else {
// 			str += `${num * i}---`;
// 		}
// 	}

// 	return str;
// }

// getMathResult(10, 5);



// lesson 28 Mетоды и свойства строк и чисел

// const str = 'tEst';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));
// console.log(fruit.indexOf('q'));

// const logg = 'Hello world';
// console.log(logg.slice(6, 11));
// console.log(logg.slice(2));
// console.log(logg.slice(-7, -1));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// Math Библиотека методов чисел в консоли
// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));



// Lesson 31 Callback функции

function first (){
	setTimeout(function() {
		console.log(1);
	},500);
}

function second (){
	console.log(2);
}

first ();
second ();

function lernJS (lang, calback){
	console.log(`I lern ${lang}`);
	calback();
}

function dane(){
	console.log('YES');
}
lernJS('Java Script', dane);
