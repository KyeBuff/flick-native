import {SET_MEDIA} from '../actions/state';

const setMedia = (state, media) => ({
	...state,
	media,
}) 

export default (state, action) => {
    switch (action.type) {
    	case SET_MEDIA: return setMedia(state, action.media)
        default: return state;
    }
}