"use strict";

const numberOfFilms = +prompt('Сколько фильмов ты просмотрел за этот год', '');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: true
};

const a = prompt('Один из последних фильмов', ''),
b = prompt('На сколько оцените его?', ''),
c = prompt('Один из последних фильмов', ''),
d = prompt('На сколько оцените его?', '');

    personalMovieDB.movie[a] = b;
    personalMovieDB.movie[c] = d;

    console.log(personalMovieDB);

