import kegListReducer from '../../reducers/keg-list-reducer'

describe('kegListReducer', () => {

  let action;
  const newKegData = {
    names: 'Brew Dr.',
    brewer: 'Brew King',
    price: 3,
    abv: 7,
    ibu: 10,
    pintsLeft: 124,
    id: 1
  };
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, {type:null})).toEqual({});
  });

  test('Should successfully add new keg data to mainKegList', () => {
    const { names, brewer, price, abv, ibu, pintsLeft, id } = newKegData;
    action = {
      type: 'ADD_KEG',
      names: names,
      brewer: brewer,
      price: price,
      abv: abv,
      ibu: ibu,
      pintsLeft: pintsLeft,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        brewer: brewer,
        price: price,
        abv: abv,
        ibu: ibu,
        pintsLeft: pintsLeft,
        id: id
      }
    })
  });
});