import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';
import { createStore, combineReducers } from 'redux';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = state => state.columns;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = state => state.lists;

export const getFavouriteCard = state => state.cards.filter((card) => card.isFavourite === true);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCart = payload => ({ type: 'ADD_CARD', payload });
export const updateSearch = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const addList = payload => ({type: 'ADD_LIST', payload});
export const toggleCardFavourite = payload => ({ type: 'TOGGLE_CARD_FAVOURITE', payload });

const reducer = (state, action) => {
  switch (action.type){
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, { ...action.payload, id: shortid()}]};
    case 'UPDATE_SEARCHSTRING':
      return {...state, searchString: action.payload}
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, { ...action.payload, id: shortid()}]};
    case 'TOGGLE_CARD_FAVOURITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavourite: !card.isFavourite } : card) };
    default:
      return state; 
  }
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;