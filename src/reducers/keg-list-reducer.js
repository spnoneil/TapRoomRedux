import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { names, brewer, price, abv, ibu, pintsLeft, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id] : {
          names: names,
          brewer: brewer,
          price: price,
          abv: abv,
          ibu: ibu,
          pintsLeft: pintsLeft,
          id: id
        }
      });
    default:
      return state;
  }
};