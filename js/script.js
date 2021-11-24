"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms == '' || numberOfFilms == null || /*isNaN - проверяем что пользователь ввел не число */ isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("один из последних просмотренных фильмов?", "");
        let b = +prompt("на сколько оцените его?");

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = [b];
        } else {
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('вы киноман');
    } else {
        console.log('произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) { // Создаем функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() { // Создаем функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`ваш любимый фильм под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();

// if (4 == 5) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// let num = 50;

// if(num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');


// switch (num) {
//     case 49:
//         console.log('не верно');
//         break;
//     case 100:
//         console.log('не верно');
//         break;
//     case 52:
//         console.log('верно');
//         break;
//     default: //пишется, если все условия не подходят 
//         console.log('э че там');
//         break;
// }

// let num = 50;

// while (num > 55) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// const calc = (a, b) => {
//     console.log(1);
//     return a + b;
// };

// МЕТОДЫ СТРОК

// const logg = "а баба гала мага туалетная бумага";

// console.log(logg.slice(12, 23)); вырезает фрагмент начиная с заданного индекса и заканчивая вторым заданным индексом, но не включая его, то есть до него

// console.log(logg.substr(12, 23));

// МЕТОДЫ ЧИСЕЛ;

// const num = 12.2;
// console.log(Math.round(num)); округляет до ближайшего целого


// const test = "12.2px";
// console.log(parseInt(test)); округляет и возвращает строку в числовой тип данных
// console.log(parseFloat(test)); возвращает строку в дробном варианте в числовом типе данных