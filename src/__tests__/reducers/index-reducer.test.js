import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import selectKegReducer from '../../reducers/select-keg-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      mainKegList: {},
      formVisibleOnPage: false,
      selectedKeg: null
    });
  });
  test('Check that initial state of kegListReducer matches root', () => {
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, { type: null }));
  });
  test('Check that initial state of formVisibleReducer matches root', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  test('Check that ADD_KEG action works for kegListReducer AND root', () => {
    const action = {
      type: 'ADD_KEG',
      names: "Bud",
      brewer: "Bud Boiz",
      price: 5,
      abv: 3,
      ibu: 1,
      pintsLeft: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, action))
  });
  test('Check that TOGGLE_FORM action works for formVisibleReducer AND root', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  })


})