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

})