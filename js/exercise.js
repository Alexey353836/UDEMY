'use strict';

// Excecise 1 Задание на создание правильных переменных.

// let userName = 'John';
// let  userNumber = 25;
//     userNumber = 24;




// Execise 2 Задание на создание правильных типов данных

// const storeName = 'My store';
// const storeDescription = {
// 	budget:10000,
// 	emploes:['Elya', 'Sveta', 'Ira'],
// 	products: {cofe: 20, tee: 10},
// 	open:true
// };
// console.log(storeName);
// console.log(storeDescription);




// Execise 3 Задание на использование цыклов и условий.

// for (let i = 5; i <= 10; i++){
// 	console.log(i);
// }


// for (let i = 20; i >= 10; i--){
// 	console.log(i);
// 	if(i == 13){
// 		break;
// 	}
// }


// for (let i = 1; i <= 10; i++){
//     if (i % 2 !== 0){
//         console.log(i);
//     }
// }


// let i = 0;
// while(i <= 16){
//     i++;
//     if(i % 2 == 0){
//         continue;
//     }else {
//         console.log(i);
//     }
// }

// let i = 0;
// while(i <= 16){
//     i++;
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }




// Execise-4. Продвинутые задания на использование цыклов и условий.

// 1.
// function firstTask() {
// 	const arr = [5, 6, 7, 8, 9, 10];
// 	const  result = [];
// 	for (let i = 0; i < arr.length; i++){
// 		result[i] = arr[i];
// 	}
// 	console.log(result);
// 	return result;
    
// }
// firstTask();

// 2.
function secondTask(){
	const data = [5, 10, 'Shopping', 28, 'Homework'];
	for (let i = 0; i < data.length; i++){
		if(typeof(data[i]) === 'number'){
			data[i] = data[i] * 2;
		}else if(typeof(data[i]) === 'string'){
			data[i] = `${data[i]} - done`; 
		}
	}
	console.log(data);
	return data;
}
secondTask();














