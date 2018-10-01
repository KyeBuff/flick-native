import axios from '../axios/axios';

export const getMedia = () => dispatch => {
	axios.get('media').then(({ title, id, img_url }) => {
		const media = data;
		dispatch(setMedia(media))
	});
};