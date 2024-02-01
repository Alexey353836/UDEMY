'use strict';

// Lesson 46. Навигация по DOM - элементам, data-атрибуты, преимущество for/of

// html
// console.log(document.documentElement);

// head
// console.log(document.head);

// body
// console.log(document.body);

// childNodes Получить все ноды и все узлы родителя
// console.log(document.body.childNodes);

//  firstChild Получить первый элемент родителя
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// lastChild Получить последний элемент родителя
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);


// Получение Родителя соседей и детей
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('#current').parentNode.parentNode);


//  data - ...   Дата атрибуты

// nextSibling Получение следующего элемента
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// nextSibling Получение ghtlsleituj элемента
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);


for (let node of document.body.childNodes ) {
	if (node.nodeName == '#text') {
		continue;
	}
	console.log(node);
}
