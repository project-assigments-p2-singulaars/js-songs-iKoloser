// Exercise 1: Get the array of all Artists.
function getAllArtists(array) {
    const artists = array.map(song => song.artist);
    return artists;
}

// Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist) {
    const songs = array.filter(song => song.artist === artist);
    return songs;
}

// Exercise 3: Alphabetic order by title
function orderAlphabetically(array) {
    const clonedArray = array.slice();
    clonedArray.sort((a, b) => a.title.localeCompare(b.title));
    const titles = clonedArray.map(song => song.title);
    return titles.slice(0, 10);
}

// Exercise 4: Order by year, ascending
function orderByYear(array) {
    const clonedArray = array.slice();
    clonedArray.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return clonedArray;
}

// Exercise 5: Filter songs by genre
function songsByGenre(array, genre) {
    const filteredSongs = array.filter(song => song.genre.includes(genre));
    return filteredSongs;
}

// Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(array) {
    return array.map(song => {
        const [min, sec] = song.duration.split('min ');
        const totalSeconds = parseInt(min, 10) * 60 + parseInt(sec, 10);
        return {
            ...song,
            duration: totalSeconds
        };
    });
}

// Exercise 7: Get the longest song
function getLongestSong(array) {
    const longestDurationSeconds = Math.max(...array.map(song => {
        const [min, sec] = song.duration.split('min ');
        return parseInt(min, 10) * 60 + parseInt(sec, 10);
    }));
    const longestSongs = array.filter(song => {
        const [min, sec] = song.duration.split('min ');
        const totalSeconds = parseInt(min, 10) * 60 + parseInt(sec, 10);
        return totalSeconds === longestDurationSeconds;
    });
    return longestSongs.map(song => ({ ...song, duration: longestDurationSeconds }));
}

// Exercise 8: Get the shortest song
function getShortestSong(array) {
    const shortestDuration = Math.min(...array.map(song => song.duration));
    const shortestSongs = array.filter(song => song.duration === shortestDuration);
    return shortestSongs;
}

export {
    getAllArtists,
    getSongsFromArtist,
    orderAlphabetically,
    orderByYear,
    songsByGenre,
    minutsToSeconds,
    getLongestSong,
    getShortestSong
};
