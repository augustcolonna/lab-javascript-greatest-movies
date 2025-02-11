// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   return moviesArray.map((a) => a.director);
}
//bonus 1.1

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredArray = moviesArray.filter((a => a.director === 'Steven Spielberg' && a.genre.includes("Drama")));
        return filteredArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length){
        return 0;
    }

    const movieScores = moviesArray.map((a) => {
        if(!a.score){
            return 0
        }else{
        return a.score;
    }
    });

    const totalScores = movieScores.reduce((a, b) => {
        return a + b;
    });
    
    const roundedScore = Math.round((totalScores / movieScores.length* 100)) / 100;
    return roundedScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filteredArray = moviesArray.filter((a => a.genre.includes("Drama")));
    
    return scoresAverage(filteredArray);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortByYear = moviesArray.sort((a, b) => a.year - b.year);
    const titleSort = sortByYear.sort((a,b) => {
    const title1 = a.title;
    const title2 = b.title;
        if(a.year === b.year){
            if (title1 < title2){ 
                return -1;
            }
            else if(title1 > title2){
                return 1;
            } 
            else{
                return 0;
            }
        }});
    return Array.from(titleSort);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedArr = moviesArray.map((a)=>a.title);
    sortedArr.sort((a,b) => {
        if(a > b){
            return 1
        }
        if(a < b){
            return -1
        }else{
            return 0
        }
    });
    return Array.from(sortedArr).splice(0,20)
}






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let highestScore = 0;
    let winningYear;
    
    if(!moviesArray.length){
        return null;
    }
    
    const masterObj = {};
    moviesArray.forEach((currMovie) => {
        if(!masterObj[currMovie.year]){
            masterObj[currMovie.year] = [currMovie]
        }
        else{
            masterObj[currMovie.year].push(currMovie)
        }
    });

    for(let currYear in masterObj) {
        let yearlyScore = scoresAverage(masterObj[currYear])
        if(yearlyScore > highestScore) {
            highestScore = yearlyScore
            winningYear = currYear
        }
    }
    return `The best year was ${winningYear} with an average score of ${highestScore}`
}
