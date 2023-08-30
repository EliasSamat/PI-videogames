import { createStore } from 'redux';

// Definir el estado inicial
const initialState = {
  videogames: [],
};

// Definir el reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIDEOGAMES':
      return {
        ...state,
        videogames: action.payload,
      };
    default:
      return state;
  }
};

//  El store
const store = createStore(rootReducer);

export default store;

// Acciones
export const setVideogames = videogames => ({
    type: 'SET_VIDEOGAMES',
    payload: videogames,
  });
  