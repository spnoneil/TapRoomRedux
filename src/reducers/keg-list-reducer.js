export default (state = {}, action) => {
  const { names, brewer, price, abv, ibu, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id] : {
          names: names,
          brewer: brewer,
          price: price,
          abv: abv,
          ibu: ibu,
          id: id
        }
      });
    default:
      return state;
  }
};