/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

// Lesson 19 Практика часть 1. Начинаем создавать проиложение для консоли

const  numberOfFils =  +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
	count:numberOfFils,
	muvies:{},
	actors:{},
	genres:[],
	privat: false
};


const a = prompt('Один из последних просмотренных фильмов', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних просмотренных фильмов', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDB.muvies[a] = b;
personalMovieDB.muvies[c] = d;

console.log(personalMovieDB);

