import selectKegReducer from '../../reducers/select-keg-reducer';
import * as c from '../../actions/ActionTypes';

describe("selectKegReducer", () => {

  let action;

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectKegReducer(null, {type: null})).toEqual(null);
  });
})