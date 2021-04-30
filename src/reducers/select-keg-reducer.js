import * as c from '../actions/ActionTypes';

export default (state = null, action) => {
  const { names, brewer, price, abv, ibu, id } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return {
        names,
        brewer,
        price,
        abv,
        ibu,
        id
      }
      default:
        return state;
  }
}