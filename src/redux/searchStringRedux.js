import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

//actions
export const createActionName = actionName =>  `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');


export const updateSearch = payload => ({ type: UPDATE_SEARCHSTRING, payload });
const searchStringReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'UPDATE_SEARCHSTRING':
        return action.payload
      default:
        return statePart;
    }
  }


  export default searchStringReducer;