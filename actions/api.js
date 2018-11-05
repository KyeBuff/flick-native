import axios from '../axios/axios';
import { setMedia } from './state';
import media from '../static/films.json';

export const getMedia = () => dispatch => {
	axios.get('media')
		.then(({ data }) => {
			const media = data.data;
			dispatch(setMedia(media))
		})
		.catch(()=>{
			dispatch(setMedia(media))
		}) 
};