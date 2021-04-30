import selectKegReducer from '../../reducers/select-keg-reducer';
import * as c from '../../actions/ActionTypes';

describe("selectKegReducer", () => {

  let action;
  const keg1 = {
    names: "Heineken",
    brewer: "I forget",
    price: 5,
    abv: 8,
    ibu: 10,
    id: 1
  }
  const keg2 = {
    names: "Bud",
    brewer: "Anheuser",
    price: 3,
    abv: 2,
    ibu: 2,
    id: 2
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectKegReducer(null, {type: null})).toEqual(null);
  });

  test('Should return the selected keg', () => {
    action = {
      type: c.SELECT_KEG,
      names: "Bud",
      brewer: "Anheuser",
      price: 3,
      abv: 2,
      ibu: 2,
      id: 2
    }
    expect(selectKegReducer(null, action)).toEqual(keg2);
  })
})