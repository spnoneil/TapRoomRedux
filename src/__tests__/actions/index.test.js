import * as actions from '../../actions';

describe('keg shop actions', () => {
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      names: "Budweiser",
      brewer: "Anheuser",
      price: 5,
      abv: 5,
      ibu: 3,
      id: 1
    })).toEqual({
      type: "ADD_KEG",
      names: "Budweiser",
      brewer: "Anheuser",
      price: 5,
      abv: 5,
      ibu: 3,
      id: 1
    })
  })
})