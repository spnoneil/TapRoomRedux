import { combineReducers } from 'redux';
import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import selectKegReducer from './select-keg-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainKegList: kegListReducer,
  selectedKeg: selectKegReducer
});

export default rootReducer;