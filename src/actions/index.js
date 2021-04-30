import * as c from './ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const selectKeg = (keg) => {
  const { names, brewer, price, abv, ibu, pintsLeft, id } = keg;
  return {
    type: c.SELECT_KEG,
    names,
    brewer,
    price,
    abv,
    ibu,
    pintsLeft,
    id
  }
}

export const unselectKeg = () => ({
  type: c.UNSELECT_KEG
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
    pintsLeft: 124,
    id: id
  }
}