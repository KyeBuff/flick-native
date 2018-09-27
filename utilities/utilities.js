import axios from '../axios/axios';
import films from '../static/films.json';

export const fillDatabase = () => {

	function randomIndex(arrLength) {
		return Math.ceil(Math.random() * arrLength) -1;
	}

	const genres = [
		"Comedy",
		"Horror",
		"Fantasy",
		"Adventure",
		"Drama",
		"Action",
		"Crime",
		"Thriller",
		"Biography",
    ];

	const apps = [
		"Netflix",
		"Amazon Video",
		"BBC",
		"ITV",
		"40D",
		"iTunes",
		"Google Play",
		"Rakuten",
    ];

	films.forEach(film => {
		const filmObject = {
			title: film.name,
			synopsis: film.synopsis,
			isFilm: Math.round(Math.random()),
			img_url: film.tmdbImageId ? "https://image.tmdb.org/t/p/original/"+film.tmdbImageId+".jpg" : null,
			apps: [],
			genres: [],
		}

		filmObject.apps.push(apps[randomIndex(apps.length)]);
		filmObject.genres.push(genres[randomIndex(genres.length)]);

		// console.log(filmObject.apps);

		return axios.post('media', filmObject)
			.then( response => {
				console.log(response.data);
			})
			.catch( error => {
				if(error && error.response) {
					console.log(error.response.data.message);
				} else {
					console.log('ERROR');
				}
			} );
	});

}

