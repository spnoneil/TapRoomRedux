import * as c from './ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { names, brewer, price, abv, ibu, id } = keg;
  return {
    type: c.ADD_KEG,
    names: names,
    brewer: brewer,
    price: price,
    abv: abv,
    ibu: ibu,
    id: id
  }
}