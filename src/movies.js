// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    return movies.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) return 0;

const totalScores = movies.reduce((sum, movie) => sum + movie.score, 0);
const averageScore = totalScores / movies.length;

return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

if (dramaMovies.length === 0) return 0;

const totalScores = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
const averageScore = totalScores / dramaMovies.length;

return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sortedMovies = [...movies]; // Create a copy of the array
sortedMovies.sort((a, b) => {
if (a.year !== b.year) {
return a.year - b.year; // Sort by year
} else {
return a.title.localeCompare(b.title); // Sort alphabetically if years are the same
}
});
return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const sortedTitles = [...movies] 
.sort((a, b) => a.title.localeCompare(b.title)) 
.map(movie => movie.title); 
return sortedTitles.slice(0, 20); 
}
