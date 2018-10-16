import axios from '../axios/axios';
import { setMedia } from './state';

export const getMedia = () => dispatch => {
	axios.get('media').then(({ data }) => {
		const media = data.data;
		dispatch(setMedia(media))
	});
};