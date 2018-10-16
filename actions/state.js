export const SET_MEDIA = Symbol('SET_MEDIA');

export const setMedia = (media) => {
	return {
		type: SET_MEDIA,
		media: media,
	};
};