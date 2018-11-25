import { getCelebrities, putCelebrity } from './../services/thumbsServices';

const initialState = {
    celebrities: []
};

export const LOAD = 'LOAD';
export const UPDATE = 'UPDATE';

export const loadCelebritiesAction = (celebrities) => ({ type: LOAD, payload: celebrities });
export const updateCelebrity = (celebrity) => ({ type: UPDATE, payload: celebrity });

export const fetchCelebritiesAction = () => {
    return (dispatch) => {
      getCelebrities()
        .then(celebrities => {
          console.log(celebrities);
          dispatch(loadCelebritiesAction(celebrities));
        });
    }
};

export const upVoteCelebrityAction = (celebrity) => {
  console.log('up')
    celebrity.thumbsup += 1;
    return (dispatch) => {
        putCelebrity(celebrity).then(celebrity => dispatch(updateCelebrity(celebrity)));
    };
};

export const downVoteCelebrityAction = (celebrity) => {
  console.log('down')
  celebrity.thumbsdown += 1;
  return (dispatch) => {
      putCelebrity(celebrity).then(celebrity => dispatch(updateCelebrity(celebrity)));
  };
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
          return { ...state, celebrities: action.payload };
        case UPDATE:
          return { ...state, celebrity: action.payload };
        default:
            return state;
    }
};